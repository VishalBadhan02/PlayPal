import { Link } from "react-router-dom";
import AuthFooter from "../layouts/authFooter";

const Footer = () => {
    return (
        <>
            <div className="container-fluid p-0" style={{ backgroundColor: "#f5f5f5" }}>
                <div className="row  m-1 p-0 ">
                    <div className="col-3 p-4  bg-light ">
                        <img src={require("../assets/final_logo_mode-removebg-preview.png")}
                            style={{ width: 250, height: 90 }} alt="" /> <br />
                        <div className="py-1 " style={{ fontFamily: "verdana", fontSize: 14 }}>
                            Ultimate platform for connecting sports enthusiasts across differnt areas
                        </div>

                    </div>
                    <div className="col-3 p-3 ">
                        <p className="fs-3 fw-bold">Quick links </p>
                        <ul className="list-group-numbered ps-1">
                            <Link to={"/home"} className="text-black text-decoration-none "><li className="py-2">
                                <i className="pi pi-home pe-1"></i>
                                Home</li></Link>
                            <Link to={"/about"} className="text-black text-decoration-none" ><li className="py-2">
                                <i className="pi pi-info-circle pe-1"></i>
                                About us</li></Link>
                            <Link to={"/home"} className="text-black text-decoration-none"><li className="py-2">
                                <i className="pi pi-book pe-1"></i>
                                Terms and conditions</li></Link>
                            <Link to={"/home"} className="text-black text-decoration-none"  ><li className="py-2">
                                <i className="pi pi-receipt pe-1"></i>
                                Privacy policy </li></Link>
                        </ul>
                    </div>
                    <div className="col-3 p-3  ">
                        <p className="fs-3 fw-bold">Social </p>
                        <ul className="list-group-numbered ps-1">
                            <Link to={"/home"} className="text-black text-decoration-none "><li className="py-2">
                                <i className="pi pi-facebook"></i> Facebook</li></Link>
                            <Link to={"/home"} className="text-black text-decoration-none" ><li className="py-2"><i className="pi pi-instagram"></i> Instagram</li></Link>
                            <Link to={"/home"} className="text-black text-decoration-none"><li className="py-2"><i className="pi pi-twitter"></i> Twitter</li></Link>
                            <Link to={"/home"} className="text-black text-decoration-none"  ><li className="py-2"><i className="pi pi-linkedin"></i> Linkedin</li></Link>
                        </ul>
                    </div>
                    <div className="col-3 p-3 ">
                        <p className="fs-3 fw-bold">Contact us </p>
                        <ul className="list-group-numbered ps-1">
                            <Link to={"/home"} className="text-black text-decoration-none "><li className="py-2">
                                <i className="pi pi-envelope"></i> Email</li></Link>
                            <Link to={"/home"} className="text-black text-decoration-none" ><li className="py-2"><i className="pi pi-phone "></i> Phone No.</li></Link>
                            <Link to={"/home"} className="text-black text-decoration-none"><li className="py-2"><i className="pi pi-map-marker"></i> Location</li></Link>
                            <Link to={"/feedback"} className="text-black text-decoration-none"  ><li className="py-2"><i className="pi pi-comment"></i> Feedback</li></Link>
                        </ul>
                    </div>

                </div>
                <AuthFooter />
            </div>

        </>
    )
}

export default Footer;