import { Link, useNavigate } from "react-router-dom";
import Notification from "../Pages/user/notification";
import toast from "react-hot-toast";
import { useState } from "react";
const Pageheader = () => {
    const navigate = useNavigate();


    const search = (e) => {
        navigate("?q=" + e)

    }
    return (
        <>
            <div className="container-fluid box_shadow g-0 " >
                <div className=" w-100  z-1 text-white">
                    <div className="page_header border-bottom   "
                    >
                        <div className="container-fluid  text-white" >
                            <div className="row align-items-center ">
                                <div className="col-2  p-0 navbar-brand text-end ">
                                    <img src={require("../assets/final_logo_mode-removebg-preview.png")}
                                        alt=""
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
                                        <i className="pi pi-user p-1 text-black "></i>
                                    </Link>
                                    <button className="btn hoverbtn border-0 ">
                                        <i className="pi pi-cart-minus p-1 text-black" ></i>
                                    </button>
                                    <div className="dropdown ">
                                        < Notification />
                                    </div>
                                    <Link to={"/friendlist"}>
                                        <button className="btn hoverbtn border-0 ">
                                            <i className="pi pi-send p-1 text-black" ></i>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex sidebar  align-items-center page_sidebar ">

                        <ul className="d-flex text-secondary list-group-numbered  m-0  ">
                            <li className="px-2 hoverbtn" >
                                <Link to={"/"}>
                                    < button className="btn border-0 text-black" >Home</button>
                                </Link>

                            </li>
                            <li className="px-2 hoverbtn">
                                <Link to={"/shopping"}>
                                    < button className="btn border-0 text-black" >Shopping</button>
                                </Link>
                            </li>
                            <li className="px-2 hoverbtn">
                                <button className="btn border-0 text-black">Leaderboard</button>
                            </li>
                            <li className="px-2 hoverbtn">
                                <button className="btn border-0 text-black">Your Points</button>
                            </li>
                            <li className="px-2 hoverbtn">
                                <Link to={"/scorecard"}>
                                    <button className="btn border-0 text-black" >Score card </button >
                                </Link>

                            </li>
                            <li className="px-2 hoverbtn">
                                <Link to={"/team-management"}>
                                    <button className="btn border-0 text-black   ">Manage Team</button>
                                </Link>
                            </li>
                            <li className="px-2 hoverbtn">
                                <button className="btn border-0 text-black">Scheduled Matches</button>
                            </li>
                            <li className="px-2 hoverbtn">
                                <Link to={"/join-team"}>
                                    <button className="btn border-0 text-black   ">Join Team</button>
                                </Link>
                            </li>

                        </ul>


                    </div>
                </div>
            </div >
        </>)
}

export default Pageheader