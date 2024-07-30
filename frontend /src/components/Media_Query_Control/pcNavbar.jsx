import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import 'primeicons/primeicons.css';
import Notification from "../../Pages/user/notification";
import toast from "react-hot-toast";
import "../MediaQuery/nav.css"
import axios from "axios";



const PcNavbar = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const [link, setLink] = useState();


    const search = (e) => {
        navigate("?q=" + e)

    }

    useEffect(() => {
        setSideBar()
    }, [])

    const setSideBar = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:5050/links/sideBar")
            const sidebarLinks = res.data.find(item => item.sidebar_links).sidebar_links;
            setLink(sidebarLinks);
        } catch (err) {
            toast.error("Error in side bar", err)
        }
    }

    return (<>
        <nav>
            {token ? <div className="container-fluid box_shadow g-0 " >
                <div className={`position-absolute media_header  top-0 w-100  z-1 text-white`}>
                    <div className="border-bottom border-secondary header"
                    >
                        <div className="container-fluid  text-white" >
                            <div className="row  nav_row align-items-center">
                                <div className={`col-2 p-0 navbar-brand text-center`}>
                                    <img src={require("../../assets/final_logo_mode-removebg-preview.png")}
                                        style={{ width: 200, height: 40 }}
                                        className=""

                                    />

                                </div>
                                <div className={`col-6 d-flex p-0`}>
                                    <input
                                        type="text"
                                        className="form-control search-input px-5 rounded-3"
                                        placeholder="🔎 Search Your friends & opponents"
                                        aria-label="Search"
                                        aria-describedby="basic-addon1"
                                        onKeyUp={(e) => search(e.target.value)}
                                    />
                                </div>
                                <div className="col-2 media_location">
                                    <button className="btn media_location location-btn bg-white rounded-3 text-black">
                                        <img
                                            src={require("../../assets/—Pngtree—pin  location icon_3566349.png")}
                                            style={{ height: 25, width: 25 }}
                                            alt="Settings"
                                            className="settings-icon"
                                        />
                                        Choose your location
                                    </button>
                                </div>
                                <div className={`col-2`}>

                                    <div className=" d-flex justify-content-end">
                                        <Link to={"/profile"} className=" btn hoverbtn border-0  ">
                                            <i className="pi pi-user p-1 text-white"></i>
                                        </Link>
                                        <button className=" btn hoverbtn border-0 ">
                                            <i className="pi pi-cart-minus  text-white p-1" ></i>
                                        </button>
                                        <div className=" dropdown">
                                            <  Notification />
                                        </div>
                                        <Link to={"/friendlist"}>
                                            <button className=" btn hoverbtn border-0 ">
                                                <i className="pi pi-send p-1 text-white" ></i>
                                            </button>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="sidebar media_sidebar  align-items-center ">
                        <ul className=" p-1 d-flex text-secondary list-group-numbered  m-0 w-100  ">
                            {link && link.map((value, index) =>
                                <li key={index} className="nav-item px-3">
                                    <div class="dropdown">
                                        <a class={`" text-white text-decoration-none ${value.dropdown_toggle} "`} href={value.link} role="button" data-bs-toggle={value.data_bs_toggle} aria-expanded="false">
                                            {value.name}
                                        </a>
                                        <ul class="dropdown-menu bg-dark ">
                                            {value && value.sub_type && value.sub_type.map((subvalue, index) =>
                                                <li key={index} ><a class="dropdown-item text-white" href="#">{subvalue.name}</a></li>)}
                                        </ul>
                                    </div>
                                </li>
                            )}
                        </ul>
                        {/* <ul className="  ">
                            {link && link.map((value, index) =>
                                <li key={index} className="px-2 hoverbtn" >
                                    <Link to={`${value.link}`}>
                                        < button className="btn border-0 text-white" >{value.name}</button>
                                    </Link>

                                </li>
                            )}
                        </ul> */}
                    </div>
                </div>
            </div >
                :
                <div className="container-fluid p-0 box_shadow " >
                    <div className={`position-absolute media_header  top-0 w-100  z-1 text-white`}>
                        <div className=" border-bottom  header "
                        >
                            <div className="container-fluid " >
                                <div className="row align-items-center  ">
                                    <div className="col-2 p-0 navbar-brand text-end ">
                                        <img src={require("../../assets/final_logo_mode-removebg-preview.png")}
                                            style={{ width: 200, height: 50 }}
                                            className=""
                                        />

                                    </div>

                                    <div className={`col-6 d-flex p-0`}>

                                        <input
                                            type="text"
                                            className="form-control search-input  rounded-3"
                                            placeholder="🔎 Search Your opponents"
                                            aria-label="Search"
                                            aria-describedby="basic-addon1"
                                        />
                                    </div>
                                    <div className="col-2 media_location">
                                        <button className="btn  location-btn bg-white rounded-3 text-black">
                                            <img
                                                src={require("../../assets/—Pngtree—pin  location icon_3566349.png")}
                                                style={{ height: 25, width: 25 }}
                                                alt="Settings"
                                                className="settings-icon"
                                            />
                                            Choose your location
                                        </button>
                                    </div>
                                    <div className="col-2 d-flex justify-content-end ">


                                        <button className="btn hoverbtn border-0   ">
                                            <i className="pi pi-bell text-white  p-1" ></i>
                                        </button>
                                        <div className="p-1 carousel">
                                            <Link to={"/login"}>
                                                <button className="btn border border-secondary text-white  " >
                                                    <i className="pi pi-sign-in " ></i>
                                                    <span> Sign in</span>
                                                </button>
                                            </Link>

                                        </div>


                                        {/* 
                                        {offCanvas &&
                                            <div>
                                                <button class="btn hoverbtn border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                                    <i className="pi pi-bars text-white " style={{ fontSize: 28 }}></i>
                                                </button>

                                                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                                    <div class="offcanvas-header">
                                                        <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                                    </div>
                                                    <div class="offcanvas-body">
                                                        ...
                                                    </div>
                                                </div></div>
                                        } */}

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex sidebar  media_sidebar align-items-cente " >

                            <ul className="d-flex text-secondary list-group-numbered m-0  ">
                                {link && link.map((value, index) =>
                                    <li key={index} className="px-2 hoverbtn" >
                                        <Link to={`${value.link}`}>
                                            < button className="btn border-0 text-white" >{value.name}</button>
                                        </Link>

                                    </li>
                                )}

                            </ul>


                        </div>
                    </div>
                </div >
            }
        </nav>
    </>)
}

export default PcNavbar