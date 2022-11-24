import React, {Component} from "react";

class Checkout extends Component{
    render(){
        return(
            <div>
                <h2>Checkout</h2>
                <div className="order">
                    <h3>Order Details</h3>
                    <p>Cheese: {window.$order[0]}</p>
                    <p>Pepperoni: {window.$order[1]}</p>
                    <p>Total</p>
                </div>
            </div>
        );
    }
}

export default Checkout;