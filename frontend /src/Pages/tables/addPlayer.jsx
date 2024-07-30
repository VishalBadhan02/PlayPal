import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AddPlayer = ({ value }) => {
    console.log("Team info : ", value)
    const token = localStorage.getItem('token')
    const [list, setList] = useState([]);
    const [player, setPlayers] = useState([])
    const [teamMembers, setteamMembers] = useState()


    const handleTeam = async (event) => {
        event.preventDefault();

        const teamInfo = {
            games: value.game,
            teamName: value.teamName,
            email: value.email,
            phoneNumber: value.phoneNumber,
            noOfPlayers: value.noOfPlayers,
            substitute: value.substitute,
            homeGround: value.homeGround,
            addressOfGround: value.addressOfGround,
        }

        try {
            axios.defaults.headers.common['Authorization'] = token
            const res = await axios.post("http://127.0.0.1:5050/user/teamcontrol", teamInfo);
            if (res.data.status === true) {
                toast.success("Team registered succesfully")
                setInterval(() => {
                    window.location.href = "/"
                }, 1000);

            }


        } catch (err) {
            toast.error(err.response.data.error || "Error craeting team");
        }
    };

    useEffect(() => {
        setFriends();
        setPlayer();
    }, [])

    const setFriends = async () => {
        const token = localStorage.getItem('token')
        try {
            axios.defaults.headers.common["Authorization"] = token;
            const res = await axios.get("http://127.0.0.1:5050/user/yourFriends");
            setList([...res.data.friends, ...res.data.friend]);
        } catch (err) {
            toast.error("error in yourFriends", err)
        }
    }

    const setPlayer = async () => {
        try {
            axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
            const res = await axios.get("http://127.0.0.1:5050/user/getPlayer")
            setPlayers(res.data)
        } catch (err) {
            toast.error("error in players", err)
        }
    }

    const handleAddPlayer = async (user_id) => {
        try {
            axios.defaults.headers.common["Authorization"] = token;
            const res = await axios.post("http://127.0.0.1:5050/user/addPlayer", { user_id })
        } catch (err) {
            toast.error("error in app player", err)
        }
    }

    return (
        <>
            <div className="container ">
                <div className="row justify-content-center ">
                    <div className="col-10 " >
                        <div className="row bg-warning rounded-1  p-2 mt-4 rounded-bottom-0 text-center">
                            <p className="fw-bold text-primary m-0 ">Players</p>
                        </div>
                        <div className="row border box_shadow p-2" >
                            <div style={{ height: 400, overflow: "scroll" }}>
                                <table className="w-100 " >
                                    <input type="text" className="form-control" placeholder="Search" name="" id="" />
                                    {list && list.map((value, index) => (
                                        <tr key={index} className="  ">
                                            <td className="p-1">
                                                <div className="row-sm d-flex p-1 bg-light rounded-2 " >
                                                    <div className="col-9 fw-bold">{value.request?.userName || value.user_id?.userName} </div>
                                                    <div className="col-3 text-end px-2">
                                                        {(value.friends == null || value.friends == null) && <button className="btn btn-primary btn-sm"
                                                            onClick={() => handleAddPlayer(value.request._id || value.user_id?._id)}>Add
                                                        </button>}
                                                        {(value.friends || value.frineds) && (value.friends?.status == 1 || value.friends?.status == 1) && <button className="btn btn-primary btn-sm"
                                                            onClick={() => handleAddPlayer(value.request._id || value.user_id?._id)}>Remove
                                                        </button>}
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}

                                </table>
                            </div>

                        </div>
                        <div className="row ">
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Save
                            </button>
                            <div class="modal fade mt-5" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel"> Playing Ones</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body" style={{ overflow: "scroll", height: 300 }}>
                                            {player && player.map((value, index) =>
                                                <div className="p-1 bg-light mb-1" >
                                                    <input type="input" className="border-0  bg-light" value={value.player_id.userName}
                                                        onKeyUp={(e) => setteamMembers(e.target.value)}
                                                    />
                                                    <br />
                                                </div>
                                            )}
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary" onClick={handleTeam}>
                                                Register
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="rounded-3 border standerd-background">
                <div className="row-sm p-2 bg-warning rounded-1 rounded-bottom-0 text-center ">
                    <p className="fw-bold text-primary m-0 ">Players</p>
                </div>
                <div className="row-sm p-1 ">
                    <table className="w-100 ">
                        <input type="text" className="form-control" placeholder="Search" name="" id="" />
                        {list && list.map((value, index) => (
                            <tr key={index} className="  ">
                                <td className="p-1">
                                    <div className="row-sm d-flex p-1 bg-light rounded-2 ">
                                        <div className="col-9 fw-bold">{value.request?.userName || value.user_id?.userName} </div>
                                        <div className="col-3 text-end px-2">
                                            {(value.friends == null || value.friends == null) && <button className="btn btn-primary btn-sm"
                                                onClick={() => handleAddPlayer(value.request._id || value.user_id?._id)}>Add
                                            </button>}
                                            {(value.friends || value.frineds) && (value.friends?.status == 1 || value.friends?.status == 1) && <button className="btn btn-primary btn-sm"
                                                onClick={() => handleAddPlayer(value.request._id || value.user_id?._id)}>Remove
                                            </button>}
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}

                    </table>
                </div>
            </div> */}
        </>
    )
}
export default AddPlayer

