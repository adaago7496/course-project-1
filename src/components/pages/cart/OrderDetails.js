import React, {Component} from "react";

var cheeseCount=Number(localStorage.getItem("Cheese"));
var pepperoniCount=Number(localStorage.getItem("Pepperoni"));

function addCheese(){
    if(cheeseCount>0){
        return(
            "Number of Cheese Pizza: "+cheeseCount+'\u000A'
        );
    }
}

function addPepperoni(){
    if(pepperoniCount>0){
        return(
            "Number of Pepperoni Pizza: "+pepperoniCount+"\n"
        );
    }
}

function createOrder(){
    var orderInfo=addCheese()+'\u000A'+addPepperoni();
    localStorage.setItem("OrderInfo",orderInfo);

}

class OrderDetails extends Component{
    render(){
        return(
            //{addCheese}
            //addPepperoni()
            createOrder()
        );
    }
}

export default OrderDetails;