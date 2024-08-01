import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import 'primeicons/primeicons.css';
import Notification from "../Pages/user/notification";
import toast from "react-hot-toast";
import "./MediaQuery/nav.css"
import PcNavbar from "./Media_Query_Control/pcNavbar";
import MobileNavbar from "./Media_Query_Control/mobileNavbar";

const Header = () => {
    const token = localStorage.getItem("token");
    const [offCanvas, setOffCanvas] = useState(false)
    const [forPc, setForPC] = useState(true)

    useEffect(() => {
        handlemedia();
    }, [])

    const handlemedia = () => {
        if (window.innerWidth <= 600) {
            setOffCanvas(!offCanvas)
            setForPC(!forPc)
        }
        else {
            setOffCanvas(offCanvas)
        }
    }


    return (
        <>
            {forPc && <PcNavbar />}
            {offCanvas && <MobileNavbar />}

        </>
    )
}

export default Header;