import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header"

import "../styles/common/error.css"
function ErrorPage() {
    return (
        <div className="container">
            <Header/>
            <h1>Error 404</h1>
            <Footer/>
        </div>
    );
}

export default ErrorPage