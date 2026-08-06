import type { Metadata, Viewport } from "next";
import { Inter, Lora } from "next/font/google";

import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingAppointmentButton } from "@/components/layout/floating-appointment-button";
import { JsonLd } from "@/components/seo/json-ld";
import { buildPhysicianSchema } from "@/lib/seo/physician-schema";
import { buildOrganizationSchema } from "@/lib/seo/organization-schema";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/content/site";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
});

const lora = Lora({
  subsets: ["latin", "cyrillic"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "uk_UA",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a3d33",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [buildPhysicianSchema(), buildOrganizationSchema()],
  };

  return (
    <html lang="uk" className={`${inter.variable} ${lora.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <JsonLd data={graphSchema} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Перейти до основного вмісту
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingAppointmentButton />
      </body>
    </html>
  );
}
