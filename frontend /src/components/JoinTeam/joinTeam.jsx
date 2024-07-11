import { useEffect, useState } from "react"
import JoinCricket from "./join_cricket"
import JoinFootball from "./join_football"
import axios from "axios"
import toast from "react-hot-toast"
import { Link } from "react-router-dom"

const JoinTeam = () => {
    const [team, setTeam] = useState([])


    const setteam = async (e) => {
        e.preventDefault();
        const game = `${e.target.value}`
        console.log(game)
        try {
            const res = await axios.get("http://127.0.0.1:5050/user/getTeams/" + game)
            setTeam(res.data)
        } catch (err) {
            toast.error("error in join team", err)
        }
    }

    return (<>
        <div className="container p-2">
            <h2>Select Team You Want To Join</h2>
            <div className="row-sm ">
                <button className="btn border me-3" value={"cricket"} onClick={setteam} >
                    Cricket
                </button>
                <button className="btn border me-3" value={"football"} onClick={setteam}>
                    Football
                </button>
                <button className="btn border me-3" value={"volleyball"} onClick={setteam}>
                    Volleyball
                </button>
                <button className="btn border me-3" value={"badminton"} onClick={setteam} >
                    Badminton
                </button>
                <button className="btn border me-3" value={"tennis"} onClick={setteam}>
                    Tennis
                </button>
            </div>
            <div className="row-sm ">
                <div className="container">
                    <div className="row p-3">

                        <table className="my-3 ">
                            <thead className="border-1 border-body-tertiary">
                                <tr className="bg-">
                                    <th style={{ width: 100 }}>Sr No.</th>
                                    <th>Team name</th>
                                    <th>Rank</th>
                                    <th>Run Rate</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>



                            {team && team.map((value, index) => (
                                <>
                                    <tbody className="border-1 border-secondary" key={index}>
                                        <tr >
                                            <td className="px-2 fw-semibold">{index + 1} </td>
                                            <td>
                                                <div className=" row p-2 gap-1 ">
                                                    <div className="col-1 p-0 text-center justify-content-center d-flex">
                                                        {" "}
                                                        <img
                                                            src="kjfbxjkv"
                                                            style={{ width: 40 }}
                                                            alt="none"
                                                        />
                                                    </div>
                                                    <div className="col text-left ">
                                                        <p className="fw-bold m-0">{value.teamName}</p>
                                                        <span className="px-1 border-end ps-0">Rating</span>{" "}
                                                        <span>⭐️⭐️⭐️⭐️⭐️</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="row  d-flex gap-1">
                                                    <div className="col">
                                                        <span>
                                                            <span>
                                                                <strong>{index + 1}</strong>
                                                            </span>{" "}
                                                            Out of 312
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span>12.5</span>
                                            </td>
                                            <td>
                                                <Link to={"/"}>
                                                    <button className="btn bg-warning">Join</button>
                                                </Link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </>
                            ))}
                            {!team && (
                                <>
                                    Loading
                                </>
                            )}



                        </table >
                    </div>
                </div>

            </div>
        </div >
    </>)
}

export default JoinTeam