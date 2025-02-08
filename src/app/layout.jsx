import Navbar from "@/components/comman/Navbar";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import TopHeader from "@/components/comman/TopBar";
import Footer from "@/components/comman/Footer";


export const generateMetadata = () => {
  return {
    title: "Fitness And Lifesytle Expo",
    description:
      "Fitness And Lifesytle Expo",
    keywords:
      "Fitness And Lifesytle Expo",
    url: "https://fitnessexpo.in/",
    image: "/android-chrome-192x192.png",

    // Open Graph Tags
    openGraph: {
      type: "website",
      url: "Fitness And Lifesytle Expo",
      title: "Fitness And Lifesytle Expo",
      description:
        "Fitness And Lifesytle Expo",
      image: "/android-chrome-192x192.png",
    },


  };
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
       
        <div className=" mt-[170px] lg:mt-[120px]">
        {children}
        <Footer />
        </div>
        <ToastContainer />
      </body>
    </html>
  );
}
