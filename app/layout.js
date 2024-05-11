import { Inter } from "next/font/google";
import "./globals.css";
import "@/app/styles.css";
import Header from "@/app/ui/Header";
import CustomProvider from "@/app/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trend | Home",
  description: "Phase 2 Project",
};

export default function RootLayout({ children }) {
  return (
    <CustomProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
          <footer className="footer">
            <p className="copyright">Trend&copy; 2024</p>
          </footer>
        </body>
      </html>
    </CustomProvider>
  );
}
