import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import "../ForPhone/phone.css"
import { Link } from "react-router-dom";

const GamesForPhone = () => {
    const [link, setLink] = useState();

    useEffect(() => {
        setSideBar()
    }, [])

    const setSideBar = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:5050/links/sideBar")
            const games_link = res.data.find(item => item.games_link).games_link;
            setLink(games_link);
        } catch (err) {
            toast.error("Error in side bar", err)
        }
    }

    return (
        <>
            <div className="container p-0 position-relative">
                <div className="">
                    <img src={require("../../../assets/Firefly sports 8882.jpg")}
                        className="w-100  "
                        alt="" style={{ height: 600 }} />

                </div>
                <div className="shaded position-absolute top-0"></div>

                <div className="container-fluid position-absolute  top-0">
                    <div className="row phonebtn py-2">
                        <div className="col-6 text-center  ">
                            <button className="btn btn style text-white fw-medium" style={{ fontSize: 18 }}>Team Register</button>
                        </div>
                        <div className="col-6 text-center">
                            <Link to={"/tournaments"}>
                                <button className="btn text-white" style={{ fontSize: 18 }}>
                                    Touraments
                                </button>
                            </Link>
                        </div>
                        <div className="col-6 text-center">
                            <Link to={"/tournaments"}>
                                <button className="btn text-white" style={{ fontSize: 18 }}>
                                    Join Team
                                </button>
                            </Link>
                        </div>
                        <div className="col-6 text-center">
                            <Link to={"/tournaments"}>
                                <button className="btn text-white" style={{ fontSize: 18 }}>
                                    Managae team
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="row p-2  pt-4">
                        {link && link.map((value, index) =>
                            <div key={index} className="text-center  mb-2 ">
                                <div className=" bg-black bg-transparent shadow-lg border border-secondary border-opacity-75 rounded-5" >
                                    <p className="p-2 m-0 text-white fw-medium" style={{ letterSpacing: 3 }}>{value.name}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </>
    )
}

export default GamesForPhone