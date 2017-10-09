import React, {Component} from 'react';

export default class PaneComponent extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>{this.props.up}</h1>
                <h2>{this.props.down}</h2>
            </div>
        )
    }
}



 