import { useState } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import * as SwitchIcons from "switch-icons";

// Every icon export becomes available inside the editor's scope, so
// typing `<Naira />` in the code box just works without an import line.
const { createIcon: _createIcon, ...iconScope } = SwitchIcons as any;

const EXAMPLES: Record<string, string> = {
  Basics: `<div style={{ display: "flex", gap: 16, alignItems: "center" }}>
  <ArrowRight size={24} />
  <Naira size={24} />
  <ShieldLock size={24} />
</div>`,
  "Sizes & stroke": `<div style={{ display: "flex", gap: 16, alignItems: "center" }}>
  <Waybill size={20} strokeWidth={1.5} />
  <Waybill size={32} strokeWidth={2} />
  <Waybill size={48} strokeWidth={2.5} />
</div>`,
  "Colors (Tailwind-style inline)": `<div style={{ display: "flex", gap: 16 }}>
  <Storefront size={28} color="#059669" />
  <Barcode size={28} color="#0f172a" />
  <Receipt size={28} color="#dc2626" />
</div>`,
  "A small nav bar": `<div style={{
    display: "flex",
    alignItems: "center",
    gap: 20,
    padding: "12px 20px",
    background: "#0f172a",
    borderRadius: 12,
    color: "white",
  }}>
  <Home size={20} />
  <Search size={20} />
  <Bell size={20} />
  <Users size={20} />
  <Settings size={20} />
</div>`,
};

export default function Playground() {
  const [code, setCode] = useState(EXAMPLES["Basics"]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-semibold text-slate-900">Playground</h1>
      <p className="mt-2 text-slate-500 text-sm max-w-xl">
        Every icon from Switch Icons is already in scope — write JSX below
        and see it render live. No import statements needed here.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {Object.keys(EXAMPLES).map((label) => (
          <button
            key={label}
            onClick={() => setCode(EXAMPLES[label])}
            className="text-xs font-medium px-3 py-1.5 rounded-full border border-slate-200 text-slate-600 hover:border-slate-400 transition"
          >
            {label}
          </button>
        ))}
      </div>

      <LiveProvider code={code} scope={iconScope} noInline={false}>
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <div className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">
              Code
            </div>
            <div className="rounded-xl overflow-hidden border border-slate-800">
              <LiveEditor
                onChange={setCode}
                className="font-mono text-sm"
                style={{ minHeight: 260, background: "#0f172a" }}
              />
            </div>
            <LiveError className="mt-3 text-xs text-red-600 whitespace-pre-wrap" />
          </div>

          <div>
            <div className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">
              Preview
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 min-h-[260px] flex items-center justify-center">
              <LivePreview />
            </div>
          </div>
        </div>
      </LiveProvider>
    </div>
  );
}