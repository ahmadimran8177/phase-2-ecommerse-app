import { Inter } from "next/font/google";
import "./globals.css";
import "@/app/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trend | Home",
  description: "Phase 2 Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="header">
          <div>
            <a href="/" className="nav-brand">
              Trend
            </a>
            <span id="user-type"></span>
          </div>
          <nav className="nav">
            <ul className="nav-items" id="nav-items">
              <li className="nav-item active" id="home">
                <a href="/">Home</a>
              </li>
              {/* <li className="nav-item" id="orders">
              <a href="/orders">Orders</a>
            </li> */}
              {/* <li className="nav-item" id="products">
                <a href="/products">Products</a>
              </li> */}
              {/* <li className="nav-item" id="login">
              <a href="/login">Login</a>
            </li> */}
              {/* <li className="nav-item" id="profile">
              <a href="/profile">Profile</a>
            </li> */}
              {/* <li className="nav-item" id="logout" onclick="logout()">
              <a href="#">Logout</a>
            </li> */}
            </ul>
          </nav>
          <div className="hamburger">
            <span id="openHam">&#9776;</span>
            <span id="closeHam">&#x2716;</span>
          </div>
        </header>
        {children}
        <footer className="footer">
          <p className="copyright">Trend&copy; 2024</p>
        </footer>
      </body>
    </html>
  );
}
