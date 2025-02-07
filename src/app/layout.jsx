import Navbar from "@/components/comman/Navbar";
import "./globals.css";
import { ToastContainer } from "react-toastify";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
