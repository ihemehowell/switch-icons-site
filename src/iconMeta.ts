export interface IconMeta {
  name: string;
  category: string;
  tags: string[];
}

export const CATEGORIES = [
  "Navigation / UI",
  "People / Communication",
  "Business / CRM",
  "Fintech / Payment Rails",
  "Logistics",
  "AI",
  "Security",
  "Commerce",
  "Technology",
] as const;

export const ICON_META: IconMeta[] = [
  // Navigation / UI
  { name: "ArrowRight", category: "Navigation / UI", tags: ["arrow", "next", "forward"] },
  { name: "ArrowLeft", category: "Navigation / UI", tags: ["arrow", "back", "previous"] },
  { name: "Check", category: "Navigation / UI", tags: ["success", "done", "confirm", "tick"] },
  { name: "Close", category: "Navigation / UI", tags: ["x", "dismiss", "cancel"] },
  { name: "Plus", category: "Navigation / UI", tags: ["add", "new", "create"] },
  { name: "Minus", category: "Navigation / UI", tags: ["subtract", "remove", "collapse"] },
  { name: "Search", category: "Navigation / UI", tags: ["find", "magnifier", "lookup"] },
  { name: "Settings", category: "Navigation / UI", tags: ["gear", "preferences", "config"] },
  { name: "ChevronDown", category: "Navigation / UI", tags: ["dropdown", "expand", "arrow"] },
  { name: "ChevronUp", category: "Navigation / UI", tags: ["collapse", "arrow"] },
  { name: "Grid", category: "Navigation / UI", tags: ["dashboard", "layout", "apps"] },
  { name: "Home", category: "Navigation / UI", tags: ["house", "start", "dashboard"] },
  { name: "LogOut", category: "Navigation / UI", tags: ["signout", "exit", "logout"] },
  { name: "Filter", category: "Navigation / UI", tags: ["sort", "funnel", "narrow"] },
  { name: "Download", category: "Navigation / UI", tags: ["save", "export", "arrow"] },
  { name: "Upload", category: "Navigation / UI", tags: ["import", "arrow"] },
  { name: "MoreHorizontal", category: "Navigation / UI", tags: ["dots", "menu", "options", "kebab"] },
  { name: "Refresh", category: "Navigation / UI", tags: ["reload", "sync", "retry"] },
  { name: "Share", category: "Navigation / UI", tags: ["send", "network", "distribute"] },
  { name: "Copy", category: "Navigation / UI", tags: ["duplicate", "clone"] },
  { name: "ExternalLink", category: "Navigation / UI", tags: ["link", "new tab", "outbound"] },
  { name: "Star", category: "Navigation / UI", tags: ["favorite", "rating", "bookmark"] },
  { name: "Heart", category: "Navigation / UI", tags: ["like", "love", "favorite"] },
  { name: "Info", category: "Navigation / UI", tags: ["information", "help", "about"] },
  { name: "AlertTriangle", category: "Navigation / UI", tags: ["warning", "caution", "error"] },

  // People / Communication
  { name: "User", category: "People / Communication", tags: ["profile", "account", "person"] },
  { name: "Users", category: "People / Communication", tags: ["group", "team", "clients"] },
  { name: "Bell", category: "People / Communication", tags: ["notification", "alert"] },
  { name: "Mail", category: "People / Communication", tags: ["email", "envelope", "message"] },
  { name: "Phone", category: "People / Communication", tags: ["call", "telephone"] },
  { name: "MessageCircle", category: "People / Communication", tags: ["chat", "comment", "bubble"] },
  { name: "ChatThread", category: "People / Communication", tags: ["conversation", "reply", "thread"] },
  { name: "VoiceNote", category: "People / Communication", tags: ["audio", "voice message", "waveform"] },
  { name: "VideoCall", category: "People / Communication", tags: ["meeting", "camera", "call"] },
  { name: "Broadcast", category: "People / Communication", tags: ["signal", "live", "announce"] },

  // Business / CRM
  { name: "Building", category: "Business / CRM", tags: ["company", "office", "sme"] },
  { name: "Wallet", category: "Business / CRM", tags: ["payments", "invoice", "money"] },
  { name: "FileText", category: "Business / CRM", tags: ["document", "quotation", "file"] },
  { name: "Calendar", category: "Business / CRM", tags: ["date", "schedule", "event"] },
  { name: "Trash", category: "Business / CRM", tags: ["delete", "remove", "bin"] },
  { name: "Edit", category: "Business / CRM", tags: ["pencil", "modify", "update"] },

  // Fintech / Payment Rails
  { name: "Naira", category: "Fintech / Payment Rails", tags: ["currency", "money", "ngn"] },
  { name: "BankTransfer", category: "Fintech / Payment Rails", tags: ["transfer", "bank", "payment"] },
  { name: "Ussd", category: "Fintech / Payment Rails", tags: ["dial", "code", "payment"] },
  { name: "Pos", category: "Fintech / Payment Rails", tags: ["terminal", "card reader", "payment"] },
  { name: "QrCode", category: "Fintech / Payment Rails", tags: ["scan", "payment", "code"] },
  { name: "MobileMoney", category: "Fintech / Payment Rails", tags: ["wallet", "mobile", "payment"] },
  { name: "Escrow", category: "Fintech / Payment Rails", tags: ["protected", "secure payment", "shield"] },

  // Logistics
  { name: "Waybill", category: "Logistics", tags: ["shipping", "document", "tracking"] },
  { name: "DeliveryTruck", category: "Logistics", tags: ["shipping", "transport", "truck"] },
  { name: "PackageBox", category: "Logistics", tags: ["parcel", "shipment", "box"] },
  { name: "Warehouse", category: "Logistics", tags: ["storage", "inventory"] },

  // AI
  { name: "AiSpark", category: "AI", tags: ["sparkle", "generate", "magic"] },
  { name: "PromptInput", category: "AI", tags: ["chat input", "prompt box"] },
  { name: "ModelChip", category: "AI", tags: ["chip", "processor", "model"] },

  // Security
  { name: "Fingerprint", category: "Security", tags: ["biometric", "auth", "identity"] },
  { name: "ShieldLock", category: "Security", tags: ["protection", "secure", "shield"] },
  { name: "Otp", category: "Security", tags: ["one time password", "verification", "code"] },
  { name: "Lock", category: "Security", tags: ["locked", "secure", "password"] },

  // Commerce
  { name: "Storefront", category: "Commerce", tags: ["shop", "store", "market"] },
  { name: "Barcode", category: "Commerce", tags: ["scan", "product", "sku"] },
  { name: "Receipt", category: "Commerce", tags: ["invoice", "bill", "order"] },

  // Technology
  { name: "ApiConnector", category: "Technology", tags: ["integration", "connect", "api"] },
  { name: "Webhook", category: "Technology", tags: ["automation", "trigger", "api"] },
  { name: "Terminal", category: "Technology", tags: ["console", "code", "cli"] },
];
