const PhoneTournament = () => {
    return (<>
        <div className="container-fluid p-0 position-relative">
            <div className="">
                <img src={require("../../assets/Firefly sports 8882.jpg")}
                    className="w-100"
                    alt="" />
            </div>
            <div className="shaded position-absolute top-0"></div>
            <div className="position-absolute top-0">
                <div className="col-1  p-2">
                    1
                </div>
                <div className="col-8 ">
                    2
                </div>
                <div className="col-3">
                    3
                </div>
            </div>
        </div>
    </>)
}

export default PhoneTournament