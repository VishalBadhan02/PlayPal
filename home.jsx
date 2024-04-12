import AppLayout from "../layouts/appLayout";

const Home = () => {
    return (
        <AppLayout>
            <div className="container-fluid mx-1">
                <div className="row">
                    <div className="col-2 sidebar text-center p-2  text-white position-relative ">
                        <ul className="list-group list-group-numbered p-2">
                            <li className="p-2">Home</li>
                            <li className="p-2">Shopping</li>
                            <li className="p-2">Match Wins</li>
                            <li className="p-2">Your points </li>
                            <li className="p-2">Add member</li>
                            <li className="p-2">Your Team</li>
                            <li className="p-2">Fixed Matches</li>
                        </ul>
                        <div className="position-absolute list-group-numbered bottom-0 ">
                            <li className="p-2 fw-bold">Log Out</li>

                        </div>
                    </div>
                    <div className="col-10 px-1 position-relative ">
                        <div className="border border-2 rounded-3 ">
                            <img
                                src={require("../assets/pexels-jeandaniel-francoeur-2570139.jpg")}
                                className="w-100 rounded-3 "
                                style={{ height: 600 }}
                                alt=""
                            />
                            <div className=" position-absolute p-5 top-0 w-100 text-center">
                                <button
                                    className="btn rounded-circle border me-5 ms-5 sportbtn "
                                    style={{ height: 90, width: 90 }}
                                >
                                    Cricket
                                </button>
                                <button
                                    className="btn rounded-circle border me-5   ms-5 sportbtn"
                                    style={{ height: 90, width: 90 }}
                                >
                                    Cricket
                                </button>
                                <button
                                    className="btn rounded-circle border me-5 ms-5 sportbtn"
                                    style={{ height: 90, width: 90 }}
                                >
                                    Cricket
                                </button>
                                <button
                                    className="btn rounded-circle border me-5 ms-5 sportbtn"
                                    style={{ height: 90, width: 90 }}
                                >
                                    Cricket
                                </button>
                                <button
                                    className="btn rounded-circle border me-5 ms-5 sportbtn"
                                    style={{ height: 90, width: 90 }}
                                >
                                    Cricket
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>






    )
}

export default Home;