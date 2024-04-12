import AuthFooter from "./authFooter";
import AuthHeader from "./authheader";

const AuthLogin = (props) => {
    return (
        <>
            <AuthHeader />
            {props.children}
            <AuthFooter />
        </>
    )
}

export default AuthLogin;