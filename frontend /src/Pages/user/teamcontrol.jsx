import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import "../../components/Media_Query_Control/ForPhone/phone.css"
import TeamInfo from "./team_from/teamInfo";

const TeamControl = () => {
    const [read, setRead] = useState(false)
    const [game, setGame] = useState(true)
    const [link, setLink] = useState();
    const [gameValue, setGameValue] = useState("")

    useEffect(() => {
        setSideBar()
    }, [])

    const setSideBar = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:5050/links/sideBar")
            const games_link = res.data.find(item => item.games_link).games_link;
            setLink(games_link);
        } catch (err) {
            toast.error("Error in side bar", err)
        }
    }



    const handleRead = (e) => {
        setGameValue(e.target.value)
        console.log("Value of game is :", gameValue)
        setRead(!read)
        setGame(!game)
    }




    return (
        <>
            <div className="container-fluid  ">
                <div className="row-1 d-flex ">
                    {game && <div className="col-12 p-3 px-2  ">
                        <div className="p-3 box_shadow rounded-3 standerd_background border border-light border-2">
                            <h1 className="text-center fw-bold">Select Game</h1>
                            <div className="row-sm">
                                <ul className="games justify-content-between p-0">
                                    {link && link.map((value, index) =>
                                        <div key={index} className="button-formate text-center ">
                                            <li className="mb-2 list-group-numbered  ">
                                                <button className="btn border border-info " type="submit" value={value.value} onClick={handleRead} style={{ width: 150 }}>{value.name}</button>
                                            </li>
                                        </div>
                                    )
                                    }
                                </ul>
                            </div>
                        </div>

                    </div>}
                    {read && <TeamInfo game={gameValue} />}
                </div>
            </div>
        </>
    )
}
export default TeamControl