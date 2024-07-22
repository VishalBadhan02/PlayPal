import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const GamesForPhone = () => {
    const [link, setLink] = useState();

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

    return (
        <>
            <div className="container">
                <div className="row bg-secondary">
                    {link && link.map((value, index) =>
                        <div key={index} className="col-6 p-3 justify-content-center d-flex">
                            <div className="card" style={{ width: 100, height: 100 }}>
                                <p>{value.name}</p>
                            </div>
                        </div>
                    )}


                </div>
            </div>
        </>
    )
}

export default GamesForPhone