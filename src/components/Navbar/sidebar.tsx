import { NavLink } from "react-router-dom";

export default function Sidebar() {
    return (
        <div
            className="bg-light border-end p-3"
            style={{ width: "250px", minHeight: "100vh" }}
        >
            <h5 className="mb-4">Menu</h5>

            <div className="nav flex-column">

                <NavLink className="nav-link" to="/Dashboard/">
                    Home
                </NavLink>

                <NavLink className="nav-link" to="/Reports">
                    Reports
                </NavLink>

                <NavLink className="nav-link disabled" to="/profile">
                    Profile
                </NavLink>

                <NavLink className="nav-link disabled" to="/change-password">
                    Change Password
                </NavLink>

            </div>
        </div>
    );
}