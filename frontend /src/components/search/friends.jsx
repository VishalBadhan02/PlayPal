import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const Friends = () => {
    const token = localStorage.getItem("token");
    const [list, setList] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [output, setOutput] = useState(true);
    const { queryParams } = useParams();

    useEffect(() => {
        setFriend();
    }, []);

    const setFriend = async () => {
        try {
            axios.defaults.headers.common["Authorization"] = token;
            const res = await axios.get("http://127.0.0.1:5050/user/search");
            setList(res.data.users);
        } catch (err) {
            toast.error(err.response.data.message);
        }
    };

    const handleSearch = async (e) => {
        const searchQuery = e.target.value;
        if (searchQuery === "") {
            setSearchResults([]);
            setOutput(true);
            return;
        }

        try {
            const res = await axios.get("http://127.0.0.1:5050/user/searchFriend/" + searchQuery);
            setSearchResults(res.data);
            setOutput(false);
        } catch (err) {
            toast.error("Error in searching friend: " + (err.response?.data?.message || err.message));
        }
    };

    return (
        <div className="container-fluid px-5">
            <div className="row px-5 py-3">
                <div className="col-6 text-center border-end border-start">
                    Friends
                </div>
                <div className="col-6 text-center border-end">
                    Teams
                </div>
            </div>
            <input
                type="text"
                className="form-control search-input px-5 rounded-3"
                placeholder="🔎 Search Your friends & opponents"
                aria-label="Search"
                aria-describedby="basic-addon1"
                onKeyUp={handleSearch}
            />
            <div className="row px-2">
                <table>
                    <tbody className="bg-light">
                        {output &&
                            list.map((value, index) => (
                                <tr key={index}>
                                    <td>
                                        <div className="row p-2">
                                            <div className="col-1 p-0 text-center justify-content-center d-flex">
                                                <img
                                                    src={require("../../assets/1711859084821_kz1JoJrA8g7c.jpg")}
                                                    style={{ width: 40 }}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="col text-left">
                                                <p className="m-0"><strong>{value.userName}</strong></p>
                                                <span className="">{value.team || `Invite`}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-end"></td>
                                </tr>
                            ))
                        }
                        {searchResults && searchResults.map((value, index) => (
                            <tr key={index}>
                                <td>
                                    <div className="row p-2">
                                        <div className="col-1 p-0 text-center justify-content-center d-flex">
                                            <img
                                                src={require("../../assets/1711859084821_kz1JoJrA8g7c.jpg")}
                                                style={{ width: 40 }}
                                                alt=""
                                            />
                                        </div>
                                        <div className="col text-left">
                                            <p className="m-0"><strong>{value.userName}</strong></p>
                                            <span className="">{value.team || `Invite`}</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-end"></td>
                            </tr>
                        ))}

                    </tbody>
                </table>

            </div>
            {searchResults.length === 0 && !output && (

                <div class="loading ">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            )}
        </div>

    );
};

export default Friends;
