import { CONTACT, SITE_NAME, SITE_URL } from "@/lib/content/site";

export const ORGANIZATION_SCHEMA_ID = `${SITE_URL}/#organization`;

export function buildOrganizationSchema() {
  return {
    "@type": "MedicalOrganization",
    "@id": ORGANIZATION_SCHEMA_ID,
    name: SITE_NAME,
    url: SITE_URL,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address,
      addressCountry: "UA",
    },
  };
}
