export default function LastUpdated({ date }: { date: string }) {
  return (
    <div className="flex items-center gap-2 text-[11px] text-white/25 mb-8">
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
      Last updated: {date}
      <span className="text-white/15">·</span>
      <span>Reviewed by SmartX Solutions team</span>
    </div>
  )
}
