import axios from "axios";
import { useEffect, useState } from "react";
import 'primeicons/primeicons.css';
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import UserProfile from "./userprofile";
import FriendList from "./friendlist";
import Request from "./request";
import User_Team from "./users_team";
import FindFriend from "./findfriends";

const Profile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [showProfile, setShowProfile] = useState(false);
    const [showRequest, setShowRequest] = useState(false);
    const [showFriends, setShowFriends] = useState(false);
    const [showUser_and_team, setshowUser_and_team] = useState(true);
    const [findfriend, setfindfriend] = useState(false);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        try {
            axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
            const res = await axios.get("http://127.0.0.1:5050/user/getProfile");
            setUser(res.data.data);
        } catch (err) {
            toast.error(err.response.data.message);

        }
    };
    const handleLogOut = () => {
        navigate("/home")
        window.localStorage.removeItem("token")
    }
    const handleShowProfile = () => {
        setShowRequest(false)
        setShowFriends(false)
        setshowUser_and_team(false)
        setfindfriend(false)
        setShowProfile(!showProfile);
    };
    const handleRequest = () => {
        setShowProfile(false)
        setShowFriends(false)
        setshowUser_and_team(false)
        setfindfriend(false)
        setShowRequest(!showRequest);
    };
    const handleFriends = () => {
        setShowRequest(false)
        setShowProfile(false)
        setshowUser_and_team(false)
        setfindfriend(false)
        setShowFriends(!showFriends)
    }
    const handleuser = () => {
        setShowRequest(false)
        setShowFriends(false)
        setShowProfile(false)
        setfindfriend(false)
        setshowUser_and_team(!showUser_and_team,)
    }
    const handFindFriend = () => {
        setShowRequest(false)
        setShowFriends(false)
        setShowProfile(false)
        setshowUser_and_team(false)
        setfindfriend(!findfriend,)
    }

    return (
        <>
            <div className="container-fluid ">
                <div className="row p-2">
                    <div className="col-3 p-0  box_shadow " style={{ background: "#f5f5f5" }}>
                        <div className="row p-4 text-center  rounded border-bottom-0 ">
                            <i onMouseOver={handleuser} className="pi pi-user  fs-1 p-3 " ></i>
                            <br />
                            <p className="m-0 fw-medium mt-2 ">{user.userName}</p>
                            <p className="text-secondary ">{user.email}</p>
                        </div>
                        <div className="border-top p-3">
                            <ul className=" list-group-numbered text-start p-1 ps-2 ">
                                <li className="d-flex gap-1 border-bottom p-2   ">
                                    <i className="pi pi-user-edit fs-4"></i>
                                    <button className="border-0 " style={{ background: "#f5f5f5" }} onClick={handleShowProfile}>Your profile</button>
                                </li>
                                <li className="d-flex gap-1 border-bottom p-2   ">
                                    <i className="pi pi-users fs-4"></i>
                                    <button className="border-0 " onClick={handleFriends} style={{ background: "#f5f5f5" }}>Friend list </button>
                                </li>
                                <li className="d-flex gap-1 border-bottom p-2   ">
                                    <i className="pi pi-bell text-warning fs-4"></i>
                                    <button className="border-0 " onClick={handleRequest} style={{ background: "#f5f5f5" }}>Requests</button>
                                </li>
                                <li className="d-flex gap-1 border-bottom p-2   ">
                                    <i className="pi pi-users fs-4"></i>
                                    <button className="border-0 " onClick={handFindFriend} style={{ background: "#f5f5f5" }}>Find friends</button>
                                </li>
                                <li className="d-flex gap-1 border-bottom p-2   ">
                                    <img src={require("../../assets/achievement.png")} style={{ width: 27 }} alt="" />
                                    <button className="border-0 " style={{ background: "#f5f5f5" }}>Achievements</button>
                                </li>
                                <li className="d-flex gap-1 p-3   ">
                                    <i className="pi pi-sign-out fs-4"></i>
                                    <button className="border-0 " style={{ background: "#f5f5f5" }} onClick={handleLogOut}>Log out</button>
                                </li>
                            </ul>
                        </div>


                    </div>
                    <div className="col-9  " >

                        <div className=" rounded box_shadow p-3" style={{ background: "#f5f5f5", height: 523 }} >

                            {showUser_and_team && <User_Team />}
                            {showProfile && <UserProfile />}
                            {showRequest && <Request />}
                            {showFriends && <FriendList />}
                            {findfriend && <FindFriend />}
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Profile;
