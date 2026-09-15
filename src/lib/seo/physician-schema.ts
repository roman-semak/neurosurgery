import { DOCTOR } from "@/lib/content/doctor";
import { CONTACT, SITE_URL } from "@/lib/content/site";
import { ORGANIZATION_SCHEMA_ID } from "@/lib/seo/organization-schema";

export function buildPhysicianSchema() {
  return {
    "@type": "Physician",
    "@id": `${SITE_URL}/#physician`,
    name: DOCTOR.fullName,
    image: `${SITE_URL}/images/doctor-portrait.jpg`,
    description: DOCTOR.heroTagline,
    medicalSpecialty: "Neurosurgery",
    url: SITE_URL,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address,
      addressCountry: "UA",
    },
    worksFor: { "@id": ORGANIZATION_SCHEMA_ID },
  };
}
