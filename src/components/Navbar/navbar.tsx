import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
                <div className="container-fluid">

                    <span className="navbar-brand fw-bold">
                        Patients Portal
                    </span>

                    <div className="d-flex align-items-center gap-3">

                        <span className="text-white">
                            Welcome, Username
                        </span>

                        <NavLink
                            to="/profile"
                            className="btn btn-outline-light btn-sm disabled"
                        >
                            Profile
                        </NavLink>
                        
                        <NavLink
                            to="/Login"
                            className="btn btn-danger btn-sm"
                        >Logout</NavLink>

                        {/* <button className="btn btn-danger btn-sm">
                            Logout
                        </button> */}

                    </div>

                </div>
            </nav>
        </>
    );
}