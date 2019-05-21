import React, { Component } from 'react';
import '../App.css';
// import { Link } from "@reach/router";
import Line from "../components/productionLine-order"


export default class App extends Component {

    render() {
        return (<div>
            {/* <Link to="/link">Home</Link> */}
            <Line></Line>
        </div>)

    }

}