# Switch Icons

A modern, developer-focused icon library built for the things we actually build.

Switch Icons aims to provide a consistent, flexible icon system covering UI, technology, communication, fintech, commerce, logistics, AI, social platforms, and more.

## ✨ Why Switch Icons?

Most icon libraries do generic UI extremely well.

Switch Icons is being built to go further.

The goal is to create a single icon system for the less-obvious things developers constantly need:

- 💻 Developer & technology icons
- 💳 Payment and fintech icons
- 🇳🇬 African payment rails
- 📦 Logistics and delivery
- 🤖 AI tools and concepts
- 💬 Communication platforms
- 🌐 Social platforms
- 🛒 E-commerce
- 🔐 Security and authentication
- 📄 File and document types
- ⚡ Modern UI and navigation

## 🚧 Status

Switch Icons is currently in early development.

The library is being actively designed and expanded.

### Current collection

- Navigation / UI
- People / Communication
- Business / CRM
- Fintech / Payment Rails

More categories are coming.

## 🎨 Design Philosophy

Switch Icons is designed around a consistent visual system rather than a collection of unrelated SVGs.

Our current direction focuses on:

- Geometric construction
- Consistent optical weight
- 24×24 viewBox
- Predictable stroke behavior
- `currentColor` support
- Developer-friendly APIs
- Responsive scaling from 16px to larger sizes

## 📦 Usage

```tsx
import { ArrowRight, Naira, BankTransfer } from "switch-icons";

export function Example() {
  return (
    <div>
      <ArrowRight size={24} />
      <Naira size={24} />
      <BankTransfer size={24} />
    </div>
  );
}

🛠️ Development

Clone the repository:

git clone https://github.com/ihemehowell/switch-icons-site.git
cd switch-icons-site

Install dependencies:

pnpm install

Start the development server:

pnpm run dev
🧩 Related Repository

The icon package is maintained separately from this documentation and playground site.

Icon library: switch-icons

Documentation / playground: switch-icons-site

🗺️ Roadmap
 Initial icon system
 React + TypeScript support
 Local icon playground
 Fintech/payment icons
 Expanded navigation system
 Search and filtering
 Icon detail panel
 Copy JSX / import functionality
 More icon categories
 Social platform icons
 Technology icons
 AI icons
 Logistics icons
 E-commerce icons
 Solid icon variants
 Documentation
 npm package release
📄 License

MIT