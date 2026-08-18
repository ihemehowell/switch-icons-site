import { CodeBlock } from "../../components/CodeBlock";

const props = [
  { name: "size", type: "number | string", default: "24", desc: "Sets both width and height." },
  { name: "strokeWidth", type: "number | string", default: "2", desc: "Line thickness." },
  { name: "color", type: "string", default: '"currentColor"', desc: "Overrides inherited text color." },
  { name: "className", type: "string", default: "—", desc: "Merged with the internal switch-icon class." },
  { name: "...rest", type: "any SVG prop", default: "—", desc: "onClick, aria-label, etc. pass through to the <svg>." },
];

export default function ApiReference() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-14">
      <h1 className="text-3xl font-semibold text-slate-900">API Reference</h1>
      <p className="mt-4 text-slate-600">
        Every icon in Switch Icons accepts the same set of props, since every
        icon is generated from a single shared factory.
      </p>

      <div className="mt-8 overflow-x-auto">
        <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
          <thead className="bg-slate-50 text-left text-slate-500">
            <tr>
              <th className="px-4 py-2 font-medium">Prop</th>
              <th className="px-4 py-2 font-medium">Type</th>
              <th className="px-4 py-2 font-medium">Default</th>
              <th className="px-4 py-2 font-medium">Description</th>
            </tr>
          </thead>
          <tbody>
            {props.map((p) => (
              <tr key={p.name} className="border-t border-slate-200">
                <td className="px-4 py-2 font-mono text-slate-800">{p.name}</td>
                <td className="px-4 py-2 font-mono text-slate-500">{p.type}</td>
                <td className="px-4 py-2 font-mono text-slate-500">{p.default}</td>
                <td className="px-4 py-2 text-slate-600">{p.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-lg font-semibold text-slate-900">
        Color inheritance
      </h2>
      <p className="mt-3 text-slate-600 mb-3">
        Every icon uses <code className="text-sm bg-slate-100 px-1 py-0.5 rounded">stroke="currentColor"</code> by
        default, so it inherits Tailwind text-color classes automatically:
      </p>
      <CodeBlock code={`<Check className="text-emerald-500" size={16} />`} />

      <h2 className="mt-10 text-lg font-semibold text-slate-900">
        Overriding stroke and color explicitly
      </h2>
      <div className="mt-3">
        <CodeBlock
          code={`<Naira size={32} strokeWidth={1.5} color="#111827" />`}
        />
      </div>

      <h2 className="mt-10 text-lg font-semibold text-slate-900">
        Design philosophy
      </h2>
      <p className="mt-3 text-slate-600">
        Switch Icons is not a collection of unrelated SVGs. Every icon shares:
      </p>
      <ul className="mt-3 space-y-1 text-slate-600 list-disc pl-5">
        <li>24×24 viewBox</li>
        <li>Consistent optical weight and stroke behavior</li>
        <li>Controlled geometry and predictable scaling</li>
        <li><code className="text-sm bg-slate-100 px-1 py-0.5 rounded">currentColor</code> compatibility</li>
        <li>A developer-friendly, Lucide-like prop API</li>
      </ul>
      <p className="mt-3 text-slate-600">
        The goal is for icons from completely different categories — a Naira
        symbol, a webhook, a delivery truck — to still feel like they belong
        to the same system.
      </p>
    </article>
  );
}