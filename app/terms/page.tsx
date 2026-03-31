import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Gaokey",
  description: "Gaokey Terms of Service. Sovereign identity wallet by Toii Social LLC.",
};

export default function TermsOfService() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Nav */}
      <header className="border-b border-[#252545] bg-[#0d0d1a]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#e8a020] text-xs font-bold text-[#0d0d1a]">G</div>
            <span className="text-sm font-semibold text-[#f0f0f5]">Gaokey</span>
          </Link>
          <span className="text-xs text-[#5a5a70]">Terms of Service</span>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-16">
        <h1 className="mb-2 text-4xl font-bold tracking-tight text-[#f0f0f5]">
          Terms of Service
        </h1>
        <p className="mb-10 text-sm text-[#5a5a70]">Effective date: January 1, 2025 · Toii Social LLC</p>

        <div className="space-y-10 text-[#8e8ea0] [&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-[#f0f0f5] [&_p]:text-sm [&_p]:leading-relaxed [&_ul]:mt-2 [&_ul]:space-y-1 [&_ul]:pl-5 [&_ul]:text-sm [&_li]:list-disc [&_li]:leading-relaxed">

          <div>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using Gaokey (&ldquo;the App&rdquo;), you agree to
              be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree,
              do not use the App. These Terms are between you and Toii Social LLC
              (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;).
            </p>
          </div>

          <div>
            <h2>2. Description of Service</h2>
            <p>
              Gaokey is a non-custodial sovereign identity wallet and trust layer for the
              Gao Internet protocol stack. It provides:
            </p>
            <ul>
              <li>Decentralised identity management via Gao Domains (Ethereum-anchored DIDs)</li>
              <li>Cryptographic signing of transactions and payment intents (x402 protocol)</li>
              <li>AI agent authorization with policy-gated execution</li>
              <li>Passkey-based authentication using platform biometrics</li>
            </ul>
            <p className="mt-3">
              <strong className="text-[#e8a020]">Gaokey is pre-mainnet software.</strong> An
              independent security audit is planned and required before mainnet deployment.
              Do not use the App with real funds until the audit is complete and publicly disclosed.
            </p>
          </div>

          <div>
            <h2>3. Non-Custodial Nature</h2>
            <p>
              Gaokey is strictly non-custodial. This means:
            </p>
            <ul>
              <li>You are solely responsible for safeguarding your private keys and recovery materials</li>
              <li>Toii Social LLC does not hold, control, or have access to your private keys at any time</li>
              <li>We cannot recover your wallet if you lose access to your device and recovery materials</li>
              <li>We cannot reverse or cancel any transaction you sign</li>
              <li>Loss of your private key means permanent, irrecoverable loss of access to associated assets</li>
            </ul>
          </div>

          <div>
            <h2>4. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul>
              <li>Keep your device and recovery materials secure</li>
              <li>Not use the App for any unlawful purpose, including money laundering or sanctions evasion</li>
              <li>Comply with all applicable laws and regulations in your jurisdiction</li>
              <li>Not attempt to reverse-engineer, decompile, or tamper with the App</li>
              <li>Not use the App to harm, defraud, or deceive others</li>
              <li>Maintain the security of your biometric authentication methods</li>
            </ul>
          </div>

          <div>
            <h2>5. Pre-Mainnet Disclaimer</h2>
            <p>
              Gaokey is currently pre-mainnet software provided &ldquo;as is&rdquo; for testing
              and development purposes. Specifically:
            </p>
            <ul>
              <li>The App has not yet completed an independent security audit</li>
              <li>Smart contracts and protocol components may contain bugs or vulnerabilities</li>
              <li>Do not use the App to manage real-value assets until audit completion is announced</li>
              <li>Protocol parameters, APIs, and features may change without notice</li>
            </ul>
          </div>

          <div>
            <h2>6. No Financial Advice</h2>
            <p>
              Nothing in the App or these Terms constitutes financial, investment, legal, or
              tax advice. Toii Social LLC is not a financial institution, broker-dealer,
              investment advisor, or money services business. All decisions regarding
              cryptocurrency and digital assets are solely your responsibility.
            </p>
          </div>

          <div>
            <h2>7. Intellectual Property</h2>
            <p>
              The App, including its design, code, and content, is owned by Toii Social LLC
              and licensed under the MIT License (source available at the project repository).
              The Gaokey name, logo, and brand marks are trademarks of Toii Social LLC and
              may not be used without written permission.
            </p>
          </div>

          <div>
            <h2>8. Disclaimer of Warranties</h2>
            <p>
              THE APP IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT
              WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES
              OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              WE DO NOT WARRANT THAT THE APP WILL BE ERROR-FREE, SECURE, OR UNINTERRUPTED.
            </p>
          </div>

          <div>
            <h2>9. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, TOII SOCIAL LLC SHALL NOT BE LIABLE
              FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
              INCLUDING LOSS OF PROFITS, LOSS OF DATA, LOSS OF DIGITAL ASSETS, OR LOSS OF
              GOODWILL, ARISING FROM YOUR USE OF OR INABILITY TO USE THE APP.
            </p>
            <p className="mt-3">
              OUR TOTAL LIABILITY SHALL NOT EXCEED USD $100 OR THE AMOUNT YOU PAID FOR THE
              APP IN THE PAST TWELVE MONTHS, WHICHEVER IS GREATER.
            </p>
          </div>

          <div>
            <h2>10. Prohibited Jurisdictions</h2>
            <p>
              You may not use the App if you are located in, or are a national or resident of,
              any jurisdiction where the use of cryptocurrency applications is prohibited by
              applicable law or regulation, including jurisdictions subject to comprehensive
              sanctions programmes.
            </p>
          </div>

          <div>
            <h2>11. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Updated Terms will be
              published at{" "}
              <code className="rounded bg-[#13132a] px-1 py-0.5 text-xs text-[#e8a020]">
                key.gao.global/terms
              </code>
              . Continued use of the App after changes constitutes acceptance of the revised Terms.
            </p>
          </div>

          <div>
            <h2>12. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of
              the State of Delaware, United States, without regard to its conflict of law
              provisions. Any disputes shall be resolved through binding arbitration.
            </p>
          </div>

          <div>
            <h2>13. Contact</h2>
            <p>
              For questions about these Terms, contact Toii Social LLC at:<br />
              <a href="mailto:legal@gao.global" className="text-[#e8a020] hover:underline">
                legal@gao.global
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
