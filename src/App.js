import React from 'react';
import {Link, Route, Routes} from "react-router";
import Home from "./Pages/Home";
import About from "./Pages/About";
import News from "./Pages/News";

function App() {

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/news">News</Link>
                    </li>

                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path={'/'} element={<Home/>} errorElement={<About/>}/>
                <Route path={'/news'} element={<News/>}/>
                <Route path={'/about'} element={<About/>}/>
            </Routes>
        </div>

    );
}

export default App;
