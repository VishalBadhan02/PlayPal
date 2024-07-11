import { Outlet } from "react-router-dom";
import AuthFooter from "./authFooter"
import AuthHeader from "./authheader"
import { useEffect } from "react"

const AuthLayout = () => {
    const token = localStorage.getItem('token');
    useEffect(() => {
        if (token) {
            window.location.href = "/"
        }
    }, [token])

    return (
        <>
            <AuthHeader />
            <Outlet />
            <AuthFooter />
        </>

    )
}

export default AuthLayout;