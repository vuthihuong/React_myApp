import React, {Component} from 'react';

function ListExample(props){
    return(
        <li>{this.props.value}</li>
    );
    
}

export default class Example extends Component{
    constructor(props){
        super(props);
        this.ListExample = props.arr.map(
            (curVal, index) => <ListExample key = {curVal} value = {index.toString() + "-" + curVal} />    
        
    );
}
    
    render(){
        return(
            <ul>
                {this.ListExample}
            </ul>
        );
    }
}




