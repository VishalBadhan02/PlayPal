import axios from "axios"
import { useEffect, useState } from "react"
import Terms from "../components/tournamnet_features/terms";

const TournamentControl = () => {

    const [value, setValue] = useState();
    const id = window.location.pathname.split("/tournamnet-control/")[1];
    localStorage.setItem("tournament_id", id)

    useEffect(() => {
        setTournament()
    }, [])

    const setTournament = async () => {
        const res = await axios.get("http://127.0.0.1:5050/user/getTournamnets/" + id);
        setValue(res.data)


    }
    return (
        <>
            {value && (
                <div className="container-sm p-5 py-2 ">
                    <div className="d-flex align-items-center border p-4 bg-danger rounded-3 border-info">
                        <div className="col-2">
                            <img src={require("../assets/1712111636814_kZWMpzsgTYPr.jpg")} style={{
                                height: 150,
                                width: 180
                            }}
                                className="border rounded  p-0  "
                                alt="" />
                        </div>
                        <div className="col-7 text-white py-1">
                            <h3 className="m-0">{value.name}</h3>
                            <p>Address:</p>
                            <hr className="m-0" />
                            <p className="m-0">{value.start_date} to {value.end_date}</p>
                            <p>Contact:{value.contact} </p>
                        </div>
                        <div className="col-3 p-4 text-black ">
                            <div className="row-sm gap-2 d-flex">
                                <div className="col-6 border-warning border  text-center p-3 bg-info rounded">
                                    <h3 className="fw-semibold">{value.total_team_participation}</h3>
                                    <p className="m-0">Total match </p>
                                </div>
                                <div className="col-6 border-warning border bg-info rounded text-center p-3">
                                    <h3 className="fw-semibold">{value.minimum_team}</h3>
                                    <p className="m-0">Teams </p>
                                </div>
                            </div>
                            <div className="row ps-2  py-1 ">
                                <button className="btn bg-warning form-control">
                                    Join now
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="py-1 pe-1  d-flex gap-1  ">
                        <div className="col-9 bg-light pt-0 border border-info rounded p-2 pb-0 px-0">
                            <div className="nav-tournament bg-info py-1 px-2">
                                <ul className=" list-group-numbered m-0 px-2 d-flex justify-content-evenly text-white gap-4">
                                    <li><button className="btn p-0 border-0 text-white fw-semibold">Info</button></li>
                                    <li><button className="btn p-0 border-0 text-white fw-semibold">Leaderboard</button></li>
                                    <li><button className="btn p-0 border-0 text-white fw-semibold">Fixtures</button></li>
                                    <li><button className="btn p-0 border-0 text-white fw-semibold">Point Table</button></li>
                                    <li><button className="btn p-0 border-0 text-white fw-semibold">Sponsors</button></li>
                                    <li><button className="btn p-0 border-0 text-white fw-semibold">History</button></li>
                                    <li><button className="btn p-0 border-0 text-white fw-semibold">About us</button></li>
                                </ul>
                            </div>
                            <div className="row-sm  bg-light  p-1">
                                <Terms />
                            </div>
                        </div>
                        <div className="col-3 bg-light border border-warning rounded p-2 pt-0 pb-0 px-0">
                            <div className="row-sm bg-warning text-white text-center   ">
                                <div className="row-sm bg-warning py-1 px-2">
                                    <ul className=" list-group-numbered  list-group">
                                        <li><button className="btn p-0 text-white fw-semibold">Teams</button></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row-sm bg-light  p-1">
                                <div className="d-flex bg-secondary bg-opacity-25 p-2 rounded-2 gap-2 ">
                                    <img src={require("../assets/bat.png")} style={{ width: 45 }} alt="" />
                                    <span className="fw-bold py-1">Rebels</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}

export default TournamentControl