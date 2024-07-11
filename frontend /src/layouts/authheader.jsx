const AuthHeader = () => {
    return (
        <>
            <div className="d-flex justify-content-center position-relative ">
                <div className="col-4 bg-tertiary text-center">
                    <img
                        className="back mt-5"
                        src={require("../assets/final_logo_mode-removebg-preview.png")}
                        style={{ width: 150, mixBlendMode: 'multiply' }}
                        alt=""
                    />
                </div>
            </div>

        </>
    )
}

export default AuthHeader;