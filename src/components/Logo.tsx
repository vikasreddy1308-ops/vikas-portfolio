type LogoSize = "sm" | "md" | "lg";

export default function Logo({ size = "md" }: { size?: LogoSize }) {
  const sizes = {
    sm: {
      box: "w-8 h-8 text-sm",
      text: "text-sm",
    },
    md: {
      box: "w-10 h-10 text-base",
      text: "text-base",
    },
    lg: {
      box: "w-14 h-14 text-lg",
      text: "text-xl",
    },
  };

  return (
    <div className="flex items-center gap-3 select-none">
      {/* Monogram */}
      <div
        className={`flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 text-slate-900 font-bold ${sizes[size].box}`}
      >
        VR
      </div>

      {/* Name */}
      <span
        className={`font-semibold tracking-tight text-slate-100 ${sizes[size].text}`}
      >
        Vikas <span className="text-slate-400">Reddy</span>
      </span>
    </div>
  );
}
