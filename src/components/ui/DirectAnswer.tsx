export default function DirectAnswer({
  question,
  answer,
  cite,
}: {
  question: string
  answer: string
  cite?: string
}) {
  return (
    <div
      className="direct-answer my-8 p-6 rounded-2xl border-l-4"
      style={{
        borderLeftColor: '#6c63ff',
        background: 'rgba(108,99,255,0.06)',
        borderTop: '1px solid rgba(108,99,255,0.15)',
        borderRight: '1px solid rgba(108,99,255,0.15)',
        borderBottom: '1px solid rgba(108,99,255,0.15)',
      }}
      itemScope
      itemType="https://schema.org/Question"
    >
      <p className="text-[11px] uppercase tracking-[0.12em] text-[#6c63ff] mb-2">
        Quick Answer
      </p>
      <p
        className="font-syne font-bold text-white text-[15px] mb-3"
        itemProp="name"
      >
        {question}
      </p>
      <p
        className="text-white/70 text-[14px] leading-[1.8]"
        itemProp="acceptedAnswer"
        itemScope
        itemType="https://schema.org/Answer"
      >
        <span itemProp="text">{answer}</span>
      </p>
      {cite && (
        <p className="text-white/25 text-[11px] mt-3">Source: {cite}</p>
      )}
    </div>
  )
}
