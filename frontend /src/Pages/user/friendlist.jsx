import axios from "axios";
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import ChatBox from "./chatbox";
import { Link, Navigate } from "react-router-dom";

const FriendList = () => {
    const [list, setList] = useState([])
    const [chat, setchat] = useState(false)
    const token = localStorage.getItem('token')

    useEffect(() => {
        setFriends();
    }, [])

    const setFriends = async () => {
        try {
            axios.defaults.headers.common["Authorization"] = token;
            const res = await axios.get("http://127.0.0.1:5050/user/yourFriends");
            setList([...res.data.friends, ...res.data.friend]);
        } catch (err) {
            toast.error("error in yourFriends", err)
        }
    }

    const hnadleCancel = async (user_id) => {
        try {
            const res = await axios.delete("http://127.0.0.1:5050/user/deleteRequest", {
                data: { user_id }
            })
        } catch (err) {
            toast.error(err.response.data.message);
        }
    }

    const handelchat = (friendId) => {
        setchat(friendId)
    }
    return (
        <>
            <div className="container-fluid" >
                <div className="d-flex justify-content-center px-2 gap-2 " style={{ height: 500 }}>
                    <div className="col-4 p-3 py-1 border rounded-2 border-warning">
                        <div className="row-sm d-flex py-1">
                            <div className="col-6 text-center p-2 border-end    ">Friends</div>
                            <div className="col-6 text-center p-2">Teams</div>
                        </div>
                        <input type="text" className="form-control" placeholder="🔎 Search your friend" name="" id="" />
                        <div className="row p-2      ">
                            <table className="bg-white rounded-2">
                                <tbody  >
                                    {list && list.map((value, index) => (
                                        <tr key={index} className="" >
                                            {value.status == 1 && (
                                                <div className="d-flex px-2 row-sm">
                                                    <div className="col-2">
                                                        <td className="p-1" style={{ width: 40 }}>
                                                            {" "}
                                                            <img
                                                                src={require("../../assets/1711859084821_kz1JoJrA8g7c.jpg")}
                                                                style={{ width: 35 }}
                                                                alt="pi pi-user"
                                                                className="rounded-circle border border-1 border-secondary  "

                                                            />
                                                        </td>
                                                    </div>
                                                    <div className="col-7">
                                                        <td className=" p-1 align-items-center d-flex " >
                                                            <button className="btn border-0">
                                                                <span className="fw-medium" onClick={() => handelchat(value.request._id || value.user_id?._id)}>{value.request?.userName || value.user_id?.userName}</span>
                                                            </button>

                                                        </td>
                                                    </div>
                                                    <div className="col-3 d-flex justify-content-center ">
                                                        <td className="text-end d-flex align-items-center">
                                                            <button className="btn btn-primary btn-sm fw-semibold border-0" style={{ fontSize: 12, background: "#FF0833" }} onClick={() => hnadleCancel(value.request)} >UnFreind</button>
                                                        </td>
                                                    </div>


                                                </div>
                                            )

                                            }

                                        </tr>
                                    ))}
                                    {!list && (
                                        <tr>
                                            <td colSpan="3" className="text-center">
                                                Loading friends...
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>


                    </div>
                    {chat && <ChatBox friendId={chat} />}
                </div>
            </div>



        </>
    )
}

export default FriendList