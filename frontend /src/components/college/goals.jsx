import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Goals = () => {
    const [goals, setGoals] = useState([]);

    useEffect(() => {
        getGoals();
    }, []);

    const getGoals = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:5050/college/getGoals");
            setGoals(res.data);
        } catch (err) {
            console.error("Error fetching goals:", err);
        }
    };

    return (
        <>
            {goals.map((goal, index) => (
                <div className="col-2 " key={index}>
                    <div className="ps-0">
                        <div className="card-1 p-3 mb-1 ">
                            <div className="d-flex gap-2">
                                <div className="col-auto p-0">
                                    <img src={goal.img} alt="" className="rounded-circle border " />
                                </div>
                                <div className="col align-items-center d-flex">
                                    <div>
                                        <h5 className="">{goal.name}</h5>
                                        <p className="text-secondary m-0">{goal.available}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <ul className="list-group-numbered text-secondary p-3 ">
                                    {goal && goal.course.map((v, i) => (
                                        <div key={i}>
                                            <li className="border-bottom py-1 ">
                                                <Link className="text-decoration-none text-black icon-link icon-link-hover " to={"/singlepage/" + v._id}>
                                                    {v.name}
                                                </Link>

                                            </li>
                                            <link rel="stylesheet" href="/singlepage" />
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div >
            ))}
        </>
    );
};

export default Goals;
