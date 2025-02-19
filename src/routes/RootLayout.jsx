import Footer from "../components/footer/Footer.jsx";
import Navbar from "../components/header/Navbar.jsx";
import { Outlet } from "react-router-dom";


export default function RootLayout() {
  
  return (
    <div>
      <Navbar />
        <main>
            <Outlet />
        </main>

     <Footer />
    </div>
  )
}
