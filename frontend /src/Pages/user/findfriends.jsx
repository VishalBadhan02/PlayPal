import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const FindFriend = () => {
    const token = localStorage.getItem("token");
    const [list, setList] = useState([]);


    useEffect(() => {
        setfriend();
    }, []);



    const setfriend = async () => {
        try {
            axios.defaults.headers.common["Authorization"] = token;
            const res = await axios.get("http://127.0.0.1:5050/user/getFriend");
            setList(res.data);
        } catch (err) {
            toast.error(err.response.data.message);
        }
    };

    const HandleAddFriend = async (user_id) => {
        localStorage.setItem("request", user_id)
        try {
            axios.defaults.headers.common["Authorization"] = token;
            const res = await axios.post("http://127.0.0.1:5050/user/friendRequest", {
                request: user_id,
            });


        } catch (err) {
            toast.error(err.response.data.message);
        }
    };

    const HandleUndoFriend = async (user_id) => {
        try {
            const res = await axios.delete("http://127.0.0.1:5050/user/deleteRequest", {
                data: { user_id }
            })
        } catch (err) {
            toast.error("Error in deleting request", err.response.data.message);
        }
    }

    const handleUnfriend = async (user_id) => {
        console.log(user_id)
        try {
            const res = await axios.delete("http://127.0.0.1:5050/user/deleteRequest", {
                data: { user_id }
            })
        } catch (err) {
            toast.error("error in un friend", err)
        }
    }

    return (
        <>
            <div className="container-fluid ">
                <div className="row ">
                    <table>
                        <tbody className="bg-light ">
                            {list &&
                                list.map((value, index) => (
                                    <tr key={index}>
                                        <td>
                                            <div className=" row p-2  ">
                                                <div className="col-1 p-0 text-center justify-content-center d-flex">
                                                    {" "}
                                                    <img
                                                        src={require("../../assets/1711859084821_kz1JoJrA8g7c.jpg")}
                                                        style={{ width: 40 }}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="col text-left ">
                                                    <p className="m-0 "><strong>{value.userName}</strong></p>
                                                    <span className="">{value.team || `Invite`} </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-end">
                                            {value.friends == null &&
                                                <button
                                                    className="btn bg-primary text-white fw-bold btn-sm"
                                                    onClick={() => HandleAddFriend(value._id)}
                                                >
                                                    Add Friend
                                                </button>
                                            }

                                            {value.friends && value.friends?.status == 0 && <button
                                                className="btn bg-primary text-white fw-bold btn-sm"
                                                onClick={() => HandleUndoFriend(value._id)}
                                            >
                                                Undo
                                            </button>
                                            }

                                            {value.friends && value.friends?.status == 1 &&
                                                (<>
                                                    <button
                                                        className="btn  text-white fw-bold btn-sm"
                                                        onClick={() => handleUnfriend(value._id)} style={{ background: "#FF0833" }}
                                                    >
                                                        UnFriend
                                                    </button></>)
                                            }
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default FindFriend;
