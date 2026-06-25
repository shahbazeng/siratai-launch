import './globals.css';
import type { Metadata } from "next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YE4SMQJ61D"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YE4SMQJ61D');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body style={{ margin: 0 }}>{children}</body></html>;
}