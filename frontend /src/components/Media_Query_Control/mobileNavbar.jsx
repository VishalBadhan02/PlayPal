import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, Navigate } from "react-router-dom";
import Notification from "../../Pages/user/notification";
import "./ForPhone/phone.css"

const MobileNavbar = () => {
    const token = localStorage.getItem("token");
    const [link, setLink] = useState();
    const [value, setValue] = useState("");


    const search = (e) => {
        Navigate("?q=" + e)

    }

    useEffect(() => {
        setSideBar();
        window.addEventListener("handleNav", handleNav)
        return () => window.removeEventListener("handleNav", handleNav);

    }, [])

    const handleNav = () => {
        if (window.scrollY > 2) {
            setValue("position-fixed z-1")
        }
        else {
            setValue("")
        }
    }

    const setSideBar = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:5050/links/sideBar")
            console.log(res.data)
            setLink(res.data);
        } catch (err) {
            toast.error("Error in side bar", err)
        }
    }
    return (
        <>
            {token ?
                <nav className="navbar bg pb-1   w-100" aria-label="Dark offcanvas navbar">
                    <div className="container-fluid ">
                        <a className="navbar-brand p-0 pb-1" href="/">
                            <img src={require("../../assets/final_logo_mode-removebg-preview.png")}
                                style={{ width: 130, height: 30 }}
                                className=" "
                            />
                        </a>
                        <div className="d-flex align-items-center">

                            <i className="pi p-1 pi-search text-white"></i>
                            {/* <input
                                type="search"
                                className="rounded-3 bg-dark border-0 "
                                placeholder=" Search "
                                aria-label="Search"
                                aria-describedby="basic-addon1"
                                onKeyUp={(e) => search(e.target.value)}
                            /> */}
                            <Link to={"/profile"} className=" btn hoverbtn border-0  ">
                                <i className="pi pi-user p-1 text-white"></i>
                            </Link>
                            <div className=" dropdown">
                                <  Notification />
                            </div>
                            <button
                                className="navbar-toggler border-0"
                                type="button"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasNavbarDark"
                                aria-controls="offcanvasNavbarDark"
                                aria-label="Toggle navigation"
                            >
                                <i className="pi pi-align-justify text-white"></i>
                            </button>
                        </div>
                        <div
                            className="offcanvas offcanvas-end text-bg-dark"
                            tabIndex={-1}
                            id="offcanvasNavbarDark"
                            aria-labelledby="offcanvasNavbarDarkLabel"
                        >
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarDarkLabel">
                                    Menu
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close btn-close-white"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="offcanvas-body ">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    {link && link.map((value, index) =>
                                        <li key={index} className="nav-item">
                                            <a className="nav-link active text-white" aria-current="page" href={value.link}>
                                                {value.name}
                                            </a>
                                        </li>
                                    )}
                                </ul>

                            </div>
                        </div>
                    </div>
                    {/* <div className="row-1 d-flex border-top border-secondary ">
                        <div className="col-9 d-flex align-items-center px-2 ">
                          
                        </div>
                        <div className="col-3 text-end">
                            <button className="btn text-white border-0">Logout</button>
                        </div>
                    </div> */}
                </nav>
                :
                <nav className="navbar bg-dark" aria-label="Dark offcanvas navbar">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={require("../../assets/final_logo_mode-removebg-preview.png")}
                                style={{ width: 200, height: 40 }}
                                className=""
                            />
                        </a>
                        <button
                            className="navbar-toggler border-0 "
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbarDark"
                            aria-controls="offcanvasNavbarDark"
                            aria-label="Toggle navigation"
                        >
                            <i className="pi pi-align-justify text-white"></i>
                        </button>
                        <div
                            className="offcanvas offcanvas-end text-bg-dark"
                            tabIndex={-1}
                            id="offcanvasNavbarDark"
                            aria-labelledby="offcanvasNavbarDarkLabel"
                        >
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarDarkLabel">
                                    Offcanvas
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close btn-close-white"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="offcanvas-body ">
                                <ul className="navbar-nav justify-content-end flex-g row-1 pe-3">
                                    <li className="nav-item">
                                        <a className="nav-link active text-white" aria-current="page" href="#">
                                            Home
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            Link
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Dropdown
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Action
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Another action
                                                </a>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Something else here
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <form className="d-flex mt-3" role="search">
                                    <input
                                        className="form-control me-2"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                    />
                                    <button className="btn btn-outline-success" type="submit">
                                        Search
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row-1 d-flex border-top  ">
                        <div className="col-9 d-flex align-items-center px-2 ">
                            <input
                                type="text"
                                className="rounded-3 bg-dark border-0"
                                placeholder=" Search "
                                aria-label="Search"
                                aria-describedby="basic-addon1"
                                onKeyUp={(e) => search(e.target.value)}
                            />
                        </div>
                        <div className="col-3 text-end">
                            <button className="btn text-white border-0">Sign-in</button>
                        </div>
                    </div>
                </nav>
            }

        </>
    )
}

export default MobileNavbar