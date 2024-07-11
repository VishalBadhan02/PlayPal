import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const OtpVerification = () => {
    const navigate = useNavigate();
    const [otp, setoneTimePassword] = useState();

    const Otphandle = async (e) => {
        e.preventDefault();
        axios.defaults.headers.common['Authorization'] = window.location?.pathname?.split('/otpverify/')[1];
        const res = await axios.post("http://127.0.0.1:5050/auth/otpverify", { otp })
        if (res.data.status === true) {
            localStorage.setItem("token", res.data.data.token)
            toast.success("Otp verified")
            return navigate("/");
        }
        return toast.error("OTP verification failed. Please try again");
    }

    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="col-3">
                    <div className="container">
                        <form className="form">
                            <input
                                required=""
                                className=" input"
                                type="oneTimePassword"
                                name="oneTimePassword"
                                id="oneTimePassword"
                                placeholder="Verify-otp"
                                onKeyUp={(e) => setoneTimePassword(e.target.value)}
                            />
                            <button className="login-button " onClick={Otphandle}>Verify OTP</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OtpVerification;