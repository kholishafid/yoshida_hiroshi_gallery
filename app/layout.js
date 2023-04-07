import Navbar from "./Navbar";
import "./globals.css";

export const metadata = {
  title: "Art Gallery",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}
