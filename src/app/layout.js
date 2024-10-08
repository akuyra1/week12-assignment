import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
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
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body className={inter.className}>
          <Theme accentColor="green">
            <Header />
            {children}
          </Theme>
        </body>
      </html>
    </ClerkProvider>
  );
}
