import { useState } from "react";

export function CodeBlock({ code, language = "tsx" }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div className="relative group">
      <pre className="bg-slate-900 text-slate-100 text-sm rounded-xl p-4 overflow-x-auto font-mono">
        <code data-lang={language}>{code}</code>
      </pre>
      <button
        onClick={onCopy}
        className="absolute top-2 right-2 text-xs font-medium px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 hover:text-white border border-slate-700 opacity-0 group-hover:opacity-100 transition"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}