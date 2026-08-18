import { Link } from "react-router-dom";
import { CodeBlock } from "../components/CodeBlock";
import * as Icons from "switch-icons";

const iconMap = Icons as any;
const showcase = ["Naira", "Waybill", "AiSpark", "ShieldLock", "Storefront", "Webhook"];

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-semibold text-slate-900 tracking-tight">
        Switch Icons
      </h1>
      <p className="mt-4 text-lg text-slate-600 max-w-2xl">
        A developer-focused React icon library built for the icons developers
        actually need — general UI, plus fintech, logistics, AI, security,
        commerce, and technology icons that mainstream libraries treat as an
        afterthought.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {showcase.map((name) => {
          const Icon = iconMap[name];
          if (!Icon) return null;
          return (
            <div
              key={name}
              className="w-14 h-14 flex items-center justify-center bg-white border border-slate-200 rounded-xl"
            >
              <Icon size={24} className="text-slate-700" />
            </div>
          );
        })}
      </div>

      <div className="mt-10 flex gap-3">
        <Link
          to="/docs/getting-started"
          className="px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition"
        >
          Get Started
        </Link>
        <Link
          to="/playground"
          className="px-4 py-2 rounded-lg border border-slate-200 text-slate-700 text-sm font-medium hover:border-slate-400 transition"
        >
          Try the Playground
        </Link>
        <Link
          to="/icons"
          className="px-4 py-2 rounded-lg border border-slate-200 text-slate-700 text-sm font-medium hover:border-slate-400 transition"
        >
          Browse Icons
        </Link>
      </div>

      <div className="mt-14">
        <h2 className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-3">
          Quick usage
        </h2>
        <CodeBlock
          code={`import { Naira, Waybill, ShieldLock } from "switch-icons";

export function Example() {
  return (
    <div>
      <Naira size={24} />
      <Waybill size={24} strokeWidth={1.5} />
      <ShieldLock size={24} color="#0f172a" />
    </div>
  );
}`}
        />
      </div>
    </div>
  );
}