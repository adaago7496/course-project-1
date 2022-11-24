import React, {Component} from "react";
import bogo from "./BOGO.png";

class Specials extends Component{
    render(){
        return(
            <div>
                <h2>Specials</h2>
                <img alt="BoGo" src={bogo}/>
            </div>
        );
    }
}

export default Specials;