import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import PageTitle from "../components/layout/PageTitle";

import "../styles/pagelayout.css"
function ContactPage() {
    return(
        <div className="container">
        <Header/>
        <PageTitle pageIndex={3}/>
        <h1>Contact Page</h1>
        <Footer/>
        </div>
    );
}

export default ContactPage