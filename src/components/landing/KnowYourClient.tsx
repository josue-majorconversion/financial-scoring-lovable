const profileRows: [string, string][] = [
  ["Monthly income", "$30,000"],
  ["Monthly savings", "$2,500"],
  ["Birth year", "1970"],
  ["Housing", "Own"],
  ["Credit score", "800"],
];

const assetRows = [
  ["Retirement (401k/IRA)", "$1,895,000"],
  ["Roth / tax-free", "$0"],
  ["Brokerage", "$50,000"],
  ["Bank / CDs", "$31,000"],
  ["Insurance cash value", "$0"],
];

function DataCard({
  title,
  rows,
}: {
  title: string;
  rows: [string, string][];
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#04141a] p-4 text-left sm:p-5">
      <div className="border-b border-white/10 pb-2">
        <span className="font-display text-[11px] font-bold uppercase tracking-[0.22em] text-mint">
          {title}
        </span>
      </div>
      <ul className="mt-3 space-y-2.5">
        {rows.map(([label, value]) => (
          <li
            key={label}
            className="flex items-baseline justify-between gap-3 text-[13px] sm:text-sm"
          >
            <span className="text-white/60">{label}:</span>
            <span className="font-display font-bold text-white">{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function KnowYourClient() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="flex flex-col items-center gap-10 text-center lg:flex-row lg:items-center lg:gap-14 lg:text-left">
          <h2 className="flex-1 font-display text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
            Would you close more deals if you knew the client's{" "}
            <span className="text-gradient-mint">exact financial status?</span>
          </h2>

          <div className="w-full flex-1">
            <div className="rounded-2xl border border-border bg-[#02090b] p-4 glow-mint sm:p-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <DataCard title="Profile" rows={profileRows} />
                <DataCard title="Saved Assets" rows={assetRows} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
