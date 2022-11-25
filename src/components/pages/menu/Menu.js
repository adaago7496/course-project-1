import React, {Component, useState} from "react";
import {
    Route, Routes,
    NavLink, HashRouter,Link
} from "react-router-dom";
import cheese from "./cheese.jpg";
import pepperoni from "./pepperoni.jpg";
import "./Menu.css";

const items=JSON.parse(localStorage.getItem("pizzas"));
const newItems=JSON.stringify([...items,{name:"new item",quantity:0}]);
localStorage.setItem("myItems",newItems);

class Menu extends Component{
    render(){         
        return(
            <div>
                <h2>Menu</h2>
                <ul className="content">                
                    <ul>
                        <li><Link to={{pathname: "../components/pages/cart/Checkout"}}>
                                        <img alt="cheese" src={cheese} onClick={localStorage.setItem("CheesePizza","Cheese")}/>Cheese Pizza</Link></li>
                    </ul>
                    <ul>
                        <li><NavLink to="../components/pages/cart/Checkout"><img alt="pepperoni" src={pepperoni} onClick={window.$order[0]++}/>Pepperoni Pizza</NavLink></li>
                    </ul>
                </ul>
            </div>
        );
    }
}

export default Menu;