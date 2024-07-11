import axios from "axios";
import { useState } from "react"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Forgot = () => {
    const [value, setValue] = useState()
    const navigate = useNavigate()
    const handleForgot = async (e) => {
        e.preventDefault();

        const res = await axios.put("http://127.0.0.1:5050/auth/setpassword", value)
        if (res.data.status === true) {
            toast.success("otp sent to your mail")
            navigate("/otpverify")      
        }

    }
    return (
        <>
            <div className="container-fluid">
                <div className="row p-2 d-flex justify-content-center bg-secondary bg-opacity-25">
                    <div className="col-4 py-4 text-center border border-secondary border-opacity-50 bg-light rounded-3">
                        <h3>Find Your Account</h3>
                        <hr />
                        <p>Please enter your email address or mobile number to search for your account.</p>
                        <input type="text" className="form-control" name="" id="" placeholder="Enter email or mobile number "
                            onKeyUp={(e) => setValue(e.target.value)}
                        />
                        <hr />
                        <div className="text-end d-flex gap-2">
                            <button className="form-control ">Back</button>
                            <button className="form-control bg-info" onClick={handleForgot}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Forgot