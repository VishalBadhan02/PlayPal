import AuthLogin from "../layouts/authLogin";
import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import Home from "./home";



const Login = () => {
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const navigate = useNavigate();
    const redirect = "";
    const [isLogged, setLog] = useState(false);


    const handleLogin = async (e) => {
        e.preventDefault();

        const res = await axios.post("http://127.0.0.1:5050/login", {
            email, password
        })

        if (res.data === "Login Successful") {
            alert("Login Successful")
            setLog(true)
            navigate('/');
        }

    }

    return (
        <>
            <AuthLogin>
                <div className="d-flex justify-content-center ">
                    <div className="col-4">
                        <main className="form-signin w-100 m-auto">
                            <form className="text-center" onSubmit={handleLogin} method="POST">

                                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                                <div className="form-floating">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="name@example.com"
                                        onKeyUp={(e) => setemail(e.target.value)}
                                    />
                                    <label htmlFor="floatingInput">Emaila address</label>
                                </div>
                                <div className="form-floating">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="Password"
                                        placeholder="Password"
                                        onKeyUp={(e) => setpassword(e.target.value)}
                                    />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                                <div className="form-check text-start my-3">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue="remember-me"
                                        id="flexCheckDefault"
                                    />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Remember me
                                    </label>
                                </div>
                                <button className="btn btn-primary w-100 py-2 mb-5" type="submit">
                                    Sign in
                                </button>

                            </form>
                        </main>
                    </div>
                </div>


            </AuthLogin>
        </>
    )
}

export default Login;