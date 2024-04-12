import Footer from "../components/footer"
import Header from "../components/header"
const AppLayout = (props) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )


}

export default AppLayout;