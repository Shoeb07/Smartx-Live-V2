import { mkdir, readlink, rm, symlink } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import os from 'node:os'
import path from 'node:path'

const projectRoot = process.cwd()
const nextPath = path.join(projectRoot, '.next')
const isWindowsOneDrive = process.platform === 'win32' && /[\\/]OneDrive[\\/]/i.test(projectRoot)

if (isWindowsOneDrive) {
  const cacheRoot = path.join(os.tmpdir(), 'smartx-solutions-next-cache')
  let alreadyLinked = false

  if (existsSync(nextPath)) {
    try {
      const linkedTarget = await readlink(nextPath)
      alreadyLinked = path.resolve(projectRoot, linkedTarget) === path.resolve(cacheRoot)
    } catch {
      alreadyLinked = false
    }
  }

  if (!alreadyLinked) {
    await rm(nextPath, { recursive: true, force: true })
    await mkdir(cacheRoot, { recursive: true })
    await symlink(cacheRoot, nextPath, 'junction')
  }

  console.log(`Using local Next.js cache: ${cacheRoot}`)
}
