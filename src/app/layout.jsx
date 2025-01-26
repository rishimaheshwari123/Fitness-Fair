import Navbar from "@/components/comman/Navbar";
import "./globals.css";
import TopBar from "@/components/comman/TopBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
