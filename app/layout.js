import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter=Inter({subsets:["latin"]})

export const metadata = {
  title: "Welth",
  description: "Personal wealth management App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        {children}
        {/* footer */}
        <footer className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>Made By welthmanCorp</p>
        </div>
        </footer>
       
      </body>
    </html>
  );
}
