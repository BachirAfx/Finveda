function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M2.5 7L5.5 10L11.5 4"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          strokeDasharray: 60,
          strokeDashoffset: 60,
          animation: "drawCheck 0.4s ease 0.1s forwards",
        }}
      />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M2.5 2.5L9.5 9.5M9.5 2.5L2.5 9.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        style={{
          strokeDasharray: 30,
          strokeDashoffset: 30,
          animation: "drawCross 0.3s ease 0.05s forwards",
        }}
      />
    </svg>
  );
}

export default function FeedbackSection({ isCorrect, explanation }) {
  return (
    <div
      className={`mx-8 mb-6 p-4 rounded-2xl border flex gap-3.5 items-start ${
        isCorrect
          ? "bg-[#FBF7EC] border-[#E8DFC0]"
          : "bg-[#FDF3F3] border-[#F0CCCC]"
      }`}
      style={{ animation: "slideUp 0.3s ease both" }}
    >
      {/* Icon */}
      <div
        className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
          isCorrect ? "bg-[#C9A84C]" : "bg-[#D97070]"
        }`}
      >
        {isCorrect ? <CheckIcon /> : <CrossIcon />}
      </div>

      {/* Content */}
      <div>
        <div
          className={`text-[13px] font-bold tracking-[-0.01em] mb-1 ${
            isCorrect ? "text-[#7A6030]" : "text-[#8A4040]"
          }`}
        >
          {isCorrect ? "✓ Correct!" : "✗ Not quite right"}
        </div>
        <div className="text-[13px] text-[#666] leading-relaxed tracking-[-0.01em]">
          {explanation}
        </div>
      </div>

      <style>{`
        @keyframes drawCheck {
          from { stroke-dashoffset: 60; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes drawCross {
          from { stroke-dashoffset: 30; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}