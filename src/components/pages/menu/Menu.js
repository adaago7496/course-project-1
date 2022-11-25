import React, {Component, useState} from "react";
import {
    Route, Routes,
    NavLink, HashRouter,Link
} from "react-router-dom";
import cheese from "./cheese.jpg";
import pepperoni from "./pepperoni.jpg";
import "./Menu.css";

//const orderDetails=JSON.parse(localStorage.getItem("orderDetails"));
//const newOrderDetails=JSON.stringify([...orderDetails,{name:"new item"}]);
//localStorage.setItem("myItems",newOrderDetails);

var orderDetails=[
    {
        id:0,
        pizzaType: "Cheese",
        quantity: 0
    },
    {   
        id:1,
        pizzaType: "Pepperoni",
        quantity:0
    }];

    function addToOrder(pizzaId){
        var quantity=Number(localStorage.getItem("Cheese"));
        console.log(quantity);
        localStorage.setItem("Cheese",quantity++);
        //var tempItem=localStorage.getItem(pizzaId);
        //localStorage.setItem(tempItem.pizzaType,tempItem.quantity++);
        //orderDetails[pizzaId].quantity++;
        //console.log(orderDetails[pizzaId].quantity);
        //localStorage.setItem(orderDetails[pizzaId].pizzaType,orderDetails[pizzaId].quantity);
       // localStorage.setItem(orderDetails[pizzaId].pizzaType,orderDetails[pizzaId].quantity++);
    }

class Menu extends Component{
    render(){         
        return(
            <div>
                <h2>Menu</h2>
                <ul className="content">   
                        <li>{orderDetails[0].pizzaType}</li>
                        <li><Link to={{pathname: "../components/pages/cart/Checkout"}}><img alt="cheese" src={cheese} onClick={addToOrder(0)}/>Cheese Pizza: {localStorage.getItem("Cheese")}</Link></li>
                        <li><NavLink to="../components/pages/cart/Checkout"><img alt="pepperoni" src={pepperoni} onClick={addToOrder("Pepperoni")}/>Pepperoni Pizza</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default Menu;