import { useMemo, useState } from "react";
import * as SwitchIcons from "switch-icons";
import { CATEGORIES, ICON_META } from "../iconMeta";

// Cast to `any` here deliberately: this file consumes switch-icons as an
// external package, and duplicate @types/react copies across the workspace
// can make structurally-identical prop types appear incompatible to tsc.
// The actual components and their runtime props are unaffected.
const { createIcon: _createIcon, ...iconMap } = SwitchIcons as any;

function useCopy() {
  const [copied, setCopied] = useState<string | null>(null);
  const copy = (label: string, text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(label);
      setTimeout(() => setCopied((c) => (c === label ? null : c)), 1500);
    });
  };
  return { copy, copied };
}

function CopyButton({
  label,
  text,
  onCopy,
  isCopied,
}: {
  label: string;
  text: string;
  onCopy: (label: string, text: string) => void;
  isCopied: boolean;
}) {
  return (
    <button
      onClick={() => onCopy(label, text)}
      className="text-xs font-medium px-2.5 py-1 rounded-md border border-slate-200 bg-white hover:border-emerald-400 hover:text-emerald-600 transition text-slate-600"
    >
      {isCopied ? "Copied!" : label}
    </button>
  );
}

function DetailPanel({
  name,
  onClose,
}: {
  name: string;
  onClose: () => void;
}) {
  const Icon = iconMap[name];
  const [size, setSize] = useState(48);
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [color, setColor] = useState("#0f172a");
  const { copy, copied } = useCopy();

  if (!Icon) return null;

  const importLine = `import { ${name} } from "switch-icons";`;
  const jsxLine = `<${name} size={${size}} strokeWidth={${strokeWidth}} color="${color}" />`;

  return (
    <div
      className="fixed inset-0 bg-slate-900/40 flex items-center justify-center z-50 px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 text-sm"
          >
            Close
          </button>
        </div>

        <div className="flex items-center justify-center bg-slate-50 border border-slate-200 rounded-xl py-10 mb-5">
          <Icon size={size} strokeWidth={strokeWidth} color={color} />
        </div>

        <div className="space-y-3 mb-5">
          <label className="block text-xs text-slate-500">
            Size: {size}px
            <input
              type="range"
              min={16}
              max={96}
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="w-full mt-1"
            />
          </label>
          <label className="block text-xs text-slate-500">
            Stroke width: {strokeWidth}
            <input
              type="range"
              min={0.5}
              max={3}
              step={0.5}
              value={strokeWidth}
              onChange={(e) => setStrokeWidth(Number(e.target.value))}
              className="w-full mt-1"
            />
          </label>
          <label className="flex items-center gap-2 text-xs text-slate-500">
            Color
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="h-6 w-10 border border-slate-200 rounded"
            />
          </label>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between bg-slate-900 text-slate-100 text-xs rounded-lg px-3 py-2 font-mono overflow-x-auto">
            <span>{importLine}</span>
          </div>
          <CopyButton
            label="Copy import"
            text={importLine}
            onCopy={copy}
            isCopied={copied === "Copy import"}
          />

          <div className="flex items-center justify-between bg-slate-900 text-slate-100 text-xs rounded-lg px-3 py-2 font-mono overflow-x-auto mt-3">
            <span>{jsxLine}</span>
          </div>
          <CopyButton
            label="Copy JSX"
            text={jsxLine}
            onCopy={copy}
            isCopied={copied === "Copy JSX"}
          />
        </div>
      </div>
    </div>
  );
}

export default function Icons() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ICON_META.filter((icon) => {
      if (activeCategory && icon.category !== activeCategory) return false;
      if (!q) return true;
      return (
        icon.name.toLowerCase().includes(q) ||
        icon.tags.some((t) => t.includes(q))
      );
    });
  }, [query, activeCategory]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white px-8 py-6">
        <h1 className="text-2xl font-semibold">Switch Icons</h1>
        <p className="text-slate-500 mt-1 text-sm">
          {ICON_META.length} icons — search, filter, and copy ready-to-use code.
        </p>

        <div className="mt-5 flex flex-col gap-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search icons by name or tag…"
            className="w-full sm:max-w-sm px-4 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={`text-xs font-medium px-3 py-1.5 rounded-full border transition ${
                activeCategory === null
                  ? "bg-slate-900 text-white border-slate-900"
                  : "border-slate-200 text-slate-600 hover:border-slate-400"
              }`}
            >
              All
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-medium px-3 py-1.5 rounded-full border transition ${
                  activeCategory === cat
                    ? "bg-slate-900 text-white border-slate-900"
                    : "border-slate-200 text-slate-600 hover:border-slate-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="px-8 py-8">
        {filtered.length === 0 ? (
          <p className="text-slate-400 text-sm">
            No icons match "{query}". Try a different search term.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {filtered.map(({ name }) => {
              const Icon = iconMap[name];
              if (!Icon) return null;
              return (
                <button
                  key={name}
                  onClick={() => setSelected(name)}
                  className="flex flex-col items-center justify-center gap-2 bg-white border border-slate-200 rounded-xl py-6 hover:border-emerald-400 hover:shadow-sm transition text-left"
                >
                  <Icon size={26} className="text-slate-700" />
                  <span className="text-xs text-slate-500">{name}</span>
                </button>
              );
            })}
          </div>
        )}
      </main>

      {selected && (
        <DetailPanel name={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}