import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AddPlayer = () => {
    const token = localStorage.getItem('token')

    const [list, setList] = useState([]);


    useEffect(() => {
        setFriends();
    }, [])

    const setFriends = async () => {
        const token = localStorage.getItem('token')
        try {
            axios.defaults.headers.common["Authorization"] = token;
            const res = await axios.get("http://127.0.0.1:5050/user/yourFriends");
            console.log(res.data.friend)
            setList([...res.data.friends, ...res.data.friend]);
        } catch (err) {
            toast.error("error in yourFriends", err)
        }
    }

    const handleAddPlayer = async (user_id) => {
        try {
            axios.defaults.headers.common["Authorization"] = token;
            const res = await axios.post("http://127.0.0.1:5050/user/addPlayer", { user_id })
        } catch (err) {
            toast.error("error in app player", err)
        }
    }

    return (
        <>
            <div className="rounded-3 border standerd-background">
                <div className="row-sm p-2 bg-warning rounded-1 rounded-bottom-0 text-center ">
                    <p className="fw-bold text-primary m-0 ">Players</p>
                </div>
                <div className="row-sm p-1 ">
                    <table className="w-100 ">
                        <input type="text" className="form-control" placeholder="Search" name="" id="" />
                        {list && list.map((value, index) => (
                            <tr key={index} className="  ">
                                <td className="p-1">
                                    <div className="row-sm d-flex p-1 bg-light rounded-2 ">
                                        <div className="col-9 fw-bold">{value.request?.userName || value.user_id?.userName} </div>
                                        <div className="col-3 text-end px-2">
                                            {value.friend && <button className="btn btn-primary btn-sm"
                                                onClick={() => handleAddPlayer(value.request._id || value.user_id?._id)}>Add
                                            </button>}
                                            {/* {(value.friend) && (value.friend.friends.status == "1") && <button className="btn btn-primary btn-sm"
                                                onClick={() => handleAddPlayer(value.request._id || value.user_id?._id)}>Remove
                                            </button>} */}
                                        </div>
                                    </div>

                                </td>

                            </tr>
                        ))}

                    </table>
                </div>
            </div>
        </>
    )
}
export default AddPlayer