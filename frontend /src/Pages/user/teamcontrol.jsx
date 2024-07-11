import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import AddPlayer from "../tables/addPlayer";

const TeamControl = () => {
    const [read, setRead] = useState(false)
    const [user, setUser] = useState({});
    const [player, setPlayers] = useState([])
    const [listOfPlayer, setListOfPlayer] = useState(false)
    const token = localStorage.getItem("token");

    const [games, setGame] = useState()
    const [teamName, setTeamName] = useState()
    const [email, setemail] = useState()
    const [phoneNumber, setphoneNumber] = useState()
    const [noOfPlayers, setnoOfPlayers] = useState()
    const [substitute, setsubstitute] = useState()
    const [homeGround, sethomeGround] = useState("no")
    const [addressOfGround, setaddressOfGrounde] = useState()
    const [pinCode, setpinCode] = useState()
    const [description, setdescriptione] = useState()
    const [teamMembers, setteamMembers] = useState()
    const [members, setmembers] = useState()

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

    const handleTeam = async (event) => {
        event.preventDefault();

        const teamInfo = {
            games,
            teamName,
            email,
            phoneNumber,
            noOfPlayers,
            substitute,
            homeGround,
            addressOfGround,
            pinCode,
            description,
            teamMembers,
            members
        }

        try {
            axios.defaults.headers.common['Authorization'] = token
            const res = await axios.post("http://127.0.0.1:5050/user/teamcontrol", teamInfo);

            if (res.data.status === true) {
                toast.success("Team registered succesfully")
            }


        } catch (err) {
            toast.error(err.response.data.error || "Error craeting team");
        }
    };

    useEffect(() => {
        getUser();
        setPlayer();

    }, [])

    const getUser = async () => {
        try {
            axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
            const res = await axios.get("http://127.0.0.1:5050/user/getProfile");
            setUser(res.data.data);
        } catch (err) {
            toast.error(err.response.data.message);

        }
    }

    const handleRead = (e) => {
        setGame(e.target.value)
        setRead(!read)

    }

    const setPlayer = async () => {
        try {
            axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
            const res = await axios.get("http://127.0.0.1:5050/user/getPlayer")
            console.log(res.data)
            setPlayers(res.data)
        } catch (err) {
            toast.error("error in players", err)
        }
    }

    // const gamesDiv = document.querySelector("games")
    // gamesDiv.addEventListener("click", changebtn = (event) => {
    //     if (event.target.nodeName === "BUTTON") {
    //         event.target.classList.toggle("rgb(107, 201, 241)");
    //     }
    // })

    return (
        <>
            <div className="container-fluid  ">
                <div className="row-1 d-flex ">
                    <div className="col-9 p-3 px-2 ">
                        <div className="p-3 rounded-3 standerd_background border border-light border-2">
                            <div className="row-sm d-flex">
                                <div className="col-9 games">
                                    <button className="btn border border-info  me-3" type="submit" value={"cricket"} onClick={handleRead}>Cricket</button>
                                    <button className="btn  me-3 border-info " type="submit" value={"football"} onClick={handleRead}>Football</button>
                                    <button className="btn  me-3 border-info " type="submit" value={"volleyball"} onClick={handleRead}>Volleybal</button>
                                    <button className="btn  me-3 border-info " type="submit" value={"badminton"} onClick={handleRead}>Badminton</button>
                                    <button className="btn  me-3 border-info " type="submit" value={"tenis"} onClick={handleRead}>Tennis</button>
                                    <button className="btn  me-3 border-info " type="submit" value={"basketball"} onClick={handleRead}>Baketball </button>
                                </div>
                                <div className="col-3 d-flex">
                                    <label htmlFor="" className="text-secondary">User:</label>
                                    <p className="ps-2">{user.userName}</p>
                                </div>

                            </div>
                        </div>
                        <div className="d-flex w-100  form-control "  >
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
                                                    src={require("../../assets/—Pngtree—pin  location icon_3566349.png")}
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


                        </div>
                    </div>
                    <div className="col-3 p-3 px-0  ">
                        <AddPlayer />
                    </div>
                </div>
            </div>
        </>
    )
}
export default TeamControl