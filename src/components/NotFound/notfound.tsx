import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

export default function NotFound() {

    const location = useLocation();

    useEffect(() => {

    }, [location]
    );

    return <Navigate to="/"></Navigate>
}