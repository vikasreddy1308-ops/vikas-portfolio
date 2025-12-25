export default function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: {
      box: "w-9 h-9 text-sm",
      text: "text-base",
    },
    md: {
      box: "w-11 h-11 text-base",
      text: "text-lg",
    },
    lg: {
      box: "w-14 h-14 text-lg",
      text: "text-2xl",
    },
  };

  return (
    <div className="flex items-center gap-3 select-none">
      {/* Monogram */}
      <div
        className={`flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 text-slate-900 font-bold ${sizes[size].box}`}
      >
        TT
      </div>

      {/* Name */}
      <span
        className={`font-semibold tracking-tight text-slate-100 ${sizes[size].text}`}
      >
        Tharun <span className="text-slate-400">Thirupathi</span>
      </span>
    </div>
  );
}
