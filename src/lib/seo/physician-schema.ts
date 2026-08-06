import { DOCTOR } from "@/lib/content/doctor";
import { CONTACT, SITE_URL, SOCIALS } from "@/lib/content/site";

export function buildPhysicianSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: DOCTOR.fullName,
    image: `${SITE_URL}/images/portrait-placeholder.svg`,
    description: DOCTOR.heroTagline,
    medicalSpecialty: "Neurosurgery",
    url: SITE_URL,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address,
      addressCountry: "UA",
    },
    sameAs: SOCIALS.map((social) => social.href),
  };
}
