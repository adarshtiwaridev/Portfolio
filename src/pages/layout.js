export const metadata = {
  // 🔹 Primary SEO Title (60 chars ke andar)
  title: {
    default:
      "Adarshtiwaridev | Adarsh Tiwari – Full Stack Developer & Software Engineer",
    template: "%s | Adarshtiwaridev",
  },

  // 🔹 Meta Description (Google snippet ke liye)
  description:
    "Adarshtiwaridev is the official portfolio of Adarsh Tiwari, a Full Stack Developer and Software Engineer specializing in Next.js, React, Node.js, modern web development, scalable applications, and cloud-ready solutions.",

  // 🔹 SEO Keywords (natural + brand focused)
  keywords: [
    "Adarshtiwaridev",
    "Adarsh Tiwari",
    "Full Stack Developer",
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "Web Developer Portfolio",
    "Modern Web Development",
    "JavaScript Developer",
    "Frontend Backend Developer",
  ],

  // 🔹 Author / Branding
  authors: [{ name: "Adarsh Tiwari", url: "https://www.adarshtiwaridev.com" }],
  creator: "Adarsh Tiwari",
  publisher: "Adarshtiwaridev",

  // 🔹 Canonical URL (VERY IMPORTANT for SEO)
  metadataBase: new URL("https://www.adarshtiwaridev.com"),

  alternates: {
    canonical: "/",
  },

  // 🔹 Open Graph (LinkedIn, WhatsApp, Facebook preview)
  openGraph: {
    title:
      "Adarshtiwaridev | Adarsh Tiwari – Full Stack Developer & Software Engineer",
    description:
      "Explore Adarshtiwaridev, the professional portfolio of Adarsh Tiwari showcasing full stack projects, modern web applications, and scalable software solutions.",
    url: "https://www.adarshtiwaridev.com",
    siteName: "Adarshtiwaridev",
    images: [
      {
        url: "/og-image.png", // optional (agar image hai)
        width: 1200,
        height: 630,
        alt: "Adarshtiwaridev Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // 🔹 Twitter SEO
  twitter: {
    card: "summary_large_image",
    title:
      "Adarshtiwaridev | Adarsh Tiwari – Full Stack Developer & Software Engineer",
    description:
      "Official portfolio of Adarsh Tiwari featuring modern web development projects using Next.js, React, Node.js, and cloud technologies.",
    images: ["/og-image.png"],
    creator: "@adarsh", // optional
  },

  // 🔹 Robots (Search Engine Control)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  // 🔹 Category (helps Google understand niche)
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
