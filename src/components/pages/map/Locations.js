import React, {Component} from "react";
import Map from "./Map.png";

class Locations extends Component{
    render(){
        return(
            <div>
                <h2>Locations</h2>
                <img alt="Locations" src={Map}/>
                <ul className="body">
                    <li>D.C.</li>
                    <li>Maryland</li>
                    <li>Virginia</li>
                </ul>
            </div>
        );
    }
}

export default Locations;