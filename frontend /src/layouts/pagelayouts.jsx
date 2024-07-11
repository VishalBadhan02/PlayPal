import { Outlet, useNavigate } from "react-router-dom";
import PageHeader from "../components/pageHeader";
import Footer from "../components/footer";
import { useEffect } from "react";




const PagesHeader = () => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    useEffect(() => {

        if (!token || token === undefined) {
            navigate("/home")
        }
    }, [token])
    return (
        <>
            <PageHeader />
            <Outlet />
            <Footer />
        </>
    )
}

export default PagesHeader;