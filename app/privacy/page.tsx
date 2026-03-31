import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Gaokey",
  description: "Gaokey Privacy Policy. Your keys, your data, your device.",
};

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Nav */}
      <header className="border-b border-[#252545] bg-[#0d0d1a]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#e8a020] text-xs font-bold text-[#0d0d1a]">G</div>
            <span className="text-sm font-semibold text-[#f0f0f5]">Gaokey</span>
          </Link>
          <span className="text-xs text-[#5a5a70]">Privacy Policy</span>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-16">
        <h1 className="mb-2 text-4xl font-bold tracking-tight text-[#f0f0f5]">
          Privacy Policy
        </h1>
        <p className="mb-10 text-sm text-[#5a5a70]">Effective date: January 1, 2025 · Toii Social LLC</p>

        <div className="space-y-10 text-[#8e8ea0] [&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-[#f0f0f5] [&_p]:text-sm [&_p]:leading-relaxed [&_ul]:mt-2 [&_ul]:space-y-1 [&_ul]:pl-5 [&_ul]:text-sm [&_li]:list-disc [&_li]:leading-relaxed">

          <div>
            <h2>1. Our Core Commitment</h2>
            <p>
              Gaokey is a non-custodial identity wallet. We are committed to a simple
              principle: <strong className="text-[#e8a020]">your data stays on your device</strong>.
              We do not collect, store, sell, or share your personal information, private keys,
              seed phrases, transaction history, or identity data.
            </p>
            <p className="mt-3">
              Gaokey is built by Toii Social LLC, a company operating under Gao Internet&rsquo;s
              IronClaw security standard. This policy explains exactly what we collect (very little),
              what we do not collect (almost everything), and your rights.
            </p>
          </div>

          <div>
            <h2>2. What We Do NOT Collect</h2>
            <p>We explicitly do <strong className="text-[#f0f0f5]">not</strong> collect or have access to:</p>
            <ul>
              <li>Private keys, seed phrases, mnemonics, or wallet credentials of any kind</li>
              <li>Transaction history or signing activity</li>
              <li>Biometric data (Face ID / fingerprint data never leaves your device&rsquo;s secure enclave)</li>
              <li>Location data</li>
              <li>Contact lists or address books</li>
              <li>Device identifiers for advertising purposes</li>
              <li>Behavioral analytics or usage tracking data sold to third parties</li>
            </ul>
          </div>

          <div>
            <h2>3. What We Collect (Minimal)</h2>
            <p>
              To operate the app and provide services, we may process the following limited data:
            </p>
            <ul>
              <li>
                <strong className="text-[#f0f0f5]">Gao Domain registration:</strong> When you
                register a Gao Domain (e.g. alice.gao), the domain name is recorded on the
                Ethereum blockchain. This is public and permanent by design.
              </li>
              <li>
                <strong className="text-[#f0f0f5]">Crash reports (optional):</strong> If you
                opt in, anonymised crash logs may be submitted to help us fix bugs.
                All sensitive fields are stripped before transmission. Crash reporting
                is off by default.
              </li>
              <li>
                <strong className="text-[#f0f0f5]">Build and version telemetry:</strong> Anonymous
                counts of app versions in use (no user identifiers) may be collected via
                Expo&rsquo;s standard build infrastructure.
              </li>
            </ul>
          </div>

          <div>
            <h2>4. No Ads. No Data Selling.</h2>
            <p>
              Gaokey does not display advertisements. We do not sell, rent, trade, or share
              your personal data with advertisers or data brokers. Our revenue model is based
              on the Gao Internet protocol, not on monetising user data.
            </p>
          </div>

          <div>
            <h2>5. Key Storage &amp; Security</h2>
            <p>
              All private keys and sensitive credentials are stored exclusively in your
              device&rsquo;s hardware security module:
            </p>
            <ul>
              <li><strong className="text-[#f0f0f5]">iOS:</strong> Secure Enclave via <code className="rounded bg-[#13132a] px-1 py-0.5 text-xs text-[#e8a020]">expo-secure-store</code></li>
              <li><strong className="text-[#f0f0f5]">Android:</strong> Android Keystore System</li>
            </ul>
            <p className="mt-3">
              Keys are never transmitted over the network, never backed up to cloud storage
              without explicit user action, and never accessible to Toii Social LLC or
              any third party.
            </p>
          </div>

          <div>
            <h2>6. OTA Updates Disabled</h2>
            <p>
              Gaokey has over-the-air (OTA) software updates permanently disabled. All
              updates are distributed exclusively through the Apple App Store and Google
              Play Store, both of which perform security review. This means no code
              can be silently pushed to your device outside of a reviewed app release.
            </p>
          </div>

          <div>
            <h2>7. Third-Party Services</h2>
            <p>
              Gaokey may interact with the following third-party services, each with their
              own privacy policies:
            </p>
            <ul>
              <li><strong className="text-[#f0f0f5]">Ethereum network:</strong> Public blockchain — domain registrations are on-chain and public</li>
              <li><strong className="text-[#f0f0f5]">Gao Internet relay nodes:</strong> End-to-end encrypted message routing — relay nodes cannot read message content</li>
              <li><strong className="text-[#f0f0f5]">Expo / EAS:</strong> Build infrastructure and optional crash reporting</li>
            </ul>
          </div>

          <div>
            <h2>8. Children&rsquo;s Privacy</h2>
            <p>
              Gaokey is not directed at children under the age of 13 (or the applicable age
              in your jurisdiction). We do not knowingly collect data from children.
            </p>
          </div>

          <div>
            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be published
              at <code className="rounded bg-[#13132a] px-1 py-0.5 text-xs text-[#e8a020]">key.gao.global/privacy</code>.
              Continued use of the app after changes constitutes acceptance of the updated policy.
            </p>
          </div>

          <div>
            <h2>10. Contact</h2>
            <p>
              For privacy questions or requests, contact Toii Social LLC at:<br />
              <a href="mailto:privacy@gao.global" className="text-[#e8a020] hover:underline">
                privacy@gao.global
              </a>
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#252545] px-6 py-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-3 text-sm text-[#5a5a70] sm:flex-row">
        <span>© 2025 Toii Social LLC. All rights reserved.</span>
        <div className="flex gap-5">
          <Link href="/privacy/" className="hover:text-[#f0f0f5]">Privacy Policy</Link>
          <Link href="/terms/" className="hover:text-[#f0f0f5]">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
