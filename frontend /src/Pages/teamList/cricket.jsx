import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { Link } from "react-router-dom"
import Matches from "../matches"
import DatePicker from "react-datepicker"

const Cricket = () => {
    const [team, setTeam] = useState([])
    const [modal, setmodal] = useState(false)
    const [date, setDate] = useState();

    useEffect(() => {
        setCricket()
    }, [])

    const setCricket = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:5050/user/getTeam")
            setTeam(res.data)
        } catch (err) {
            toast.error("error in cricket", err)
        }
    }

    const handleModal = () => {
        try {
            setmodal(!modal)
        } catch (err) {
            toast.error("error in modal", err)
        }
    }
    return (
        <>
            <div className="container position-relative">
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
                                    value.games === "cricket" && (
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

                                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                        Ask For Match
                                                    </button>

                                                    <div class="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                        <div class="modal-dialog modal-dialog-scrollable">
                                                            <div class="modal-content">
                                                                <div class="modal-header">
                                                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Match Details</h1>
                                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div className="modal-tital">
                                                                    
                                                                </div>
                                                                <div class="modal-body" style={{ height: 300 }}>
                                                                    <div className="row">
                                                                        <div className="col-2">
                                                                            Date:
                                                                            <br />
                                                                            <br />
                                                                            No. of Overs:
                                                                            <br />
                                                                            <br />
                                                                            No. of Players
                                                                        </div>
                                                                        <div className="col-6">
                                                                            <DatePicker
                                                                                selected={date}
                                                                                dateFormat={"dd/MM/yyyy"}
                                                                                onChange={(e) => setDate(e)}
                                                                            />
                                                                            <br />
                                                                            <br />
                                                                            <select className="form-control" name="" id="">
                                                                                <option value="">Select</option>
                                                                                <option value="">10</option>
                                                                                <option value="">15</option>
                                                                                <option value="">16</option>
                                                                                <option value="">20</option>
                                                                                <option value="">50</option>
                                                                            </select>
                                                                            <br />
                                                                            <select className="form-control mt-2 " name="" id="">
                                                                                <option value="">Select</option>
                                                                                <option value="">8</option>
                                                                                <option value="">11</option>
                                                                                <option value="">12</option>
                                                                                <option value="">15</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="modal-footer">
                                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                    <button type="button" class="btn btn-primary">Send</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr >
                                        </tbody >
                                    )
                                }</>
                        ))}
                    </table >
                </div >

            </div >

        </>
    )
}
export default Cricket