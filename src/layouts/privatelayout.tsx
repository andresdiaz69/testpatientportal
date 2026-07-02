import Navbar from "../components/Navbar/navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Navbar/sidebar";
import Footer from "../components/Navbar/footer";

export default function PrivateLayout() {
    return (
        <>
            <Navbar />
            <div className="d-flex">
                <Sidebar />
                <main>
                    <Outlet />
                </main>
            </div>
            <Footer />
        </>
    );
}