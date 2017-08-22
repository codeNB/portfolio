'use strict';
import React,{Component} from "react";
import {AppHeader} from "../component";

class AppContainer extends Component{
    render(){
        return(
            <div>
                <AppHeader/>
                <label>App</label>
            </div>
        )
    }
}

export default AppContainer;