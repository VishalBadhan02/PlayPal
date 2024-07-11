import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Request = () => {
    const [request, setRequest] = useState([])

    const token = localStorage.getItem('token')
    useEffect(() => {
        setNotification();
    }, [])

    const setNotification = async () => {
        axios.defaults.headers.common["Authorization"] = token;
        const res = await axios.get("http://127.0.0.1:5050/user/getNotification")
        setRequest(res.data);
    }

    const hnadleApproval = async (approve) => {
        const res = await axios.put("http://127.0.0.1:5050/user/approvalRequest", { approve })
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

    return (<>
        <div className="row p-2">
            <table>
                <tbody className="bg-light  ">
                    {request && request.map((value, index) => (
                        <tr>
                            <td>

                                <div className=" row p-2  " key={index}>
                                    <div className="col-1 p-0 text-center justify-content-center d-flex">
                                        {" "}
                                        <img
                                            src={require("../../assets/1711859084821_kz1JoJrA8g7c.jpg")}
                                            style={{ width: 40 }}
                                            alt=""
                                        />
                                    </div>
                                    <div className="col text-left ">
                                        <p className=" ">You have a friend requiest from <strong>{value.user_id.userName}</strong></p>

                                    </div>
                                </div>
                            </td>
                            <td className="text-end">
                                {value.status == 1 && (<button className="btn text-white fw-bold btn-sm" style={{ background: "#FF0833" }}>Friends</button>)}
                                {value.status == 0 && (
                                    <div>
                                        <button className="btn bg-primary text-white fw-bold btn-sm me-1  " onClick={() => hnadleApproval(value._id)}>Accept</button>
                                        <button className="btn bg-primary text-white fw-bold btn-sm" onClick={() => hnadleCancel(value.request)}>Cancel</button>
                                    </div>)}
                            </td>

                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    </>)
}
export default Request