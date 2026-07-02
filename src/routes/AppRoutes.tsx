import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/login";
import Dashboard from "../pages/Dashboard/dashboard";
import PublicLayout from "../layouts/publiclayout";
import PrivateLayout from "../layouts/privatelayout";
import NotFound from "../components/NotFound/notfound";
import Reports from "../pages/Reports/reports";

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<PublicLayout />}>
                <Route path="/" element={<Login />} />
            </Route>

            <Route element={<PrivateLayout />}>
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Reports" element={<Reports />} />
            </Route>

            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
}