import React, {Component} from "react";

class Checkout extends Component{
    render(){
        return(
            <div>
                <h2>Checkout</h2>
                <div className="order">
                    <h3>Order Details</h3>
                    <p>Cheese: {localStorage.getItem("Cheese")}</p>
                    <p>Pepperoni: {localStorage.getItem("Pepperoni")}</p>
                </div>
            </div>
        );
    }
}

export default Checkout;