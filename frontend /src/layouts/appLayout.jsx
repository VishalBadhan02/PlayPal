import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/footer"
import Header from "../components/header"
import { useEffect } from "react";

const AppLayout = () => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    useEffect(() => {
        if (!token || token === undefined) {
            navigate("/home")
        }
    }, [token])

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )


}

export default AppLayout;