import axios from "axios"
import { useEffect, useState } from "react"

const Location = () => {

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
            <div className="row-sm px-1 gap-2 d-flex">
                <div className="col-3  d-flex ">
                    <select className="form-control" name="" id="" onChange={(e) => getState(e.target.value)} >
                        <option value="">Select Country</option>
                        {location && location.map((country, index) =>
                            <option key={index} value={country.code}>{country.name} </option>
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
            <div className="row-sm d-flex p-2 gap-4 games ">
                <button className="btn border">Cricket</button>
                <button className="btn border">Volleball</button>
                <button className="btn border">Football</button>
                <button className="btn border">Badminton</button>
                <button className="btn border">Tenis</button>
                <button className="btn border">BasketBall </button>
            </div>

        </>
    )
}

export default Location