import axios from "axios";
import { useEffect, useState } from "react"
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const JoinFootball = () => {
    const [team, setTeam] = useState([])

    useEffect(() => {
        setteam();
    })

    const setteam = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:5050/user/getTeam")
            setTeam(res.data)
        } catch (err) {
            toast.error("error in join team", err)
        }
    }

    return (<>
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
                            {
                                value.games === "football" && (
                                    <tbody className="border-1 border-secondary">
                                        <tr >
                                            <td className="px-2 fw-semibold"> #{index + 1}</td>
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
                                )
                            }</>
                    ))}
                </table >
            </div>
        </div>
    </>)
}

export default JoinFootball