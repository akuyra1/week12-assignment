import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
// const inter = Inter({ subsets: ["latin"] });
import { Theme } from "@radix-ui/themes";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "GameNook",
  description: "Browse our gaming library!",
};

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
