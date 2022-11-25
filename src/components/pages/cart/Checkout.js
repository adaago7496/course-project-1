import React, {Component} from "react";
import OrderDetails from "./OrderDetails";

class Checkout extends Component{
    render(){
        return(
            <div>
                <h2>Checkout</h2>
                <div className="order">
                    <h3>Order Details</h3>
                    <OrderDetails />
                    <p>Cheese: {localStorage.getItem("Cheese")}</p>
                    <p>Pepperoni: {localStorage.getItem("Pepperoni")}</p>
                    <hr></hr>
                    <p>Total: {Number(localStorage.getItem("Cheese"))+Number(localStorage.getItem("Pepperoni"))} Pizzas</p>
                </div>
            </div>
        );
    }
}

export default Checkout;