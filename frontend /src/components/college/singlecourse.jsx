import axios from "axios";
import { useEffect, useState } from "react";

const SingleCourse = () => {
    const [sort, setSortBy] = useState()
    const [college, setCollege] = useState([]);
    const courseId = window.location.pathname.split('/singlepage/')[1];
    useEffect(() => {
        const getColleges = async () => {
            try {
                const res = await axios.get("http://127.0.0.1:5050/college/getCourse/" + courseId);
                setCollege(res.data.colleges);
            } catch (err) {
                console.error(err);
            }
        };

        getColleges();
    }, []);
    return (
        <>
            <div className="d-flex gap-3 ">
                <button className="border-1 rounded-4 border-light bg-white border-light ">
                    BE/B.Tech
                </button>
                <button className="border-1 rounded-4 border-light bg-white border-light ">
                    MBA/PGDM
                </button>
                <button className="border-1 rounded-4 border-light bg-white border-light ">
                    BE/B.Tech
                </button>
                <button className="border-1 rounded-4 border-light bg-white border-light ">
                    MBA/PGDM
                </button>

            </div>
            <div className="d-flex justify-content-end">
                <div className="d-flex">
                    <b className="px-2">
                        Sort by
                    </b>
                    <div className="form-check mx-2">
                        <input
                            onClick={(e) => setSortBy(e.target.value, "")}
                            className="form-check-input"
                            type="radio"
                            value={"popularity"}
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                        />


                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Popularity
                        </label>
                    </div>
                    <div className="form-check mx-2">
                        <input
                            onClick={(e) => setSortBy(e.target.value, "")}
                            className="form-check-input"
                            type="radio"
                            value={"reviews_avg_rating"}
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Rating
                        </label>
                    </div>
                    <div className="form-check mx-2">
                        <input
                            onClick={(e) => setSortBy(e.target.value, "")}
                            className="form-check-input"
                            type="radio"
                            value={"hfee"}

                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Highest Fees
                        </label>
                    </div>
                    <div className="form-check mx-2">
                        <input
                            onClick={(e) => setSortBy(e.target.value, "")}
                            className="form-check-input"
                            type="radio"
                            value={"lfee"}
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Lowest Fees
                        </label>
                    </div>
                </div>
            </div>





            <>
                <div className="row  py-3" >

                    <div className="row px-2 m-1">
                        <table className="my-3">
                            <thead className="border-1 border-body-tertiary">
                                <tr>
                                    <th>Rank</th>
                                    <th>College</th>
                                    <th>Ranking</th>
                                    <th>Cut-off</th>
                                    <th>Application</th>
                                    <th>Fee</th>
                                </tr>
                            </thead>
                            {college &&
                                college.map((collegeData, index) => {
                                    return (
                                        <tbody className="border-1 border-secondary" key={index}>
                                            <tr>
                                                <td>&nbsp;#1</td>
                                                <td>
                                                    <div className="row p-2 gap-3">
                                                        <div className="col-1 p-0 text-center">
                                                            <img
                                                                src="{/image/1434977143jpjpjpjpj.webp}"
                                                                style={{ width: 40 }}
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="col text-left p-0">
                                                            <p className="fw-bold m-0">{collegeData.colleges || "College Name"}</p>
                                                            <span className="px-1 border-end ps-0">City name</span>{" "}
                                                            <span>⭐️ {collegeData.rating}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="row  d-flex gap-1">

                                                        <div className="col">
                                                            <span>
                                                                <span>
                                                                    <strong>#{collegeData.rank || "NA"}</strong>
                                                                </span>{" "}
                                                                Out of 312 in india
                                                            </span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span>{collegeData.cutOff || "NA"}</span> {/* Access cut-off from data or display NA */}
                                                </td>
                                                <td>
                                                    <span>{collegeData.applicationDate || "NA"}</span>
                                                </td>
                                                <td>
                                                    <span>{collegeData.fees || "NA"}</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    )
                                })
                            }
                        </table>
                    </div>
                </div>
            </>




        </>
    );
};

export default SingleCourse;
