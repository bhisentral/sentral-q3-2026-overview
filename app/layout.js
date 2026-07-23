import "./globals.css";

export const metadata = {
  title: "Sentral Overview · Q3 2026",
  description:
    "Sentral is the leading full-building residential hospitality operator, maximizing NOI lift for Class A apartment owners through superior performance and enhanced experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
