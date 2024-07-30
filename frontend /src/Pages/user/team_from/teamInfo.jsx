import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import AddPlayer from "../../tables/addPlayer";


const TeamInfo = ({ game }) => {
    const [read, setRead] = useState(true)
    const [show, setShow] = useState(false)


    const [teamName, setTeamName] = useState()
    const [email, setemail] = useState()
    const [phoneNumber, setphoneNumber] = useState()
    const [noOfPlayers, setnoOfPlayers] = useState()
    const [substitute, setsubstitute] = useState()
    const [homeGround, sethomeGround] = useState("no")
    const [addressOfGround, setaddressOfGrounde] = useState()
    const [selectCity, setSelectedCity] = useState();
    const [selectState, setSelectedState] = useState("");
    const [selectCountry, setSelectedCountry] = useState("");
    const [pinCode, setpinCode] = useState()
    const [description, setdescriptione] = useState()
    const [teamMembers, setteamMembers] = useState()
    const [members, setmembers] = useState()

    const [link, setLink] = useState();

    const [country, setCountry] = useState([]);
    const [state, setState] = useState([]);
    const [city, setcity] = useState([]);

    const handleSelectChange = (event) => {
        if (event.target.name === "noOfPlayers") {
            setnoOfPlayers(event.target.value);
        } else if (event.target.name === "substitute") {
            setsubstitute(event.target.value);
        }
    };

    const handleHomeGroundChange = (e) => {
        sethomeGround(e.target.value)
    }



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

    const handleSave = () => {
        setRead(!read)
        setShow(!show)
    }


    return (
        <>
            {read && <div className="container-fluid p-4 border my-1 rounded box_shadow">
                <div className="row ">
                    <div className="col-5">
                        <p>Team Name:</p>
                        <p>Email:</p>
                        <p>Phone Number:</p>
                        <p>No.of players:</p>
                        <p>Substitute:</p>
                        <p>Home Ground:</p>
                        <p>Ground address:</p>
                        <p>Country:</p>
                        <p>State:</p>
                        <p>City</p>
                    </div>
                    <div className="col-7">
                        <div className="">
                            <input type="text" className="form-control"
                                id="teamName"
                                onKeyUp={(e) => setTeamName(e.target.value)}
                            />
                            <input type="text" className="form-control"
                                id="email"
                                placeholder="example@gmail.com"
                                onKeyUp={(e) => setemail(e.target.value)}
                            />
                            <input type="text" className="form-control"
                                id="phoneNumber"
                                placeholder="123456789"
                                onKeyUp={(e) => setphoneNumber(e.target.value)}
                            />
                            <select name="noOfPlayers" id="" className="form-control"
                                onChange={handleSelectChange}
                            >
                                <option value="0" >0</option>
                                <option value="1" >1</option>
                                <option value="2" >2</option>
                                <option value="3" >3</option>
                                <option value="4" >4</option>
                                <option value="5" >5</option>
                                <option value="6" >6</option>
                                <option value="7" >7</option>
                                <option value="8" >8</option>
                                <option value="9" >9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                            <select name="substitute" id="" className="form-control"
                                onChange={handleSelectChange}
                            >
                                <option value="0" >0</option>
                                <option value="1" >1</option>
                                <option value="2" >2</option>
                                <option value="3" >3</option>
                                <option value="4" >4</option>
                                <option value="5" >5</option>
                            </select>
                            <div className="d-flex p-3 ">
                                <div className="form-check mx-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="homeGround"
                                        id="flexRadioDefault1"
                                        Value="yes"
                                        checked={homeGround === "yes"}
                                        onChange={handleHomeGroundChange}

                                    />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        yes
                                    </label>
                                </div>
                                <div className="form-check mx-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="homeGround"
                                        id="flexRadioDefault1"
                                        Value="no"
                                        checked={homeGround === "no"}
                                        onChange={handleHomeGroundChange}

                                    />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        No
                                    </label>
                                </div>
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control "
                                    id=" addressOfGround"
                                    onKeyUp={(e) => setaddressOfGrounde(e.target.value)}
                                    readOnly={!read}
                                />
                            </div>

                            <select name="" className="form-control" id=""
                                onChange={(e) => {
                                    getState(e.target.value)
                                    setSelectedCountry(e.target.value)
                                }}>
                                <option value="India">India</option>
                                {country && country.map((value, index) =>
                                    <option value={value.iso2} key={index}>{value.name}</option>
                                )}
                            </select>
                            <select name="" className="form-control" id=""
                                onChange={(e) => {
                                    getCity(e.target.value)
                                    setSelectedState(e.target.value)
                                }}>
                                {state && state.map((value, index) =>
                                    <option value={value.id} key={index}>{value.name}</option>
                                )}
                            </select>
                            <select name="" className="form-control" id=""
                                onChange={(e) => setSelectedCity(e.target.value)}>
                                {city && city.map((value, index) =>
                                    <option key={index} value={value.name}>{value.name}</option>
                                )}
                            </select>

                        </div>

                    </div>
                </div>
                <div>
                    <button className="btn my-3 w-100 bg-primary text-white fw-bold" onClick={handleSave}>Save & next</button>
                </div>
            </div>}

            {show && <AddPlayer value={{ teamName, email, phoneNumber, noOfPlayers, substitute, homeGround, addressOfGround, game, selectCity, selectState, selectCountry }} />}


            {/* <div className="d-flex w-100  form-control "  >
                <table className="col-7 my-3 " >
                    <tbody >
                        <tr className="">
                            <td style={{ width: 200 }}>
                                Team Name:
                            </td>
                            <td>
                                <input type="text" className="me-1 "
                                    id="teamName"
                                    onKeyUp={(e) => setTeamName(e.target.value)}
                                    readOnly={!read}
                                />
                            </td>
                            <td><label htmlFor="" className="ms-5">Team members: <br />
                            </label></td>

                        </tr>
                        <tr>
                            <td>
                                Email:
                            </td>
                            <td>
                                <input type="text" className="me-1 "
                                    id="email"
                                    onKeyUp={(e) => setemail(e.target.value)}
                                    readOnly={!read}
                                />
                            </td>

                        </tr>
                        <tr>
                            <td>
                                Phone No:
                            </td>
                            <td>
                                <input type="text" className="me-1 "
                                    id="phoneNumber"
                                    onKeyUp={(e) => setphoneNumber(e.target.value)}
                                    readOnly={!read}
                                />
                            </td>

                        </tr>
                        <tr>
                            <td>No.of players:</td>
                            <td>
                                <select name="noOfPlayers" id="" className="me-2"
                                    onChange={handleSelectChange}
                                    style={{ width: 50 }}>
                                    <option value="0" >0</option>
                                    <option value="1" >1</option>
                                    <option value="2" >2</option>
                                    <option value="3" >3</option>
                                    <option value="4" >4</option>
                                    <option value="5" >5</option>
                                    <option value="6" >6</option>
                                    <option value="7" >7</option>
                                    <option value="8" >8</option>
                                    <option value="9" >9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                                Substitute
                                <select name="substitute" id="" className="ms-2" style={{ width: 45 }}
                                    onChange={handleSelectChange}
                                >
                                    <option value="0" >0</option>
                                    <option value="1" >1</option>
                                    <option value="2" >2</option>
                                    <option value="3" >3</option>
                                    <option value="4" >4</option>
                                    <option value="5" >5</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Home Ground:</td>
                            <td className="d-flex">
                                <div className="form-check mx-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="homeGround"
                                        id="flexRadioDefault1"
                                        Value="yes"
                                        checked={homeGround === "yes"}
                                        onChange={handleHomeGroundChange}

                                    />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        yes
                                    </label>
                                </div>
                                <div className="form-check mx-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="homeGround"
                                        id="flexRadioDefault1"
                                        Value="no"
                                        checked={homeGround === "no"}
                                        onChange={handleHomeGroundChange}
                                    />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        No
                                    </label>
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                Address of ground:
                            </td>
                            <td>
                                <input type="text" className="me-1 "
                                    id=" addressOfGround
                                                "
                                    onKeyUp={(e) => setaddressOfGrounde(e.target.value)}
                                    readOnly={!read}
                                /><br />
                                <div className="text-center" style={{ width: 180 }}> <br /> OR</div>
                                <br />
                                <button className="btn p-0  location-btn bg-light rounded-3 text-black" style={{ width: 180 }}>
                                    <img
                                        src=""
                                        style={{ height: 20, width: 20 }}
                                        alt="Settings"
                                        className="settings-icon "
                                    />
                                    Choose your location
                                </button>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                Pin code:
                            </td>
                            <td>
                                <input type="text" className="me-1 "
                                    id=" pincode
                                                
                                             "
                                    onKeyUp={(e) => setpinCode(e.target.value)}
                                    readOnly={!read} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Description:
                            </td>
                            <td>
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Leave a comment here" id="description" onKeyUp={(e) => setdescriptione(e.target.value)} style={{ height: 100, width: 190 }}
                                        readOnly={!read}
                                    ></textarea>
                                    <label for="">Write something </label>
                                </div>
                            </td>
                            <td>
                                <label htmlFor="" className="ms-5">(If you don't find <br /> one in your     friend list <br /> then enter name here  )</label>
                            </td>
                        </tr>
                    </tbody>
                </table>


                <div className="col-5 p-3 ">
                    <div className="border rounded-3 h-75 p-2">
                        {player && player.map((value, index) => (

                            <div className="p-1 bg-light mb-1" >
                                <img src="" alt="" />
                                <input type="input" className="border-0 bg-light" value={value.player_id.userName}
                                    onKeyUp={(e) => setteamMembers(e.target.value)}
                                />
                                <br />
                            </div>
                        ))}
                    </div>


                    <div className="d-flex">
                        <input type="text" name="" id="members" className="w-75 form-control" placeholder="Player name" onKeyUp={(e) => setmembers(e.target.value)}
                            readOnly={!read}
                        />
                        <button className="btn btn-primary ms-2">Enter </button>
                    </div>
                    <button className="btn btn-primary btn-md w-75 my-2" onClick={handleTeam} >Save</button>
                </div>


            </div> */}
        </>
    )
}

export default TeamInfo