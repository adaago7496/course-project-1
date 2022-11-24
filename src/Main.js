import React, {Component} from "react";
import {
    Route, Routes,
    NavLink, HashRouter
} from "react-router-dom";
import Home from "./components/pages/Home";
import Menu from "./components/pages/menu/Menu";
import Specials from "./components/pages/menu/Specials";
import Locations from "./components/pages/map/Locations";
import Checkout from "./components/pages/cart/Checkout";

window.$order=[0,0]

class Main extends Component{
    render(){
        return(
            <HashRouter>
                <div>
                    <h1>Pizza Boli's</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/components/pages/menu/Menu">Menu</NavLink></li>
                        <li><NavLink to="/components/pages/menu/Specials">Specials</NavLink></li>
                        <li><NavLink to="/components/pages/map/Locations">Locations</NavLink></li>
                        <li><NavLink to="/components/pages/cart/Checkout">Checkout</NavLink></li>
                    </ul>
                    <div className="content">
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route path="/components/pages/menu/Menu" element={<Menu/>}/>
                        <Route path="/components/pages/menu/Specials" element={<Specials/>}/>
                        <Route path="/components/pages/map/Locations" element={<Locations/>}/>
                        <Route path="/components/pages/cart/Checkout" element={<Checkout/>}/>
                    </Routes>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;