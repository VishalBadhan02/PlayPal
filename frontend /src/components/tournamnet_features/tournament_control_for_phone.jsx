import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const PhoneTournament = () => {
    const [detail, setdetail] = useState([])
    const [nav, setNave] = useState(true);


    useEffect(() => {
        settournament()
        const hnadleNav = () => {
            if (window.scrollY > 2) {
                setNave(!nav)
            }
        }
    }, [])

    const settournament = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:5050/user/gettournament")
            setdetail(res.data)
        } catch (error) {
            toast.error("Tournament errors", error)
        }
    }
    return (<>
        <div className="container-fluid p-0 ">
            <div className="container-fluid p-2 px-3  top-0" style={{ height: 600, overflow: "scroll" }}>
                <div className="rounded p-1 ">
                    <div className="row mx-1 my-1 bg_index box_shadow_orange rounded-2  p-1  ">
                        <div className="col-1  p-0">
                            Rank
                        </div>
                        <div className="col-8  text-center">
                            Tournaments
                        </div>
                        <div className="col-3">

                        </div>
                    </div>
                    {detail && detail.map((value, index) =>
                        <div className="row mb-1 mx-1 bg-light rounded-2 shadow-lg ">
                            <div className="col-1  p-2">
                                {value.rank}
                            </div>
                            <div className="col-8  ">
                                {value.name}
                            </div>
                            <div className="col-3  d-flex justify-content-center align-items-center">
                                <button className="btn btn-sm bg-opacity-75 bg-danger">Play</button>
                            </div>
                        </div>)
                    }
                </div>


            </div>
        </div>
    </>)
}

export default PhoneTournament