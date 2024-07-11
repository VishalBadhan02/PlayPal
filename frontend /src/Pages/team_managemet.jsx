import { useState } from "react"

const TeamMangement = () => {
    const [user, setUser] = useState({});
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

    return (
        <>
            <div className="container-fluid  ">
                <div className="row-1 d-flex ">
                    <div className="col-9 p-3 px-2 ">
                        <div className="p-3 rounded-3 standerd_background border border-light border-2">
                            <div className="row-sm d-flex">
                                <div className="col-9">
                                    <button className="btn btn-info me-2" type="submit" value={"cricket"}>Cricket</button>
                                    <button className="btn btn-info me-2" type="submit" value={"football"}>Football</button>
                                    <button className="btn btn-info me-2" type="submit" value={"volleyball"}>Volleybal</button>
                                    <button className="btn btn-info me-2" type="submit" value={"badminton"}>Badminton</button>
                                    <button className="btn btn-info me-2" type="submit" value={"tenis"}>Tennis</button>
                                    <button className="btn btn-info me-2" type="submit" value={"basketball"}>Baketball </button>
                                </div>
                                <div className="col-3 d-flex">
                                    <label htmlFor="" className="text-secondary">User:</label>
                                    <p className="ps-2">{user.userName}</p>
                                </div>

                            </div>
                        </div>
                        <div className="d-flex w-100  form-control ">
                            <table className="col-7 my-3 " >
                                <tbody >
                                    <tr className="">
                                        <td style={{ width: 200 }}>
                                            Team Name:
                                        </td>
                                        <td>
                                            <input type="text" className="me-1 "
                                                id="teamName"
                                                onKeyUp={(e) => setTeamName(e.target.value)} />
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
                                                onKeyUp={(e) => setemail(e.target.value)} />
                                        </td>

                                    </tr>
                                    <tr>
                                        <td>
                                            Phone No:
                                        </td>
                                        <td>
                                            <input type="text" className="me-1 "
                                                id="phoneNumber"
                                                onKeyUp={(e) => setphoneNumber(e.target.value)} />
                                        </td>

                                    </tr>
                                    <tr>
                                        <td>No.of players:</td>
                                        <td>
                                            <select name="noOfPlayers" id="" className="me-2"
                                                onChange={handleSelectChange}
                                                style={{ width: 50 }}>
                                                <option value="" >0</option>
                                                <option value="" >5</option>
                                                <option value="" >6</option>
                                                <option value="" >8</option>
                                                <option value="" >10</option>
                                                <option value="" >11</option>
                                            </select>
                                            Substitute
                                            <select name="substitute" id="" className="ms-2" style={{ width: 45 }}
                                                onChange={handleSelectChange}
                                            >
                                                <option value="" >0</option>
                                                <option value="" >1</option>
                                                <option value="" >2</option>
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
                                                onKeyUp={(e) => setaddressOfGrounde(e.target.value)} /><br />
                                            <div className="text-center" style={{ width: 180 }}> <br /> OR</div>
                                            <br />
                                            <button className="btn p-0  location-btn bg-light rounded-3 text-black" style={{ width: 180 }}>
                                                <img
                                                    src={require("../assets/—Pngtree—pin  location icon_3566349.png")}
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
                                                onKeyUp={(e) => setpinCode(e.target.value)} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Description:
                                        </td>
                                        <td>
                                            <div className="form-floating">
                                                <textarea className="form-control" placeholder="Leave a comment here" id="description" onKeyUp={(e) => setdescriptione(e.target.value)} style={{ height: 100, width: 190 }}
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
                                <textarea className="form-control h-75" placeholder="Players list" id="teamMembers" onChange={(e) => setteamMembers(e.target.value)} style={{}} readOnly></textarea>
                                <br />
                                <div className="d-flex">
                                    <input type="text" name="" id="members" className="w-75 form-control" placeholder="Player name" onKeyUp={(e) => setmembers(e.target.value)} />
                                    <button className="btn btn-primary ms-2">Enter </button>
                                </div>
                                <button className="btn btn-primary btn-md w-75 my-2"  >Save</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 p-3 px-0  ">
                        <div className="rounded-3 border standerd-background">
                            <div className="row-sm p-2 bg-warning rounded-1 rounded-bottom-0 ">
                                <p className="fw-bold text-primary m-0 ">Your Friend</p>
                            </div>
                            <div className="row-sm p-2 ">
                                <table className="w-100 ">
                                    <tr className="  ">
                                        <td className="p-2">
                                            <div className="row-sm d-flex p-2 bg-light rounded-2 mb-2">
                                                <div className="col-10 fw-bold">{"Vishal"} </div>
                                                <div className="col-2 text-end px-2"><input type="checkbox" name="" id="" /></div>
                                            </div>
                                            <div className="row-sm d-flex p-2 bg-light rounded-2 mb-2">
                                                <div className="col-10 fw-bold">{ } </div>
                                                <div className="col-2 text-end px-2"><input type="checkbox" name="" id="" /></div>
                                            </div>
                                        </td>

                                    </tr>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamMangement