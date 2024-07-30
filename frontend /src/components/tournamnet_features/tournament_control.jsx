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
    const [selectCity, setSelectedCity] = useState();
    const [selectState, setSelectedState] = useState("");
    const [selectCountry, setSelectedCountry] = useState("");
    const [password, setPassword] = useState("")
    const [conform_password, setConformPassword] = useState("")
    const [tournament_key, setTournamentId] = useState("")

    const [country, setCountry] = useState([]);
    const [state, setState] = useState([]);
    const [city, setcity] = useState([]);

    useEffect(() => {
        getCountry();
    }, [])




    const getCountry = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:5050/user/getcountry");
            setCountry(res.data);
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
            setcity(res.data)
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
            selectCountry,
            selectState,
            selectCity,
            address,
            password,
            conform_password,
            tournament_key,
        };
        try {
            const res = await axios.post("http://127.0.0.1:5050/user/tournamentRegister", data);
            if (res.status == 200) {
                toast.success("Tournament registered successfully");
                window.location.href = ("/")
            }

        } catch (err) {
            toast.error("Error in tournament registration");
        }
    };

    const tournamentId = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:5050/links/setIncriment");
            setTournamentId(res.data)
        } catch (error) {
            toast.error("error in incriment", error)
        }
    }

    return (
        <div className="container-sm p-3">
            <div className="row p-3" style={{ height: 550, overflow: "scroll" }}>
                <div className="fs-1 text-center border border-bottom-0 fw-medium rounded"><p>Register Tournament</p></div>
                <table className="border border-top-0">
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
                                    className="text-secondary form-control"
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
                                    className="text-secondary form-control"
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
                        <tr className="fs-5">
                            <td className="p-2">No. of grounds</td>
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
                            <td className="p-2">Tournament Address</td>
                            <td className="p-2">
                                <input type="text" className="form-control" onChange={(e) => setAddress(e.target.value)} />
                            </td>
                        </tr>
                        <tr className="fs-5">
                            <td className="p-2">Country</td>
                            <td className="p-2">
                                <select name="" className="form-control" id=""
                                    onChange={(e) => {
                                        getState(e.target.value)
                                        setSelectedCountry(e.target.value)
                                    }}>
                                    {country && country.map((value, index) =>
                                        <option value={value.iso2} key={index}>{value.name}</option>
                                    )}
                                </select>
                            </td>
                        </tr>
                        <tr className="fs-5">
                            <td className="p-2">State</td>
                            <td className="p-2">
                                <select name="" className="form-control" id=""
                                    onChange={(e) => {
                                        getCity(e.target.value)
                                        setSelectedState(e.target.value)
                                    }}>
                                    {state && state.map((value, index) =>
                                        <option value={value.id} key={index}>{value.name}</option>
                                    )}
                                </select>
                            </td>
                        </tr>
                        <tr className="fs-5">
                            <td className="p-2">City</td>
                            <td className="p-2">
                                <select name="" className="form-control" id=""
                                    onChange={(e) => setSelectedCity(e.target.value)}>
                                    {city && city.map((value, index) =>
                                        <option key={index} value={value.name}>{value.name}</option>
                                    )}
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={tournamentId}>
                    Submit
                </button>

                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Enter Password</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Tournament Id:</p>
                                <input type="text" value={tournament_key} className="form-control text-secondary"
                                    readOnly />
                                <br />
                                <p>Password</p>
                                <input type="password" className="form-control" onKeyUp={(e) => setPassword(e.target.value)} />
                                <br />
                                <p>Conform Password</p>
                                <input type="password" className="form-control" onKeyUp={(e) => setConformPassword(e.target.value)} />
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" onClick={handleTournament} >Understood</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row-sm">

            </div>
        </div>
    );
}

export default Tournament_control;
