import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const User_Team = () => {
    const [user, setUser] = useState({});
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
    return (

        <>
            <div className="container-fluid ">
                <div className="d-flex justify-content-center">
                    <div className="text-center ">
                        <div className="d-flex gap-5 ">
                            <div className="col-6">
                                <i className="pi pi-user border rounded-circle fs-1 mb-1 p-4 bg-light"></i>
                                <p className="fw-bold">{user.userName}</p></div>
                            <div className="col-6">
                                <img src={require("../../assets/bat.png")} style={{ width: 90 }} alt="" className="m-1 mt-0" />
                                <input type="file" />
                                <p className="fw-bold">{user.team || "--"}</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row py-4 border-bottom">
                    <div className="col-4 ">
                        <div className="d-flex justify-content-center"><p className="fw-bold mb-0">Post</p></div>
                        <div className="d-flex justify-content-center">
                            <p>{user.post || "--"}</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="d-flex justify-content-center"><p className="fw-bold mb-0">Friends</p></div>
                        <div className="d-flex justify-content-center">
                            <p> {user.friends || "--"}</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="d-flex justify-content-center"><p className="fw-bold mb-0">Teams</p></div>
                        <div className="d-flex justify-content-center">
                            <p>{user.teams || "--"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User_Team