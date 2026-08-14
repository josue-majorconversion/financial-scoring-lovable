import logo from "@/assets/financial-scoring-logo.png.asset.json";

export function Logo({ className = "h-9" }: { className?: string }) {
  return (
    <img
      src={logo.url}
      alt="Financial Scoring"
      className={`${className} w-auto object-contain`}
    />
  );
}
