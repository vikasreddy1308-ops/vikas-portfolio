import { Trophy, Code2, ExternalLink } from "lucide-react";

const CompetitiveProgramming = () => {
  return (
    <section id="competitive-programming" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-14 text-cyan-400 text-center">
          Competitive Programming
        </h2>

        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 sm:p-8">
          {/* HEADER */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                <Trophy size={26} />
              </div>

              <div>
                <h3 className="text-2xl font-semibold">
                  Codeforces
                </h3>
                <p className="text-slate-400">
                  Competitive Programming Platform
                </p>
              </div>
            </div>

            <a
              href="https://codeforces.com/profile/vikasreddy1308"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              <ExternalLink size={18} />
              View Profile
            </a>
          </div>

          {/* STATS */}
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <StatCard
              icon={<Code2 size={22} />}
              label="Current Rating"
              value="1542"
              sub="Specialist"
            />

            <StatCard
              icon={<Code2 size={22} />}
              label="Problems Solved"
              value="180+"
              sub="Across topics"
            />

            <StatCard
              icon={<Code2 size={22} />}
              label="Primary Focus"
              value="Algorithms"
              sub="Core CS"
            />
          </div>

          {/* FOCUS AREAS */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Strong Focus Areas
            </h4>

            <div className="flex flex-wrap gap-3">
              {[
                "Graphs",
                "Greedy Algorithms",
                "Binary Search",
                "Dynamic Programming",
              ].map((topic) => (
                <span
                  key={topic}
                  className="px-4 py-2 rounded-lg bg-slate-800/60 border border-slate-700 text-slate-300 hover:border-cyan-400/50 hover:text-cyan-400 transition"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function StatCard({
  icon,
  label,
  value,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-5 flex gap-4 items-center">
      <div className="text-cyan-400">{icon}</div>
      <div>
        <p className="text-sm text-slate-400">{label}</p>
        <p className="text-xl font-semibold">{value}</p>
        <p className="text-xs text-slate-500">{sub}</p>
      </div>
    </div>
  );
}

export default CompetitiveProgramming;
