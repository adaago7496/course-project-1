import React, {Component} from "react";
import {
    Route, Routes,
    NavLink, HashRouter,Link
} from "react-router-dom";
import newOrder from "./newOrder.png";

var myArray=[1,2,3,4,5];

var test=myArray.map((item)=><p>{item}</p>);

class Home extends Component{
    render(){
        return(
            <div className="body">
                <h2>Welcome to Pizza Boli's</h2>
                <p>Check Out our new Deals!</p>
                <Link to="./components/pages/menu/Menu"><img alt="NewOrder" src={newOrder}></img></Link>
            </div>
        );
    }
}

export default Home;