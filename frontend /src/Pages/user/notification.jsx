import axios from "axios"
import { useEffect, useState } from "react"

const Notification = () => {
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
    return (
        <>
            <button
                className="btn hoverbtn border-0 "
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <i className="pi pi-bell  text-warning p-1" ></i>
            </button>
            <div className="dropdown-menu dropdown-menu-end p-3 m-3" style={{ width: 500 }}>
                <div className="row border-bottom">
                    <div className="col-10">
                        <h5 className="px-2">Notifications</h5>
                    </div>
                    <div className="col-2 text-end">
                        <i className="pi-ellipsis-v pi"></i>
                    </div>
                </div>


                <div className="py-2">
                    <div className=" gap-2 py-1" >
                        {request && request.map((value, index) => (
                            <div key={index}>
                                <div className="d-flex gap-2">
                                    <div className="col-10 d-flex gap-2">
                                        <button className="btn bg-light rounded-circle border mb-2">
                                            <i className="pi pi-user fs-5  "></i>
                                        </button>
                                        <p><strong>{value.request.userName} </strong> send you friend request</p>
                                    </div>
                                    <div className="col-2">
                                        <button className="btn btn-sm btn-info">Accept</button>
                                    </div>



                                </div>

                            </div>
                        ))}



                    </div>

                </div>


            </div >
        </>
    )
}

export default Notification