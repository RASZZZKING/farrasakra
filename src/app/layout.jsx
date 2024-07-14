import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Farrasakra",
  description: "This is web personal portofolio Farras Akhirio Ramadhan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-center">
          <div className="w-9/12">
            <Navbar />
            <div className="min-h-[80vh]">{children}</div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
