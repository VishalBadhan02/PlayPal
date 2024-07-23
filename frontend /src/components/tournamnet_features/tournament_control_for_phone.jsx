import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const PhoneTournament = () => {
    const [detail, setdetail] = useState([])


    useEffect(() => {
        settournament()
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
        <div className="container-fluid p-0 position-relative">
            <div className="">
                <img src={require("../../assets/Firefly sports 8882.jpg")}
                    className="w-100"
                    alt="" />
                <img src={require("../../assets/sunset-5560658_1280.jpg")}
                    className="w-100"
                    alt="" />
            </div>
            <div className="shaded position-absolute top-0"></div>
            <div className="container-fluid p-2 px-4 position-absolute top-0" style={{ height: 600, overflow: "scroll" }}>
                <div className="row  mb-1 bg-danger rounded-2  bg-opacity-75">
                    <div className="col-1 text-white p-0">
                        Rank
                    </div>
                    <div className="col-8 text-white text-center">
                        Tournaments
                    </div>
                    <div className="col-3">

                    </div>
                </div>
                {detail && detail.map((value, index) =>
                    <div className="row mb-1 bg-dark rounded-2  bg-opacity-75">
                        <div className="col-1 text-white p-2">
                            {value.rank}
                        </div>
                        <div className="col-8 text-white ">
                            {value.name}
                        </div>
                        <div className="col-3 text-white">
                            3
                        </div>
                    </div>)}

            </div>
        </div>
    </>)
}

export default PhoneTournament