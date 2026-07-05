import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import RouteGrid from "@/components/ui/RouteGrid";

export const metadata: Metadata = {
  title: "Privacy Policy | Idoko Legacy LLC",
  description: "Privacy policy for Idoko Legacy LLC's healthcare logistics and medical courier services.",
};

const sections = [
  {
    title: "Information we collect",
    body: "We collect information you provide directly to us, such as your name, organization, email address, phone number, and delivery details, when you request a quote, contact us, or use our services.",
  },
  {
    title: "How we use information",
    body: "Information you provide is used to schedule and fulfill deliveries, respond to inquiries, and maintain accurate records of pickups and drop-offs. We do not sell personal information to third parties.",
  },
  {
    title: "Protected health information",
    body: "Where our services involve the handling of materials containing protected health information, we follow operational procedures designed to support applicable HIPAA privacy and security requirements, including limiting access to authorized personnel and maintaining chain-of-custody records.",
  },
  {
    title: "Information sharing",
    body: "We may share information with service providers who support our operations, such as scheduling or communication tools, under confidentiality obligations. We do not share information for marketing purposes without consent.",
  },
  {
    title: "Data security",
    body: "We maintain reasonable administrative, technical, and physical safeguards designed to protect information from unauthorized access, disclosure, alteration, or destruction.",
  },
  {
    title: "Your choices",
    body: "You may contact us at any time to ask questions about the information we hold or to request updates to your contact details.",
  },
  {
    title: "Changes to this policy",
    body: "We may update this privacy policy from time to time. The most current version will always be posted on this page.",
  },
  {
    title: "Contact us",
    body: "Questions about this privacy policy can be directed to Info@idokolegacy.com or (832) 977-9202.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-accent-600/30 bg-primary-950 py-20 text-white lg:py-28">
        <RouteGrid id="privacy-hero-grid" className="text-accent-500/[0.08]" />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Legal"
            title="Privacy policy"
            description="Last updated January 2026"
            variant="dark"
          />
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl space-y-10 px-6 lg:px-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-serif text-xl text-primary-950">{section.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-primary-950/70">{section.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}