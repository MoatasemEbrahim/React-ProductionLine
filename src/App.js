import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Route} from "react-router-dom";
import FactoryLine from "./routes/FactoryLineRoute"
import ProcessLine from "./routes/ProcessLineRoute"
// import { Link, Router } from "@reach/router"


export default class App extends Component {


    render() {
        return (
            <BrowserRouter>
                <div className='App'>
                    <Route path='/order' exact component={FactoryLine}/>
                    <Route path='/dep' exact component={ProcessLine}/>
                </div>
            </BrowserRouter>
        );
    }


}
