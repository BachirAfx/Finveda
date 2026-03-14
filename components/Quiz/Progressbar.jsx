export default function ProgressBar({ current, total }) {
  const pct = (current / total) * 100;

  return (
    <div className="max-w-[680px] mx-auto px-6 mb-5">
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-[12.5px] font-medium text-[#888] tracking-[-0.01em]">
          Progress
        </span>
        <span className="text-[12.5px] font-semibold text-[#0F0F0F] tracking-[-0.01em]">
          {current} / {total}
        </span>
      </div>

      {/* Segmented dots */}
      <div className="flex items-center gap-1 mb-2">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className="flex-1 h-1.5 rounded-full transition-all duration-500"
            style={{
              background: i < current ? "#0F0F0F" : "#E8E8E8",
              transitionDelay: i < current ? `${i * 30}ms` : "0ms",
            }}
          />
        ))}
      </div>

      {/* Percentage label */}
      <div className="flex justify-between text-[11px] text-[#BBB]">
        <span>Start</span>
        <span>{Math.round(pct)}% complete</span>
        <span>Finish</span>
      </div>
    </div>
  );
}