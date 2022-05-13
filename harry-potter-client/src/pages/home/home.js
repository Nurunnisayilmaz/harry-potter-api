import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

function Home() {
    return (
        <div className="App">
            <div className="header">
                <Header/>
            </div>
            <div className="router">
                <div className="router-body">
                    <img className="homePhoto" src="https://wallpaper.dog/large/5485030.jpg"  className="img-fluid" alt="harryPotterHomeImage" ></img>
                </div>
            </div>
            <div className="footer">
                <Footer/>
            </div>

        </div>
    );
}

export default Home;

