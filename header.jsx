const Header = () => {
    return (
        <>
            <div className="header bg-warning rounded-4 m-1">
                <div className="container-fluid p-3 ">
                    <div className="row align-items-center ">
                        <div className="col-2 fs-1 text-center navbar-brand">connectHUB</div>
                        <div className="col-5">
                            <input
                                type="text"
                                className="form-control search-input"
                                placeholder="Search here"
                                aria-label="Search"
                                aria-describedby="basic-addon1"
                            />
                        </div>
                        <div className="col-2">
                            <button className="btn location-btn">
                                <img
                                    src={require("../assets/settings.png")}
                                    alt="Settings"
                                    className="settings-icon"
                                />
                                Choose your location
                            </button>
                        </div>
                        <div className="col-3 d-flex justify-content-end">
                            <button className="btn rounded-circle">
                                <img
                                    src={require("../assets/user.png")}
                                    alt="User"
                                    className="user-icon"
                                />
                            </button>
                            <button className="btn rounded-circle">
                                <img
                                    // src={require("../assets/cart-icon.svg")}
                                    alt="Cart"
                                    className="cart-icon"
                                />
                            </button>
                            <button className="btn rounded-circle">
                                <img
                                    src={require("../assets/setting1.png")}
                                    alt="Settings"
                                    className="settings-icon"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header;