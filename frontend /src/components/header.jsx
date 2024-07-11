import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import 'primeicons/primeicons.css';
import Notification from "../Pages/user/notification";
import toast from "react-hot-toast";


const Header = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();


    const search = (e) => {
        navigate("?q=" + e)

    }



    return (
        <>
            {token ? <div className="container-fluid box_shadow g-0 " >
                <div className="position-absolute top-0 w-100  z-1 text-white">
                    <div className=" border-bottom border-secondary header "
                    >
                        <div className="container-fluid  text-white" >
                            <div className="row align-items-center ">
                                <div className="col-2  p-0 navbar-brand text-end ">
                                    <img src={require("../assets/final_logo_mode-removebg-preview.png")}
                                        style={{ width: 200, height: 50 }}
                                        className=""
                                    />

                                </div>

                                <div className="col-6 d-flex p-0">
                                    <button className="btn border-0 mx-1 hoverbtn " >
                                        <img
                                            src={require("../assets/icons8-magic-40.png")}
                                            alt="User"
                                            className="user-icon rounded-circle   "
                                        />
                                    </button>
                                    <input
                                        type="text"
                                        className="form-control search-input px-5 rounded-3"
                                        placeholder="🔎 Search Your friends & opponents"
                                        aria-label="Search"
                                        aria-describedby="basic-addon1"
                                        onKeyUp={(e) => search(e.target.value)}
                                    />

                                </div>
                                <div className="col-2 ">
                                    <button className="btn location-btn bg-white rounded-3 text-black">
                                        <img
                                            src={require("../assets/—Pngtree—pin  location icon_3566349.png")}
                                            style={{ height: 25, width: 25 }}
                                            alt="Settings"
                                            className="settings-icon"
                                        />
                                        Choose your location
                                    </button>


                                </div>
                                <div className="col-2 d-flex justify-content-end ">

                                    <Link to={"/profile"} className="btn hoverbtn border-0  ">
                                        <i className="pi pi-user p-1 text-white"></i>
                                    </Link>
                                    <button className="btn hoverbtn border-0 ">
                                        <i className="pi pi-cart-minus  text-white p-1" ></i>
                                    </button>
                                    <div className="dropdown">
                                        <Notification />
                                    </div>
                                    <Link to={"/friendlist"}>
                                        <button className="btn hoverbtn border-0 ">
                                            <i className="pi pi-send p-1 text-white" ></i>
                                        </button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex sidebar  align-items-center ">

                        <ul className="d-flex text-secondary list-group-numbered  m-0 w-100   ">
                            <li className="px-2 hoverbtn" >
                                <Link to={"/"}>
                                    < button className="btn border-0 text-white" >Home</button>
                                </Link>

                            </li>
                            <li className="px-2 hoverbtn">
                                <Link to={"/shopping"}>
                                    < button className="btn border-0 text-white" >Shopping</button>
                                </Link>
                            </li>
                            <li className="px-2 hoverbtn">
                                <button className="btn border-0 text-white">Leaderboard</button>
                            </li>
                            <li className="px-2 hoverbtn">
                                <button className="btn border-0 text-white">Your Points</button>
                            </li>
                            <li className="px-2 hoverbtn">
                                <Link to={"/scorecard"}>
                                    <button className="btn border-0 text-white" >Score card </button >
                                </Link>
                            </li>
                            <li className="px-2 hoverbtn">
                                <Link to={"/team-management"}>
                                    <button className="btn border-0 text-white ">Manage Team</button>
                                </Link>

                            </li>
                            <li className="px-2 hoverbtn">
                                <button className="btn border-0 text-white">Scheduled Matches</button>
                            </li>
                            <li className="px-2 hoverbtn">
                                <Link to={"/join-team"}>
                                    <button className="btn border-0 text-white ">Join Team</button>
                                </Link>
                            </li>
                        </ul>


                    </div>
                </div>
            </div >
                :
                <div className="container-fluid p-0 box_shadow " >
                    <div className="  position-absolute top-0 w-100  z-1 text-white ">
                        <div className=" border-bottom  header "

                        >
                            <div className="container-fluid " >
                                <div className="row align-items-center ">
                                    <div className="col-2  p-0 navbar-brand text-end ">
                                        <img src={require("../assets/final_logo_mode-removebg-preview.png")}
                                            style={{ width: 200, height: 50 }}
                                            className=""
                                        />

                                    </div>

                                    <div className="col-6 d-flex p-0">
                                        <button className="btn border-0 mx-1 hoverbtn " >
                                            <img
                                                src={require("../assets/icons8-magic-40.png")}
                                                alt="User"
                                                className="user-icon rounded-circle   "
                                            />
                                        </button>
                                        <input
                                            type="text"
                                            className="form-control search-input px-5 rounded-3"
                                            placeholder="🔎 Search Your opponents"
                                            aria-label="Search"
                                            aria-describedby="basic-addon1"
                                        />
                                    </div>
                                    <div className="col-2 ">
                                        <button className="btn location-btn bg-white rounded-3 text-black">
                                            <img
                                                src={require("../assets/—Pngtree—pin  location icon_3566349.png")}
                                                style={{ height: 25, width: 25 }}
                                                alt="Settings"
                                                className="settings-icon"
                                            />
                                            Choose your location
                                        </button>
                                    </div>
                                    <div className="col-2 d-flex justify-content-end">

                                        <button className="btn hoverbtn border-0  ">
                                            <i className="pi pi-bell text-white  p-1" ></i>
                                        </button>
                                        <div className="p-1">
                                            <Link to={"/login"}>
                                                <button className="btn border border-secondary text-white  " >
                                                    <i className="pi pi-sign-in " ></i>
                                                    <span> Sign in</span>
                                                </button>
                                            </Link>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex sidebar  align-items-cente " >

                            <ul className="d-flex text-secondary list-group-numbered m-0  ">
                                <li className="px-2 hoverbtn" >
                                    <button className="btn border-0 text-white  ">Home</button>
                                </li>
                                <li className="px-2 hoverbtn">
                                    <button className="btn border-0 text-white ">Shopping</button>
                                </li>
                                <li className="px-2 hoverbtn">
                                    <button className="btn border-0 text-white ">Matches Win</button>
                                </li>
                                <li className="px-2 hoverbtn">
                                    <button className="btn border-0 text-white ">Your Points</button>
                                </li>

                                <button className="btn border-0 text-white " >Score card </button >

                                <li className="px-2 hoverbtn">
                                    <button className="btn border-0 text-white">Manage Team</button>

                                </li>
                                <li className="px-2 hoverbtn">
                                    <button className="btn border-0 text-white ">Scheduled Matches</button>
                                </li>

                            </ul>


                        </div>
                    </div>


                </div>

            }




        </>
    )
}

export default Header;