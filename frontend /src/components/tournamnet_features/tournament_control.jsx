import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Tournament_control = () => {
    const [name, setName] = useState("");
    const [type_of_game, setTypeOfGame] = useState("");
    const [contact, setContact] = useState("");
    const [start_date, setStartDate] = useState(new Date());
    const [end_date, setEndDate] = useState(new Date());
    const [total_team_participation, setTotalTeamParticipation] = useState("");
    const [address, setAddress] = useState("");
    const [tournament_day, setTournamentDay] = useState("");
    const [t_country, setT_country] = useState()
    const [t_state, setT_state] = useState()
    const [t_city, setT_city] = useState()

    const [location, setLocation] = useState([]);
    const [state, setState] = useState([]);
    const [city, setCity] = useState([]);

    useEffect(() => {
        getCountry();
    }, []);

    const getCountry = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:5050/user/getcountry");
            setLocation(res.data);
        } catch (err) {
            toast.error("Error fetching countries");
        }
    };

    const getState = async (code) => {
        try {
            const res = await axios.get("http://127.0.0.1:5050/user/getstate/" + code);
            setState(res.data);
        } catch (err) {
            toast.error("Error fetching states");
        }
    };

    const getCity = async (stateCode) => {
        try {
            const res = await axios.get("http://127.0.0.1:5050/user/getcity/" + stateCode);
            setCity(res.data);
        } catch (err) {
            toast.error("Error fetching cities");
        }
    };

    const handleTournament = async (event) => {
        event.preventDefault();
        const data = {
            name,
            type_of_game,
            contact,
            start_date,
            end_date,
            total_team_participation,
            tournament_day,
            t_country,
            t_state,
            t_city,
            address
        };
        try {
            const res = await axios.post("http://127.0.0.1:5050/user/tournamentRegister", data);
            toast.success("Tournament registered successfully");
        } catch (err) {
            toast.error("Error in tournament registration");
        }
    };

    return (
        <div className="container-sm">
            <div className="row my-2">
                <div className="text-center"><h1>Enter Tournament details</h1></div>
                <div className="col-6 form-control w-50 border-end-0 rounded-0">
                    <table>
                        <tbody>
                            <tr className="fs-5">
                                <td className="p-2">Tournament Name</td>
                                <td className="p-2">
                                    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
                                </td>
                            </tr>
                            <tr className="fs-5">
                                <td className="p-2">Type of tournament</td>
                                <td className="p-2">
                                    <select name="" id="" className="form-control" onChange={(e) => setTypeOfGame(e.target.value)}>
                                        <option value="">Select</option>
                                        <option value="cricket">Cricket</option>
                                        <option value="football">Football</option>
                                        <option value="volleyball">Volleyball</option>
                                        <option value="badminton">Badminton</option>
                                        <option value="basketball">Basketball</option>
                                        <option value="tenis">Tenis</option>
                                    </select>
                                </td>
                            </tr>
                            <tr className="fs-5">
                                <td className="p-2">Contact No.</td>
                                <td className="p-2"><input type="text" className="form-control" onChange={(e) => setContact(e.target.value)} /></td>
                            </tr>
                            <tr className="fs-5">
                                <td className="p-2">Starting Date</td>
                                <td className="p-2">
                                    <DatePicker
                                        selected={start_date}
                                        onChange={(date) => setStartDate(date)}
                                        dateFormat={"dd/MM/yyyy"}
                                        className="text-secondary "
                                    />
                                </td>
                            </tr>
                            <tr className="fs-5">
                                <td className="p-2">End Date</td>
                                <td className="p-2">
                                    <DatePicker
                                        selected={end_date}
                                        dateFormat={"dd/MM/yyyy"}
                                        onChange={(date) => setEndDate(date)}
                                        className="text-secondary"
                                    />
                                </td>
                            </tr>
                            <tr className="fs-5">
                                <td className="p-2">Total Teams</td>
                                <td className="p-2">
                                    <select name="" id="" className="form-control" onChange={(e) => setTotalTeamParticipation(e.target.value)}>
                                        <option value="">Select</option>
                                        {[...Array(15).keys()].map(i => (
                                            <option key={i} value={i + 1}>{i + 1}</option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                            <tr className="fs-5">
                                <td className="p-2">Tournament Days</td>
                                <td className="p-2">
                                    <select name="" id="" className="form-control" onChange={(e) => setTournamentDay(e.target.value)}>
                                        <option value="">Select</option>
                                        {[...Array(6).keys()].map(i => (
                                            <option key={i} value={i + 1}>{i + 1}</option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-6 form-control w-50 border-start-0 rounded-0">
                    <table>
                        <tbody>
                            <tr className="fs-5">
                                <td className="p-2">Address</td>
                                <td className="p-2">
                                    <input type="text" className="form-control" onChange={(e) => setAddress(e.target.value)} />
                                </td>
                            </tr>
                            <tr className="fs-5">
                                <td className="p-2">Country</td>
                                <td className="p-2">
                                    <select className="form-control" name="" id="" onChange={(e) => getState(e.target.value)} >
                                        <option value="">Select Country</option>
                                        {location.map((country, index) =>
                                            <option key={index} onChange={(e) => setT_country(e.target.value)} value={country.code}>{country.name}</option>
                                        )}
                                    </select>
                                </td>
                            </tr>
                            <tr className="fs-5">
                                <td className="p-2">State</td>
                                <td className="p-2">
                                    {state.length > 0 &&
                                        <select className="form-control" name="" id="" onChange={(e) => getCity(e.target.value)}>
                                            <option value="">Select State</option>
                                            {state.map((states, index) =>
                                                <option key={index} onChange={(e) => setT_state(e.target.value)} value={states.id}>{states.name}</option>
                                            )}
                                        </select>
                                    }
                                </td>
                            </tr>
                            <tr className="fs-5">
                                <td className="p-2">City</td>
                                <td className="p-2">
                                    {city.length > 0 &&
                                        <select className="form-control" name="" id="" onChange={(e) => setCity(e.target.value)}>
                                            <option value="">Select City</option>
                                            {city.map((value, index) =>
                                                <option key={index} onChange={(e) => setT_city(e.target.value)} value={value.name}>{value.name}</option>
                                            )}
                                        </select>
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row-sm">
                <button className="btn btn-primary w-100 form-control" onClick={handleTournament}>
                    Submit
                </button>
            </div>
        </div>
    );
}

export default Tournament_control;
