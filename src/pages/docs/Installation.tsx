import { CodeBlock } from "../../components/CodeBlock";

export default function Installation() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-14">
      <h1 className="text-3xl font-semibold text-slate-900">Installation</h1>
      <p className="mt-4 text-slate-600">
        Install with your package manager of choice.
      </p>

      <h2 className="mt-10 text-lg font-semibold text-slate-900">pnpm</h2>
      <div className="mt-3">
        <CodeBlock code="pnpm add switch-icons" language="bash" />
      </div>

      <h2 className="mt-8 text-lg font-semibold text-slate-900">npm</h2>
      <div className="mt-3">
        <CodeBlock code="npm install switch-icons" language="bash" />
      </div>

      <h2 className="mt-8 text-lg font-semibold text-slate-900">yarn</h2>
      <div className="mt-3">
        <CodeBlock code="yarn add switch-icons" language="bash" />
      </div>

      <h2 className="mt-10 text-lg font-semibold text-slate-900">
        Peer dependencies
      </h2>
      <p className="mt-3 text-slate-600">
        Switch Icons expects React 18 or newer as a peer dependency. It does
        not bundle its own copy of React, so it stays lightweight and shares
        the same React instance as the rest of your app.
      </p>

      <h2 className="mt-10 text-lg font-semibold text-slate-900">
        Local development (before npm publish)
      </h2>
      <p className="mt-3 text-slate-600 mb-3">
        If you're working against a local, unpublished copy of the package:
      </p>
      <CodeBlock
        code={`cd switch-icons
pnpm install
pnpm build

cd ../your-app
pnpm add ../switch-icons`}
        language="bash"
      />
    </article>
  );
}