import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./(components)/Navigation";
import { DateANDLocationContext } from "./(context)/dateANDLocationContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col max-w-7xl mx-auto `}>
        <DateANDLocationContext>
          <Navigation />
          {children}
        </DateANDLocationContext>
      </body>
    </html>
  );
}
