import AuthFooter from "./authFooter"
import AuthHeader from "./authheader"

const AuthLayout = (props) => {
    return (
        <>
            <AuthHeader />
            {props.children}
            <AuthFooter />
        </>

    )
}

export default AuthLayout;