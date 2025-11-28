import "./globals.css";

export const metadata = {
  title: "SITAA - Call for Academic Incubators",
  description:
    "Call for Applications: Academic Incubators to partner with SITAA (Scheme for Innovation and Technology Association with Aadhaar)."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
