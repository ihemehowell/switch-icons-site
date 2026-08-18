import { CodeBlock } from "../../components/CodeBlock";

export default function GettingStarted() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-14 prose-slate">
      <h1 className="text-3xl font-semibold text-slate-900">Getting Started</h1>
      <p className="mt-4 text-slate-600">
        Switch Icons is a tree-shakeable React icon library. Every icon is a
        component with a consistent 24×24 stroke-based design, so they behave
        the same way regardless of which category they come from.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-slate-900">
        Why Switch Icons?
      </h2>
      <p className="mt-3 text-slate-600">
        Most icon libraries do generic UI extremely well. Switch Icons goes
        further, covering the less-obvious things developers constantly need:
      </p>
      <ul className="mt-3 space-y-1 text-slate-600 list-disc pl-5">
        <li>Developer &amp; technology icons</li>
        <li>Payment and fintech icons, including African payment rails</li>
        <li>Logistics and delivery</li>
        <li>AI tools and concepts</li>
        <li>Communication platforms</li>
        <li>E-commerce</li>
        <li>Security and authentication</li>
      </ul>

      <h2 className="mt-10 text-xl font-semibold text-slate-900">
        Basic usage
      </h2>
      <p className="mt-3 text-slate-600 mb-3">
        Import any icon by name and render it like any other component:
      </p>
      <CodeBlock
        code={`import { ArrowRight, Naira, BankTransfer } from "switch-icons";

export function Example() {
  return (
    <div>
      <ArrowRight size={24} />
      <Naira size={24} />
      <BankTransfer size={24} />
    </div>
  );
}`}
      />

      <h2 className="mt-10 text-xl font-semibold text-slate-900">
        Where to next
      </h2>
      <p className="mt-3 text-slate-600">
        Head to the <strong>Installation</strong> page for package manager
        commands, the <strong>API Reference</strong> for the full prop list,
        the <strong>Icons</strong> page to search and copy any icon's code, or
        the <strong>Playground</strong> to try live examples.
      </p>
    </article>
  );
}