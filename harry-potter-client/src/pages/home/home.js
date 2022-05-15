import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import "./home.css";

const harryPotterImage = new URL("../../image/hpImage.jpg",import.meta.url);

function Home() {
    return (
        <div className="App">
            <div className="header">
                <Header/>
            </div>
            <div className="homeRouter">
                <div className="homeRouter-body">
                   <img className="harryPotterImage" src={harryPotterImage}  className="img-fluid" alt="harryPotterHomeImage" ></img>
                </div>
            </div>
            <div className="footer">
                <Footer/>
            </div>

        </div>
    );
}

export default Home;

