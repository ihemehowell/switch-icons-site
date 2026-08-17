import { useMemo, useState } from "react";
import * as Icons from "switch-icons";
import type { ComponentType } from "react";
import type { IconProps } from "switch-icons";
import {
  Search,
  Copy,
  Check,
  ChevronRight,
  Grid3X3,
  List,
  X,
  Command,
  Package,
  SlidersHorizontal,
  Moon,
  Sun,
  ArrowUpRight,
} from "lucide-react";

const { createIcon: _createIcon, ...iconMap } = Icons;

const groups: Record<string, string[]> = {
  "Navigation / UI": [
    "ArrowRight",
    "ArrowLeft",
    "Check",
    "Close",
    "Plus",
    "Search",
    "Settings",
    "ChevronDown",
    "ChevronUp",
    "Grid",
    "Home",
    "LogOut",
  ],
  "People / Comms": [
    "User",
    "Users",
    "Bell",
    "Mail",
    "Phone",
    "MessageCircle",
  ],
  "Business / CRM": [
    "Building",
    "Wallet",
    "FileText",
    "Calendar",
    "Trash",
    "Edit",
  ],
  "Payment rails / Fintech": [
    "Naira",
    "BankTransfer",
    "Ussd",
    "Pos",
    "QrCode",
    "MobileMoney",
    "Escrow",
  ],
};

const categoryMeta: Record<
  string,
  { description: string; icon: ComponentType<{ size?: number }> }
> = {
  "Navigation / UI": {
    description: "Core interface and navigation icons.",
    icon: Grid3X3,
  },
  "People / Comms": {
    description: "People, communication and notification icons.",
    icon: Search,
  },
  "Business / CRM": {
    description: "Business, productivity and CRM workflows.",
    icon: Package,
  },
  "Payment rails / Fintech": {
    description: "Payment, banking and financial infrastructure.",
    icon: SlidersHorizontal,
  },
};

type IconComponent = ComponentType<IconProps>;

export default function App() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All icons");
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const [view, setView] = useState<"grid" | "list">("grid");
  const [dark, setDark] = useState(false);
  const [iconSize, setIconSize] = useState(32);
  const [strokeWidth, setStrokeWidth] = useState(2);

  const allIcons = Object.values(groups).flat();

  const filteredIcons = useMemo(() => {
    let icons =
      activeCategory === "All icons"
        ? allIcons
        : groups[activeCategory] ?? [];

    if (query.trim()) {
      const search = query.toLowerCase();

      icons = icons.filter((name) =>
        name.toLowerCase().includes(search)
      );
    }

    return icons;
  }, [activeCategory, query]);

  const selectedComponent = selectedIcon
    ? (iconMap[selectedIcon] as IconComponent)
    : null;

  const copyText = async (text: string, key: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(key);

    window.setTimeout(() => {
      setCopied(null);
    }, 1600);
  };

  const importCode = selectedIcon
    ? `import { ${selectedIcon} } from "switch-icons";`
    : "";

  return (
    <div
      className={
        dark
          ? "min-h-screen bg-[#09090b] text-white"
          : "min-h-screen bg-[#fafafa] text-[#111113]"
      }
    >
      {/* Top navigation */}
      <header
        className={`sticky top-0 z-40 border-b backdrop-blur-xl ${
          dark
            ? "border-white/10 bg-[#09090b]/80"
            : "border-black/5 bg-white/80"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-5 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white dark:bg-white dark:text-black">
              <span className="text-sm font-black">S</span>
            </div>

            <div>
              <div className="font-semibold tracking-tight">
                switch-icons
              </div>
              <div
                className={`hidden text-[11px] sm:block ${
                  dark ? "text-white/40" : "text-black/40"
                }`}
              >
                Modern icons for modern products
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-7 text-sm md:flex">
            <a
              href="#icons"
              className={
                dark
                  ? "text-white/60 hover:text-white"
                  : "text-black/60 hover:text-black"
              }
            >
              Icons
            </a>

            <a
              href="#usage"
              className={
                dark
                  ? "text-white/60 hover:text-white"
                  : "text-black/60 hover:text-black"
              }
            >
              Usage
            </a>

            <a
              href="#categories"
              className={
                dark
                  ? "text-white/60 hover:text-white"
                  : "text-black/60 hover:text-black"
              }
            >
              Categories
            </a>

            <a
              href="#github"
              className={
                dark
                  ? "text-white/60 hover:text-white"
                  : "text-black/60 hover:text-black"
              }
            >
              GitHub
            </a>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setDark(!dark)}
              className={`flex h-9 w-9 items-center justify-center rounded-lg border transition ${
                dark
                  ? "border-white/10 hover:bg-white/5"
                  : "border-black/10 hover:bg-black/5"
              }`}
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              className={`hidden h-9 items-center gap-2 rounded-lg px-3 text-xs font-medium sm:flex ${
                dark
                  ? "bg-white text-black"
                  : "bg-black text-white"
              }`}
            >
              
              <ArrowUpRight size={12} />
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1500px]">
        {/* Sidebar */}
        <aside
          className={`sticky top-16 hidden h-[calc(100vh-4rem)] w-64 shrink-0 overflow-y-auto border-r px-5 py-7 lg:block ${
            dark ? "border-white/10" : "border-black/5"
          }`}
        >
          <div
            className={`mb-3 text-[10px] font-bold uppercase tracking-[0.16em] ${
              dark ? "text-white/35" : "text-black/35"
            }`}
          >
            Library
          </div>

          <nav className="space-y-1">
            <button
              onClick={() => setActiveCategory("All icons")}
              className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition ${
                activeCategory === "All icons"
                  ? dark
                    ? "bg-white text-black"
                    : "bg-black text-white"
                  : dark
                  ? "text-white/60 hover:bg-white/5 hover:text-white"
                  : "text-black/60 hover:bg-black/5 hover:text-black"
              }`}
            >
              <span>All icons</span>
              <span
                className={`text-[11px] ${
                  activeCategory === "All icons"
                    ? "opacity-60"
                    : "opacity-40"
                }`}
              >
                {allIcons.length}
              </span>
            </button>

            {Object.entries(groups).map(([category, icons]) => {
              const MetaIcon = categoryMeta[category]?.icon;

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition ${
                    activeCategory === category
                      ? dark
                        ? "bg-white text-black"
                        : "bg-black text-white"
                      : dark
                      ? "text-white/60 hover:bg-white/5 hover:text-white"
                      : "text-black/60 hover:bg-black/5 hover:text-black"
                  }`}
                >
                  <span className="flex min-w-0 items-center gap-2">
                    {MetaIcon && <MetaIcon size={14} />}
                    <span className="truncate">{category}</span>
                  </span>

                  <span className="ml-2 shrink-0 text-[11px] opacity-40">
                    {icons.length}
                  </span>
                </button>
              );
            })}
          </nav>

          <div
            className={`my-7 h-px ${
              dark ? "bg-white/10" : "bg-black/5"
            }`}
          />

          <div
            className={`mb-3 text-[10px] font-bold uppercase tracking-[0.16em] ${
              dark ? "text-white/35" : "text-black/35"
            }`}
          >
            Resources
          </div>

          <div className="space-y-1">
            {["Getting started", "Installation", "Customization", "Contributing"].map(
              (item) => (
                <button
                  key={item}
                  className={`flex w-full items-center rounded-lg px-3 py-2 text-sm ${
                    dark
                      ? "text-white/50 hover:bg-white/5 hover:text-white"
                      : "text-black/50 hover:bg-black/5 hover:text-black"
                  }`}
                >
                  {item}
                </button>
              )
            )}
          </div>

          <div
            className={`mt-10 rounded-xl border p-4 ${
              dark
                ? "border-white/10 bg-white/[0.03]"
                : "border-black/5 bg-white"
            }`}
          >
            <div className="mb-2 flex items-center gap-2">
              <Package size={15} />
              <span className="text-xs font-semibold">
                switch-icons
              </span>
            </div>

            <p
              className={`text-[11px] leading-5 ${
                dark ? "text-white/40" : "text-black/45"
              }`}
            >
              A growing icon system built for product teams,
              developers and designers.
            </p>

            <div
              className={`mt-3 inline-flex rounded-md px-2 py-1 text-[10px] font-medium ${
                dark
                  ? "bg-white/10 text-white/60"
                  : "bg-black/5 text-black/50"
              }`}
            >
              v0.1.0
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="min-w-0 flex-1">
          {/* Hero */}
          <section className="px-5 pb-10 pt-12 sm:px-8 lg:px-12 lg:pt-16">
            <div className="max-w-4xl">
              <div
                className={`mb-5 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-medium ${
                  dark
                    ? "border-white/10 bg-white/[0.03] text-white/60"
                    : "border-black/5 bg-white text-black/50"
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Open source icon library
              </div>

              <h1 className="max-w-4xl text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Icons for the things
                <br />
                <span className={dark ? "text-white/35" : "text-black/30"}>
                  developers actually build.
                </span>
              </h1>

              <p
                className={`mt-6 max-w-2xl text-base leading-7 sm:text-lg ${
                  dark ? "text-white/45" : "text-black/50"
                }`}
              >
                A carefully designed icon system covering interfaces,
                technology, communication, fintech, commerce and the
                digital world around them.
              </p>
            </div>

            {/* Search */}
            <div className="mt-9 flex max-w-3xl items-center gap-2">
              <div
                className={`relative flex h-12 flex-1 items-center rounded-xl border px-4 shadow-sm ${
                  dark
                    ? "border-white/10 bg-white/[0.04]"
                    : "border-black/10 bg-white"
                }`}
              >
                <Search
                  size={17}
                  className={
                    dark ? "text-white/35" : "text-black/35"
                  }
                />

                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search icons..."
                  className={`h-full flex-1 bg-transparent px-3 text-sm outline-none ${
                    dark
                      ? "placeholder:text-white/25"
                      : "placeholder:text-black/30"
                  }`}
                />

                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="mr-2 opacity-40 hover:opacity-100"
                  >
                    <X size={15} />
                  </button>
                )}

                <div
                  className={`hidden items-center gap-1 rounded-md border px-1.5 py-1 text-[10px] sm:flex ${
                    dark
                      ? "border-white/10 text-white/30"
                      : "border-black/10 text-black/30"
                  }`}
                >
                  <Command size={10} /> K
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["Icons", allIcons.length],
                ["Categories", Object.keys(groups).length],
                ["Variants", "4+"],
                ["License", "MIT"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className={`rounded-xl border p-4 ${
                    dark
                      ? "border-white/10 bg-white/[0.025]"
                      : "border-black/5 bg-white"
                  }`}
                >
                  <div
                    className={`text-xl font-semibold ${
                      dark ? "text-white" : "text-black"
                    }`}
                  >
                    {value}
                  </div>
                  <div
                    className={`mt-1 text-[11px] ${
                      dark ? "text-white/35" : "text-black/35"
                    }`}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Icon browser */}
          <section id="icons" className="px-5 pb-16 sm:px-8 lg:px-12">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-semibold tracking-tight">
                    {activeCategory}
                  </h2>

                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                      dark
                        ? "bg-white/10 text-white/50"
                        : "bg-black/5 text-black/45"
                    }`}
                  >
                    {filteredIcons.length}
                  </span>
                </div>

                {activeCategory !== "All icons" && (
                  <p
                    className={`mt-1 text-sm ${
                      dark ? "text-white/35" : "text-black/40"
                    }`}
                  >
                    {categoryMeta[activeCategory]?.description}
                  </p>
                )}
              </div>

              <div
                className={`flex items-center rounded-lg border p-1 ${
                  dark ? "border-white/10" : "border-black/10"
                }`}
              >
                <button
                  onClick={() => setView("grid")}
                  className={`rounded-md p-1.5 ${
                    view === "grid"
                      ? dark
                        ? "bg-white text-black"
                        : "bg-black text-white"
                      : "opacity-40"
                  }`}
                >
                  <Grid3X3 size={14} />
                </button>

                <button
                  onClick={() => setView("list")}
                  className={`rounded-md p-1.5 ${
                    view === "list"
                      ? dark
                        ? "bg-white text-black"
                        : "bg-black text-white"
                      : "opacity-40"
                  }`}
                >
                  <List size={14} />
                </button>
              </div>
            </div>

            {filteredIcons.length === 0 ? (
              <div
                className={`rounded-2xl border border-dashed py-24 text-center ${
                  dark ? "border-white/10" : "border-black/10"
                }`}
              >
                <Search
                  size={28}
                  className="mx-auto mb-4 opacity-25"
                />
                <h3 className="font-medium">No icons found</h3>
                <p
                  className={`mt-1 text-sm ${
                    dark ? "text-white/35" : "text-black/40"
                  }`}
                >
                  Try searching for something else.
                </p>
              </div>
            ) : (
              <div
                className={
                  view === "grid"
                    ? "grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
                    : "space-y-2"
                }
              >
                {filteredIcons.map((name) => {
                  const Icon = iconMap[name] as IconComponent;

                  if (!Icon) return null;

                  if (view === "list") {
                    return (
                      <button
                        key={name}
                        onClick={() => setSelectedIcon(name)}
                        className={`group flex w-full items-center gap-4 rounded-xl border p-3 text-left transition ${
                          dark
                            ? "border-white/10 bg-white/[0.02] hover:bg-white/[0.06]"
                            : "border-black/5 bg-white hover:border-black/10 hover:shadow-sm"
                        }`}
                      >
                        <div
                          className={`flex h-11 w-11 items-center justify-center rounded-lg ${
                            dark ? "bg-white/5" : "bg-black/[0.03]"
                          }`}
                        >
                          <Icon
                            size={24}
                            strokeWidth={strokeWidth}
                          />
                        </div>

                        <div className="flex-1">
                          <div className="text-sm font-medium">
                            {name}
                          </div>
                          <div
                            className={`mt-0.5 text-[11px] ${
                              dark
                                ? "text-white/30"
                                : "text-black/35"
                            }`}
                          >
                            switch-icons/{name}
                          </div>
                        </div>

                        <ChevronRight
                          size={15}
                          className="opacity-20 transition group-hover:opacity-60"
                        />
                      </button>
                    );
                  }

                  return (
                    <button
                      key={name}
                      onClick={() => setSelectedIcon(name)}
                      className={`group relative flex aspect-square flex-col items-center justify-center rounded-2xl border transition ${
                        dark
                          ? "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.06]"
                          : "border-black/5 bg-white hover:border-black/10 hover:shadow-lg hover:shadow-black/[0.03]"
                      }`}
                    >
                      <div
                        className={`absolute right-3 top-3 rounded-md p-1 opacity-0 transition group-hover:opacity-100 ${
                          dark
                            ? "bg-white/10"
                            : "bg-black/5"
                        }`}
                      >
                        <ArrowUpRight size={12} />
                      </div>

                      <Icon
                        size={32}
                        strokeWidth={strokeWidth}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />

                      <span
                        className={`mt-5 text-xs font-medium ${
                          dark ? "text-white/60" : "text-black/60"
                        }`}
                      >
                        {name}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </section>

          {/* Usage section */}
          <section
            id="usage"
            className={`border-y px-5 py-16 sm:px-8 lg:px-12 ${
              dark
                ? "border-white/10 bg-white/[0.015]"
                : "border-black/5 bg-white"
            }`}
          >
            <div className="max-w-4xl">
              <div
                className={`text-[10px] font-bold uppercase tracking-[0.16em] ${
                  dark ? "text-white/30" : "text-black/30"
                }`}
              >
                Developer experience
              </div>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Designed to disappear into your UI.
              </h2>

              <p
                className={`mt-3 max-w-2xl text-sm leading-6 ${
                  dark ? "text-white/40" : "text-black/45"
                }`}
              >
                Simple imports, predictable props and icons that inherit
                your application's color system.
              </p>

              <div
                className={`mt-8 overflow-hidden rounded-2xl border ${
                  dark
                    ? "border-white/10 bg-[#050505]"
                    : "border-black/10 bg-[#0c0c0c] text-white"
                }`}
              >
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-red-400" />
                    <div className="h-2 w-2 rounded-full bg-yellow-400" />
                    <div className="h-2 w-2 rounded-full bg-green-400" />
                  </div>

                  <span className="text-[10px] text-white/30">
                    React / TypeScript
                  </span>
                </div>

                <pre className="overflow-x-auto p-5 text-sm leading-7">
                  <code>{`import { Naira, BankTransfer } from "switch-icons";

export function PaymentMethods() {
  return (
    <div className="flex gap-4">
      <Naira size={24} />
      <BankTransfer
        size={24}
        strokeWidth={1.75}
      />
    </div>
  );
}`}</code>
                </pre>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer
            className={`px-5 py-10 sm:px-8 lg:px-12 ${
              dark ? "text-white/30" : "text-black/35"
            }`}
          >
            <div className="flex flex-col justify-between gap-4 sm:flex-row">
              <div>
                <div className="font-semibold text-inherit">
                  switch-icons
                </div>
                <div className="mt-1 text-xs">
                  Built for the modern web.
                </div>
              </div>

              <div className="flex items-center gap-5 text-xs">
                <span>MIT License</span>
                <span>v0.1.0</span>
                <span>React</span>
                <span>TypeScript</span>
              </div>
            </div>
          </footer>
        </main>
      </div>

      {/* Icon detail drawer */}
      {selectedIcon && selectedComponent && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm"
            onClick={() => setSelectedIcon(null)}
          />

          <aside
            className={`fixed right-0 top-0 z-[60] flex h-full w-full max-w-md flex-col border-l shadow-2xl ${
              dark
                ? "border-white/10 bg-[#0c0c0e]"
                : "border-black/10 bg-white"
            }`}
          >
            <div className="flex items-center justify-between border-b border-inherit px-5 py-4">
              <div>
                <div className="text-sm font-semibold">
                  {selectedIcon}
                </div>
                <div
                  className={`text-[11px] ${
                    dark ? "text-white/30" : "text-black/35"
                  }`}
                >
                  Icon details
                </div>
              </div>

              <button
                onClick={() => setSelectedIcon(null)}
                className="rounded-lg p-2 opacity-50 hover:bg-black/5 hover:opacity-100 dark:hover:bg-white/5"
              >
                <X size={17} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5">
              {/* Preview */}
              <div
                className={`flex h-64 items-center justify-center rounded-2xl border ${
                  dark
                    ? "border-white/10 bg-white/[0.03]"
                    : "border-black/5 bg-[#fafafa]"
                }`}
              >
                {/* <selectedComponent
                  size={iconSize}
                  strokeWidth={strokeWidth}
                /> */}
              </div>

              {/* Controls */}
              <div className="mt-7">
                <div className="mb-4 text-xs font-semibold">
                  Preview controls
                </div>

                <div className="space-y-5">
                  <label className="block">
                    <div className="mb-2 flex justify-between text-xs">
                      <span className="opacity-50">Size</span>
                      <span>{iconSize}px</span>
                    </div>

                    <input
                      type="range"
                      min="12"
                      max="96"
                      value={iconSize}
                      onChange={(e) =>
                        setIconSize(Number(e.target.value))
                      }
                      className="w-full"
                    />
                  </label>

                  <label className="block">
                    <div className="mb-2 flex justify-between text-xs">
                      <span className="opacity-50">Stroke width</span>
                      <span>{strokeWidth}</span>
                    </div>

                    <input
                      type="range"
                      min="0.5"
                      max="4"
                      step="0.25"
                      value={strokeWidth}
                      onChange={(e) =>
                        setStrokeWidth(Number(e.target.value))
                      }
                      className="w-full"
                    />
                  </label>
                </div>
              </div>

              {/* Import */}
              <div className="mt-8">
                <div className="mb-3 text-xs font-semibold">
                  Import
                </div>

                <div
                  className={`relative rounded-xl border p-3 pr-12 ${
                    dark
                      ? "border-white/10 bg-black"
                      : "border-black/10 bg-[#f7f7f7]"
                  }`}
                >
                  <code className="block overflow-x-auto whitespace-nowrap text-[11px]">
                    {importCode}
                  </code>

                  <button
                    onClick={() =>
                      copyText(importCode, "import")
                    }
                    className="absolute right-2 top-2 rounded-lg p-2 opacity-50 hover:bg-white/10 hover:opacity-100"
                  >
                    {copied === "import" ? (
                      <Check size={14} />
                    ) : (
                      <Copy size={14} />
                    )}
                  </button>
                </div>
              </div>

              {/* Component */}
              <div className="mt-6">
                <div className="mb-3 text-xs font-semibold">
                  Component
                </div>

                <button
                  onClick={() =>
                    copyText(selectedIcon, "name")
                  }
                  className={`flex w-full items-center justify-between rounded-xl border p-3 text-left ${
                    dark
                      ? "border-white/10 hover:bg-white/5"
                      : "border-black/10 hover:bg-black/5"
                  }`}
                >
                  <code className="text-xs">
                    &lt;{selectedIcon} /&gt;
                  </code>

                  {copied === "name" ? (
                    <Check size={14} />
                  ) : (
                    <Copy size={14} />
                  )}
                </button>
              </div>
            </div>
          </aside>
        </>
      )}
    </div>
  );
}