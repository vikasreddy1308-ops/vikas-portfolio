export default function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 text-slate-900 font-bold">
        VR
      </div>
      <span className="font-semibold">
        Vikas <span className="text-slate-400">Reddy</span>
      </span>
    </div>
  );
}
