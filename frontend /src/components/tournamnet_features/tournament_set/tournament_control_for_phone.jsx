import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { Link } from "react-router-dom"

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

    const [location, setLocation] = useState([]);
    const [state, setState] = useState([]);
    const [city, setCity] = useState([]);

    useEffect(() => {
        getcountry()
    }, [])

    const getcountry = async () => {
        const rescountry = await axios.get("http://127.0.0.1:5050/user/getcountry")
        setLocation(rescountry.data)
    }


    const getState = async (code) => {
        const states = await axios.get("http://127.0.0.1:5050/user/getstate/" + code)
        setState(states.data)
    }

    const getcity = async (state) => {
        const city = await axios.get("http://127.0.0.1:5050/user/getcity/" + state)
        setCity(city.data)
    }




    return (
        <>

            <div className="container-fluid p-0 ">
                <div className="row-sm px-1 gap-2 d-flex">
                    <div className="col-3  d-flex ">
                        <select className="form-control" name="" id="" onChange={(e) => getState(e.target.value)} >
                            <option value="">Select Country</option>
                            {location && location.map((country, index) =>
                                <option key={index} value={country.iso2}>{country.name} </option>
                            )}
                        </select>
                    </div>
                    {state[0] &&
                        <div className="col-3">
                            <select className="form-control" name="" id="" onChange={(e) => getcity(e.target.value)}>
                                <option value="" >Select State</option>
                                {state.map((states, index) =>
                                    <option key={index} value={states.id}>{states.name} </option>
                                )}
                            </select>
                        </div>
                    }
                    {city[0] &&
                        <div className="col-3">
                            <select className="form-control" name="" id="">
                                <option value="" >Select city</option>
                                {city.map((value, index) =>
                                    <option key={index} value="">{value.name} </option>
                                )}
                            </select>
                        </div>
                    }
                </div>
                <div className="container-fluid p-2 px-3  top-0" >
                    <div className="rounded p-1 ">

                        <div className="row mx-1 my-1 box_shadow_orange    rounded-2  p-1  ">
                            <div className="col-1  p-0">
                                Rank
                            </div>
                            <div className="col-8  text-center">
                                Tournaments
                            </div>
                            <div className="col-3">

                            </div>
                        </div>

                        <div style={{ height: 600, overflow: "scroll" }}>
                            {detail && detail.map((value, index) =>
                                <div className="row mb-1 mx-1 bg-light rounded-2 shadow-lg " >
                                    <div className="col-1 text-center d-flex justify-content-center align-items-center  p-2">
                                        <p className="m-0"> {index + 1}</p>
                                    </div>
                                    <div className="col-8  ">
                                        <div className="d-flex gap-1">
                                            <div className="d-flex justify-content-start align-items-center">
                                                <img src={require("../../../assets/mDPLlpDXRfWXY013tEcDQg.png")} alt=""
                                                    style={{ width: 40, height: 40 }}
                                                    className="rounded-circle m-0"
                                                />

                                            </div>
                                            <div className="p-2">

                                                <p className="m-0">{value.name} <span style={{ fontSize: 10 }}>({value.type_of_game})</span></p>
                                                <p className="m-0" >
                                                    <span style={{ fontSize: 10 }}>{new Date(value.start_date).toLocaleDateString()}</span> - <span style={{ fontSize: 10 }}>{new Date(value.end_date).toLocaleDateString()}</span>
                                                </p>

                                            </div>
                                        </div>


                                    </div>
                                    <div className="col-3   d-flex justify-content-end align-items-center">
                                        <Link to={"/tournamnet-control/" + value._id}>
                                            <button className="p-1 btn btn-danger  border-0 rounded   text-white"  >Play</button>
                                        </Link>

                                    </div>
                                </div>)
                            }
                        </div>


                    </div>


                </div>
            </div>
        </>)
}

export default PhoneTournament