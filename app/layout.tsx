import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata = {
  title: "Rajeev Platform Control Plane",
  description: "Interactive Platform Engineering Career Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}