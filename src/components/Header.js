import React, { Component } from 'react';


export default class Header extends Component{
    constructor(props){
        super(props);
        this.state = {isOn: true};
    }

    buttonToggle =() => {
        this.setState( pre => ({
            isOn: !pre.isOn
        })
    );
    } 
    render() {
        return(
            <div>
                <button onclick = {this.buttonToggle} >
                    <h1>This is button toggle :</h1>
                    {this.state.isOn ? "ON" : "OFF"}

                </button>
                
                
            </div>
        );
    }
}