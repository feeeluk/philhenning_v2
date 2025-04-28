import { Inter } from "next/font/google";
import "@/app/styles/global.css";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "philhenning",
  description: "portfolio",
  openGraph:{
    title: "philhenning",
    description: "portfolio",
    type: "website",
    url: "https://philhenning.online/",
    images: ["https://philhenning.online/Projects/philhenning_screenshot.png"], // add an appropriate image to your public folder 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
          <div className="PageLayout">
            {children}
          </div>
        <Footer />
      </body>
    </html>
  );
}
