import { Outlet } from "react-router-dom";
import PublicNavbar from "../components/Navbar/publicnavbar";

export default function PublicLayout(){
    return (
        <>
            <PublicNavbar />
            <main className="container py-5">
                 <Outlet />
            </main>

            {/* <Footer /> */}
        </>
    );
}