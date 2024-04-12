const AuthHeader = () => {
    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="col-7 bg-tertiary text-center">
                    <img
                        className="back"
                        src={require("../assets/login logo.png")}
                        style={{ width: 150, mixBlendMode: 'multiply' }}
                        alt=""
                    />
                </div>
            </div>

        </>
    )
}

export default AuthHeader;