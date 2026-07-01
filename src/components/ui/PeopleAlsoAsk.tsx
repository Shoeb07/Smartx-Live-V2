interface PAA {
  q: string
  a: string
}

export default function PeopleAlsoAsk({ items }: { items: PAA[] }) {
  return (
    <div className="my-12">
      <h2 className="font-syne font-bold text-xl text-white mb-6">
        People Also Ask
      </h2>
      <div className="space-y-3">
        {items.map((item, i) => (
          <details
            key={i}
            className="group rounded-xl border border-white/[0.07] bg-[#0d0d14] hover:border-white/15 transition-all cursor-pointer"
          >
            <summary className="p-5 font-syne font-bold text-[14px] text-white list-none flex items-center justify-between">
              {item.q}
              <span className="text-white/30 group-open:rotate-180 transition-transform ml-4 shrink-0">
                ↓
              </span>
            </summary>
            <p className="px-5 pb-5 text-white/55 text-[14px] leading-[1.8]">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </div>
  )
}
