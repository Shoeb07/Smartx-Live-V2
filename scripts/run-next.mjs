import { spawn } from 'node:child_process'
import { createHash } from 'node:crypto'
import { open, readFile, rm } from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import process from 'node:process'

const command = process.argv[2]
const extraArgs = process.argv.slice(3)

if (!command) {
  throw new Error('Expected a Next.js command such as dev, build, or start.')
}

const projectRoot = process.cwd()
const nodeModules = path.join(projectRoot, 'node_modules')
const nextBin = path.join(nodeModules, 'next', 'dist', 'bin', 'next')
const existingNodePath = process.env.NODE_PATH
const projectId = createHash('sha1').update(projectRoot.toLowerCase()).digest('hex').slice(0, 12)
const devLockPath = path.join(os.tmpdir(), `smartx-next-dev-${projectId}.lock`)

let ownsDevLock = false

async function processIsRunning(pid) {
  if (!Number.isInteger(pid) || pid <= 0) return false

  try {
    process.kill(pid, 0)
    return true
  } catch {
    return false
  }
}

async function acquireDevLock() {
  if (command !== 'dev') return

  try {
    const handle = await open(devLockPath, 'wx')
    await handle.writeFile(String(process.pid))
    await handle.close()
    ownsDevLock = true
  } catch (error) {
    if (error?.code !== 'EEXIST') throw error

    const existingPid = Number.parseInt(await readFile(devLockPath, 'utf8').catch(() => ''), 10)
    if (await processIsRunning(existingPid)) {
      console.error(`SmartX dev server is already running (PID ${existingPid}). Use the existing http://localhost:3000 session instead of starting another one.`)
      process.exit(1)
    }

    await rm(devLockPath, { force: true })
    return acquireDevLock()
  }
}

async function releaseDevLock() {
  if (!ownsDevLock) return
  ownsDevLock = false
  await rm(devLockPath, { force: true }).catch(() => {})
}

await acquireDevLock()

const child = spawn(process.execPath, [nextBin, command, ...extraArgs], {
  cwd: projectRoot,
  env: {
    ...process.env,
    NODE_PATH: existingNodePath
      ? `${nodeModules}${path.delimiter}${existingNodePath}`
      : nodeModules,
  },
  stdio: 'inherit',
})

child.on('error', (error) => {
  console.error(error)
  releaseDevLock().finally(() => process.exit(1))
})

child.on('exit', (code, signal) => {
  releaseDevLock().finally(() => {
    if (signal) {
      process.kill(process.pid, signal)
      return
    }

    process.exit(code ?? 1)
  })
})
