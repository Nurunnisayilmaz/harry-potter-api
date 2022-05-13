import React from 'react';

class Header extends React.Component{
render() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Harry Potter</a>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        <a className="nav-link "   href="#">Movies</a>
                        <a className="nav-link "   href="#">Characters</a>
                        <a className="nav-link "   href="#">Spells</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
}

export default Header;