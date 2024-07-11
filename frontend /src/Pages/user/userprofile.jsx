import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const UserProfile = () => {
    const token = localStorage.getItem('token')
    const [user, setUser] = useState({});
    const [isEdit, setIsEdit] = useState(false)
    const [editedUser, setEditedUser] = useState(user)

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:5050/user/getProfile");
            setUser(res.data.data);
            setEditedUser(res.data.data)
        } catch (err) {
            toast.error(err.response.data.message);
        }
    };



    const handleEdit = () => {
        setIsEdit(!isEdit);
    }

    const handleSave = async () => {
        try {
            axios.defaults.headers.common['Authorization'] = token
            const res = await axios.put("http://127.0.0.1:5050/user/updateProfile", editedUser)
            toast.success("Profile updated successfully!");


        } catch (err) {
            toast.error(err.response.data.message);
        }
    }


    return (
        <>

            <h3 className="py-3">Your Profile </h3>
            <br />
            <div className="row p-2  ">
                <div className="col-6 from-control ">
                    <span className="p-1 px-2  ">User name </span>
                    <input
                        className="form-control text-secondary mb-3"
                        type="text"
                        value={editedUser?.userName}
                        id="userName"
                        onChange={(e) => setEditedUser({ ...editedUser, userName: e.target.value })}
                        readOnly={!isEdit}
                    />
                    <span className="p-1 px-2   ">Email </span>
                    <input
                        className="form-control text-secondary mb-3"
                        type="text"
                        value={editedUser?.email}
                        id="email"
                        onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
                        readOnly={!isEdit} />
                    <span className="p-1 px-2   ">Phone No. </span>
                    <input
                        className="form-control text-secondary mb-3"
                        type="text"
                        value={editedUser?.phoneNumber}
                        id="phoneNumber"
                        onChange={(e) => setEditedUser({ ...editedUser, phoneNumber: e.target.value })}
                        readOnly={!isEdit} />
                    <span className="p-1 px-2   ">Address </span>
                    <input
                        className="form-control text-secondary mb-3"
                        type="text"
                        value={editedUser?.address}
                        id="address"
                        onChange={(e) => setEditedUser({ ...editedUser, address: e.target.value })}
                        readOnly={!isEdit} />
                </div>
                <div className="col-6">
                    <span className="p-1 px-2  s ">Gender</span>
                    <input
                        className="form-control text-secondary mb-3"
                        type="text"
                        value={"---"}
                        id="gender"
                        readOnly={!isEdit} />
                    <span className="p-1 px-2   ">Date of  </span>
                    <input
                        className="form-control text-secondary mb-3"
                        type="text"
                        value={"----"}
                        id="dateOfBirth"
                        readOnly={!isEdit} />
                    <span className="p-1 px-2   ">User name </span>
                    <input
                        className="form-control text-secondary mb-3"
                        type="text"
                        value={editedUser.userName}
                        id="userName"
                        readOnly={!isEdit} />
                    <span className="p-1 px-2   ">User name </span>
                    <input
                        className="form-control text-secondary mb-3"
                        type="text"
                        value={editedUser.userName}
                        id="userName"
                        readOnly={!isEdit} />
                </div>
            </div>
            <div className="d-flex justify-content-end  ">
                <div className="col-1 py-2 text-end px-2">
                    <button className="btn btn-primary" onClick={isEdit ? handleSave : handleEdit}>
                        {isEdit ? "Save" : "Edit"}
                    </button>
                </div>

            </div >

        </>
    )
}

export default UserProfile