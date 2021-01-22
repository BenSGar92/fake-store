import React, { Component } from 'react';
import axios from 'axios';

export default class Main extends Component {
    constructor() {
        super();
        this.state ={
            doSomething: "nothing here yet!"
            //in the example I'm looking at the button will query an api and return weather however I'm doing things differently to test the backend first
        };
    }

    handleButtonClick = () => {
        //this axios request will connect to the backend to grab the simple string "2 + 2 does equal 4!" just as a basic example of connecting my frontend to m backend
        axios.get("/newEndPoint").then(response => {
            console.log(response.data);
            this.setState({
                doSomething: response.data
            })
        })
    };

    render() {
        return (
            <div>
                <button onClick={this.handleButtonClick}>Press this dang button</button>
                <h1>Hello this is the main page and there is {this.state.doSomething}</h1>
            </div>
        )
    }
}
