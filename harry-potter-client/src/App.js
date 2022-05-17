import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom";
import Home from "./pages/home/home"
import Character from "./pages/characters/characters";
import Movie from "./pages/movies/movies";
import Spell from "./pages/spells/spells";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
    return (
        <div className="App">
            <div className="header">
                <Header/>
            </div>

            <BrowserRouter>
                <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/movies" element={<Movie />} />
                        <Route path="/spells" element={<Spell />} />
                        <Route path="/characters" element={<Character />} />
                </Routes>
            </BrowserRouter>

            <div className="footer">
                <Footer/>
            </div>

        </div>
    );
}

export default App;
