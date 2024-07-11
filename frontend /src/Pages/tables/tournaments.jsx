import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Tournament = () => {
    const [detail, setdetail] = useState([])


    useEffect(() => {
        settournament()
    }, [])

    const settournament = async () => {
        const res = await axios.get("http://127.0.0.1:5050/user/gettournament")
        setdetail(res.data)
    }

    return (
        <>
            <table className="my-3 ">
                <thead className="border-1 border-body-tertiary">
                    <tr className="bg-">
                        <th>Sr No.</th>
                        <th>Tournament name</th>
                        <th>Ranking</th>
                        <th>Starting from</th>
                        <th>Last Date</th>
                        <th></th>
                    </tr>
                </thead>
                {detail && detail.map((tournamet, index) => (
                    <tbody className="border-1 border-secondary" key={index}>
                        <tr >
                            <td className="px-2 fw-semibold"> #{index + 1}</td>
                            <td>
                                <div className=" row p-2 gap-1 ">
                                    <div className="col-1 p-0 text-center justify-content-center d-flex">
                                        {" "}
                                        <img
                                            src={tournamet.img}
                                            style={{ width: 40 }}
                                            alt="none"
                                        />
                                    </div>
                                    <div className="col text-left ">
                                        <p className="fw-bold m-0">{tournamet.name}</p>
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
                                                <strong>{tournamet.rank}</strong>
                                            </span>{" "}
                                            Out of 312
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span>{new Date(tournamet.start_date).toLocaleDateString()}</span>
                            </td>
                            <td>
                                <span>{new Date(tournamet.end_date).toLocaleDateString()}</span>
                            </td>
                            <td>
                                <Link to={"/tournamnet-control/" + tournamet._id}>
                                    <button className="btn bg-warning">Join</button>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                ))}


            </table>
        </>
    )
}

export default Tournament