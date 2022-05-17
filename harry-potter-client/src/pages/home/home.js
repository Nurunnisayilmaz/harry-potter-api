import React from "react";
import "./home.css";

const harryPotterImage = new URL("../../image/hpImage.jpg",import.meta.url);

function Home() {
    return (
        <div className="">
            <div className="homeRouter">
                <div className="homeRouter-body">
                   <img className="harryPotterImage" src={harryPotterImage}  className="img-fluid" alt="harryPotterHomeImage" ></img>
                </div>
            </div>
        </div>
    );
}

export default Home;

