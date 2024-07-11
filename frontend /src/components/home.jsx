import 'primeicons/primeicons.css';
import Goals from "./college/goals";
import { Link, useNavigate } from "react-router-dom";
import Tournament from "../Pages/tables/tournaments";
import Location from "../Pages/tables/location";
import Product from './shopping/product';
import { useState } from 'react';
import toast from "react-hot-toast";



const Home = () => {
    const navigate = useNavigate()

    const handleGame = (e) => {
        setTimeout(() => {
            navigate("/cricket/" + e)
        }, 1000);
    }

    return (
        <>
            <div className="container-fluid p-0 mb-5 position-relative  "  >
                <div className=" row-1 d-flex" >
                    <div className='col-11'>
                        <div>
                            <div
                                id="carouselExampleAutoplaying"
                                className="carousel slide"
                                data-bs-ride="carousel"
                            >
                                <div className="carousel-inner " style={{ height: 722 }}>
                                    <div className="carousel-item  ">
                                        <img
                                            src={require("../assets/football-67701_1280.jpg")}
                                            className="w-100"

                                            alt=""
                                            loading='lazy'
                                        />
                                    </div>
                                    <div className="carousel-item active ">
                                        <img
                                            src={require("../assets/sunset-5560658_1280.jpg")}
                                            className="w-100"

                                            alt=""
                                            loading='lazy'
                                        />
                                    </div>

                                    <div className="carousel-item  ">
                                        <img
                                            src={require("../assets/cricket-8444899_1280.jpg")}
                                            className="w-100"
                                            alt=""
                                            loading='lazy'
                                        />
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-1  '>
                        <div className='py-5 mb-1' style={{ background: "black" }}></div>
                        <div className="  z-1 position-absolute   " >
                            <div className=" sidebar-main h-100 border border-3 border-secondary "  >
                                <ul className=" list-group-numbered p-0 pe-3 h-100">
                                    <li >

                                        <button className="btn  border-0 rounded-circle hoverbtn1 border-secondary " onClick={() => handleGame("cricket")} >
                                            <img src={require("../assets/Remove background project.png")} className="" style={{ height: 45, width: 65 }} alt="" />
                                            Cricket</button>

                                    </li>
                                    <li>
                                        <button className="btn  border-0 rounded-circle hoverbtn1 border-secondary  " value="football" onClick={handleGame}>
                                            <img src={require("../assets/file (1).png")} className="" style={{ height: 45, width: 65 }} alt="" />
                                            Football</button>
                                    </li>
                                    <li>
                                        <button className="btn  border-0 rounded-circle hoverbtn1 border-secondary " value="badminton" onClick={handleGame}>
                                            <img src={require("../assets/file (3).png")} className="" style={{ height: 45, width: 65 }} alt="" />
                                            Badminton</button>
                                    </li>
                                    <li>
                                        <button className="btn  border-0 rounded-circle hoverbtn1 border-secondary " value="volleyball" onClick={handleGame}>
                                            <img src={require("../assets/file.png")} className="" style={{ height: 45, width: 65 }} alt="" />
                                            Volleyball</button>
                                    </li>
                                    <li>
                                        <button className="btn  border-0 rounded-circle hoverbtn1 border-secondary" value="tennis" onClick={handleGame}>
                                            <img src={require("../assets/file (2).png")} className="" style={{ height: 45, width: 65 }} alt="" />
                                            Tennis</button>
                                    </li>
                                    <li>
                                        <button className="btn  border-0 rounded-circle hoverbtn1 border-secondary " value="table tennis" onClick={handleGame}>
                                            <img src={require("../assets/file (4).png")} className="" style={{ height: 45, width: 65 }} alt="" />
                                            Table Tennis </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="position-absolute  shaded1 z-0   top-0 w-100" >
                </div>
                <div className="container-fluid position-absolute p-5 mt-5  top-0">
                    <div className="row">
                        <div className="col-6 p-5 d-flex align-items-center ">
                            <div className="row mt-5">
                                <h1 className="text-warning fw-bold po`absolute" style={{ fontSize: 70 }}>Register your <br /> team now </h1>
                                <div >
                                    <Link to={"/teamcontrol"}>
                                        <button className="border-0  btn btn-danger hoverbtn">Click here</button>
                                    </Link>

                                    <button className="btn border-0  text-white pb-0 hoverbtn" style={{ fontSize: 16 }}>learn more...</button><br />
                                    <br />
                                    <button className="border  btn text-white  hoverbtn">Search Nearest Ground</button>
                                    <br />
                                    <br />
                                    <button className='border  btn text-white  hoverbtn'>
                                        Register New Tournament
                                    </button>
                                </div>
                            </div>
                            <div className="row">
                            </div>
                        </div>
                        {/* <div className="col-6 p-5 justify-content-end d-flex  ">
                            <div className='card mt-5 bg-opacity-25 text-center text-white bg-opacity-25 bg-white border border-secondary rounded-4  p-5' style={
                                { width: 300 }

                            }>
                                <h3>
                                    Win <br />--    <br />loss <br />--
                                </h3>

                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="container-fluid ">
                <div className="container p-5 mt-5" style={{ backgroundColor: "#ffff" }}>
                    <h1 className="px-2 mt-5">Upcoming Tournaments</h1>
                    <Location />
                    <div className="row px-2 m-1">
                        <Tournament />
                    </div>
                </div>
            </div>
            <div className="container-fluid border-top">
                <div className="container p-5">
                    <h3>Get Exclusive Offers</h3>
                    <div className="row" >
                        <Product />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;

