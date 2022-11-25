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

    function createOrder(){
        localStorage.setItem("Cheese",0);
        localStorage.setItem("Pepperoni",0);
    }


    function increaseCheese(){
        var quantity=Number(localStorage.getItem("Cheese"));
        quantity++;
        localStorage.setItem("Cheese",quantity.toString());
        console.log("Pizza: Cheese"+" quantity: "+quantity);
        //localStorage.setItem("Cheese",quantity+1);
        //var tempItem=localStorage.getItem(pizzaId);
        //localStorage.setItem(tempItem.pizzaType,tempItem.quantity++);
        //orderDetails[pizzaId].quantity++;
        //console.log(orderDetails[pizzaId].quantity);
        //localStorage.setItem(orderDetails[pizzaId].pizzaType,orderDetails[pizzaId].quantity);
       // localStorage.setItem(orderDetails[pizzaId].pizzaType,orderDetails[pizzaId].quantity++);
    }


    function increasePepperoni(){
        var quantity=Number(localStorage.getItem("Pepperoni"));
        quantity++;
        localStorage.setItem("Pepperoni",quantity.toString());
        console.log("Pizza: Pepperoni"+" quantity: "+quantity);
        //localStorage.setItem("Cheese",quantity+1);
        //var tempItem=localStorage.getItem(pizzaId);
        //localStorage.setItem(tempItem.pizzaType,tempItem.quantity++);
        //orderDetails[pizzaId].quantity++;
        //console.log(orderDetails[pizzaId].quantity);
        //localStorage.setItem(orderDetails[pizzaId].pizzaType,orderDetails[pizzaId].quantity);
       // localStorage.setItem(orderDetails[pizzaId].pizzaType,orderDetails[pizzaId].quantity++);
    }

class Menu extends Component{
    increaseCheese(){
        var quantity=Number(localStorage.getItem("Cheese"));
        quantity++;
        localStorage.setItem("Cheese",quantity.toString());
        console.log("Pizza: Cheese"+" quantity: "+quantity);
        //localStorage.setItem("Cheese",quantity+1);
        //var tempItem=localStorage.getItem(pizzaId);
        //localStorage.setItem(tempItem.pizzaType,tempItem.quantity++);
        //orderDetails[pizzaId].quantity++;
        //console.log(orderDetails[pizzaId].quantity);
        //localStorage.setItem(orderDetails[pizzaId].pizzaType,orderDetails[pizzaId].quantity);
       // localStorage.setItem(orderDetails[pizzaId].pizzaType,orderDetails[pizzaId].quantity++);
    }

    render(){         
        return(
            <div>
                <h2>Menu</h2>
                <ul className="content">   
                        <li><Link to={{pathname: "../components/pages/cart/Checkout"}}><img alt="cheese" src={cheese} onClick={increaseCheese()}/>Cheese Pizza: {localStorage.getItem("Cheese")}</Link></li>
                        <li><NavLink to="../components/pages/cart/Checkout"><img alt="pepperoni" src={pepperoni} onClick={increasePepperoni()}/>Pepperoni Pizza: {localStorage.getItem("Pepperoni")}</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default Menu;