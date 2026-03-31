export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Features />
        <Security />
      </main>
      <Footer />
    </div>
  );
}

/* ── Nav ─────────────────────────────────────────────────────────────────── */
function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#252545] bg-[#0d0d1a]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#e8a020] text-sm font-bold text-[#0d0d1a]">
            G
          </div>
          <span className="text-base font-semibold tracking-tight text-[#f0f0f5]">
            Gaokey
          </span>
        </div>
        <a
          href="#download"
          className="rounded-full bg-[#e8a020] px-5 py-2 text-sm font-semibold text-[#0d0d1a] transition-opacity hover:opacity-90"
        >
          Download
        </a>
      </div>
    </header>
  );
}

/* ── Hero ────────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-20 text-center">
      {/* background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(91,61,232,0.18) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 80%, rgba(232,160,32,0.10) 0%, transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-3xl">
        {/* logo mark */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl shadow-[0_0_48px_rgba(232,160,32,0.25)]"
          style={{ background: "linear-gradient(135deg,#e8a020 0%,#5b3de8 100%)" }}>
          <span className="text-3xl font-bold text-white">G</span>
        </div>

        <h1 className="mb-4 text-5xl font-bold leading-tight tracking-tight text-[#f0f0f5] sm:text-6xl">
          Gaokey
        </h1>
        <p className="mb-4 text-xl font-medium text-[#e8a020] sm:text-2xl">
          Your keys. Your identity. Your internet.
        </p>
        <p className="mb-10 text-base leading-relaxed text-[#8e8ea0] sm:text-lg">
          Sovereign identity wallet for Gao Internet. Non-custodial. Device-native.
          Built for the open web.
        </p>

        {/* Download buttons */}
        <div id="download" className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#"
            aria-label="Download on the App Store"
            className="flex h-14 w-48 items-center justify-center gap-3 rounded-2xl border border-[#252545] bg-[#13132a] text-sm font-semibold text-[#f0f0f5] transition-all hover:border-[#e8a020]/50 hover:bg-[#1a1a35]"
          >
            <AppleIcon />
            App Store
          </a>
          <a
            href="#"
            aria-label="Get it on Google Play"
            className="flex h-14 w-48 items-center justify-center gap-3 rounded-2xl border border-[#252545] bg-[#13132a] text-sm font-semibold text-[#f0f0f5] transition-all hover:border-[#e8a020]/50 hover:bg-[#1a1a35]"
          >
            <GooglePlayIcon />
            Google Play
          </a>
        </div>

        <p className="mt-5 text-xs text-[#5a5a70]">
          Pre-mainnet software · External audit planned · Do not use with real funds until audit completion
        </p>
      </div>
    </section>
  );
}

/* ── Features ────────────────────────────────────────────────────────────── */
const features = [
  {
    icon: <FingerprintIcon />,
    title: "Passkey Login",
    description:
      "Sign in with Face ID or fingerprint. No passwords. No seed phrase entry on device. Your biometric is your key — bound to this device only.",
  },
  {
    icon: <IdentityIcon />,
    title: "DID Identity",
    description:
      "Every Gaokey instance binds to a Gao Domain — an Ethereum-anchored decentralised identity. Permanent. Non-revocable. No administrator can revoke it.",
  },
  {
    icon: <PaymentIcon />,
    title: "x402 Payments",
    description:
      "Sign payment intents without custodying funds. Gaokey implements the x402 protocol — machine-readable payments across the Gao Internet stack.",
  },
];

function Features() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-3 text-center text-3xl font-bold tracking-tight text-[#f0f0f5] sm:text-4xl">
          Built for sovereignty
        </h2>
        <p className="mb-14 text-center text-[#8e8ea0]">
          Three primitives. One root of trust.
        </p>
        <div className="grid gap-6 sm:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-[#252545] bg-[#13132a] p-7 transition-colors hover:border-[#5b3de8]/50"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#5b3de8]/15 text-[#e8a020]">
                {f.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#f0f0f5]">
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#8e8ea0]">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Security ────────────────────────────────────────────────────────────── */
const securityPoints = [
  { label: "No OTA updates", detail: "Every release goes through App Store & Play Store review. No hotfixes bypass you." },
  { label: "Credentials never leave your device", detail: "Keys live in Secure Enclave (iOS) or Android Keystore. Never transmitted, never stored server-side." },
  { label: "No ads. No tracking. No data selling.", detail: "Gaokey collects no analytics. Your identity is yours — not a product." },
  { label: "IronClaw security standard", detail: "Human authority is final. AI agents cannot sign transactions or escalate privileges without explicit user approval." },
];

function Security() {
  return (
    <section className="px-6 py-20"
      style={{ background: "linear-gradient(180deg, transparent 0%, rgba(91,61,232,0.06) 50%, transparent 100%)" }}>
      <div className="mx-auto max-w-4xl">
        <div className="mb-3 flex justify-center">
          <span className="rounded-full border border-[#e8a020]/30 bg-[#e8a020]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#e8a020]">
            IronClaw Security Standard
          </span>
        </div>
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-[#f0f0f5] sm:text-4xl">
          Security without compromise
        </h2>
        <p className="mb-12 text-center text-[#8e8ea0]">
          IronClaw security standard. No OTA updates.
          Credentials never leave your device.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {securityPoints.map((p) => (
            <div
              key={p.label}
              className="flex gap-4 rounded-2xl border border-[#252545] bg-[#13132a] p-6"
            >
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e8a020]/15">
                <ShieldCheck />
              </div>
              <div>
                <p className="mb-1 text-sm font-semibold text-[#f0f0f5]">{p.label}</p>
                <p className="text-xs leading-relaxed text-[#8e8ea0]">{p.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-[#e8a020]/20 bg-[#e8a020]/5 p-6 text-center">
          <p className="text-sm text-[#8e8ea0]">
            <span className="font-semibold text-[#e8a020]">External audit planned.</span>{" "}
            Gaokey is pre-mainnet software. An independent security audit is required and planned before mainnet deployment.
            Do not use with real funds until audit completion.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ──────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-[#252545] px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-[#5a5a70] sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-[#e8a020] text-xs font-bold text-[#0d0d1a]">
            G
          </div>
          <span>© 2025 Toii Social LLC. All rights reserved.</span>
        </div>
        <div className="flex gap-6">
          <a href="/privacy/" className="transition-colors hover:text-[#f0f0f5]">Privacy Policy</a>
          <a href="/terms/" className="transition-colors hover:text-[#f0f0f5]">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

/* ── Icons ───────────────────────────────────────────────────────────────── */
function AppleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.18 1.27-2.16 3.8.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.37 2.78M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.18 23.76a2 2 0 0 1-.66-.54 2.1 2.1 0 0 1-.52-1.4V2.18A2.1 2.1 0 0 1 2.52.78a2 2 0 0 1 .66-.54l11.11 11.76zm2.33-22.01 13.5 7.35-3.08 3.26zm13.5 14.77-13.5 7.35L15.94 12zM2 1.41a1.82 1.82 0 0 0-.12.77v19.64a1.82 1.82 0 0 0 .12.77L14.1 12z" />
    </svg>
  );
}

function FingerprintIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
      <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
      <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
      <path d="M2 12a10 10 0 0 1 18-6" />
      <path d="M2 17.5a14.5 14.5 0 0 0 .86-3.5" />
      <path d="M5 19.5C5.81 17 6 15 6 12a6 6 0 0 1 .34-2" />
      <path d="M8.65 22c.21-.66.45-1.32.57-2" />
      <path d="M9 6.8a6 6 0 0 1 9 5.2v2" />
    </svg>
  );
}

function IdentityIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

function PaymentIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
    </svg>
  );
}

function ShieldCheck() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#e8a020" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}
