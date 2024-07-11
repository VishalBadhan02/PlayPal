import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();
    const [firstName, setfirstName] = useState();
    const [lastName, setlastName] = useState();
    const [userName, setuserName] = useState();
    const [email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [address, setaddress] = useState();
    const [password, setpassword] = useState();
    const [isLoading, setIsLoading] = useState(false);



    const handleRegister = async (event) => {
        event.preventDefault();
        setIsLoading(true)
        const userData = {
            firstName,
            lastName,
            userName,
            email,
            phoneNumber,
            address,
            password,
            status: "active"
        }


        const res = await axios.post("http://127.0.0.1:5050/auth/register", userData);
        if (res.data.status === true) {
            toast.success("OTP Sent")
            return navigate('/otpverify/' + res.data.data.token)
        }
        return toast.error("Email already exists")
    }
    return (
        <>
            <form className="d-flex justify-content-center" >
                <div className="col-7 bg-tertiary">
                    <div className="form">

                        <div className="row">
                            <div className="col-6">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    First Name
                                </label>
                                <br />
                                <input type="text" className="" id="firstName"
                                    onKeyUp={(e) => setfirstName(e.target.value)}
                                />
                            </div>
                            <div className="col-6">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Last Name
                                </label>
                                <br />
                                <input type="text" className="" id="lastName"
                                    onKeyUp={(e) => setlastName(e.target.value)} />
                            </div>
                        </div>
                        <br />
                        <label htmlFor="exampleFormControlInput1" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="Password"
                            placeholder="Password"
                            onKeyUp={(e) => setpassword(e.target.value)}
                        />
                        <br />
                        <label htmlFor="exampleFormControlInput1" className="form-label">
                            User Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="userName"
                            placeholder="User Name"
                            onKeyUp={(e) => setuserName(e.target.value)}
                        />
                        <br />
                        <label htmlFor="exampleFormControlInput1" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="name@example.com"
                            onKeyUp={(e) => setEmail(e.target.value)}
                        />
                        <br />
                        <label htmlFor="exampleFormControlInput1" className="form-label">
                            Phone no.
                        </label>
                        <input
                            type="tel"
                            className="form-control"
                            id="phoneNumber"
                            placeholder="Phone No."
                            onKeyUp={(e) => setPhoneNumber(e.target.value)}
                        />
                        <br />

                        <label htmlFor="exampleFormControlInput1" className="form-label">
                            Address
                        </label>
                        <input
                            type="address"
                            className="form-control"
                            id="address"
                            placeholder="Address"
                            onKeyUp={(e) => setaddress(e.target.value)}
                        />
                        <br />
                        <div className="row">
                            <div className="col-md-5">
                                <label htmlFor="country" className="form-label">
                                    Country
                                </label>
                                <select className="form-select" id="country">
                                    <option value="">Choose...</option>
                                    <option>United States</option>
                                </select>
                                <div className="invalid-feedback">Please select a valid country.</div>
                            </div>
                            <div className="col-md-5">
                                <label htmlFor="state" className="form-label">
                                    State
                                </label>
                                <select className="form-select" id="state">
                                    <option value="">Choose...</option>
                                    <option>California</option>
                                </select>
                                <div className="invalid-feedback">Please provide a valid state.</div>
                            </div>
                        </div>
                        <hr className="my-4" />
                        {isLoading &&
                            <button className="w-100 btn btn-primary btn-lg" type="submit" onClick={handleRegister}
                            >
                                Continue to checkout
                            </button>
                        }
                        {!isLoading &&
                            <div class="loader">
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                                <div class="circle"></div>
                            </div>
                        }
                    </div>
                </div>
            </form>
        </>
    )
}

export default Register