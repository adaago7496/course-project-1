import React, {Component} from "react";
import {
    Route, Routes,
    NavLink, HashRouter
} from "react-router-dom";
import cheese from "./cheese.jpg";
import pepperoni from "./pepperoni.jpg";
import "./Menu.css";

class Menu extends Component{
    render(){
        return(
            <div>
                <h2>Menu</h2>
                <ul className="content">                
                    <ul>
                        <li><NavLink to="../components/pages/cart/Checkout"><img alt="cheese" src={cheese} onClick={window.$order[0]++}/>Cheese Pizza</NavLink></li>
                    </ul>
                    <ul>
                        <li><NavLink to="../components/pages/cart/Checkout"><img alt="pepperoni" src={pepperoni} onClick={window.$order[1]++}/>Pepperoni Pizza</NavLink></li>
                    </ul>
                </ul>
            </div>
        );
    }
}

export default Menu;