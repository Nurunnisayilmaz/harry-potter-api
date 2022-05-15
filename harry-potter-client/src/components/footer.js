import React from 'react';
import "./footer.css";

class Footer extends React.Component{
    render() {
        return(
            <footer className="footer mt-auto py-3 bg-light">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#" >Github</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link "  href="#" >LinkedIn</a>
                    </li>
                </ul>
            </footer>
        )
    }
}

export default Footer;