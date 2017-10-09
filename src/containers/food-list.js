import React, {Component} from 'react';
import {container} from 'react-redux';

class FoodList extends Component{
    render(){
        return(
            <ul>
                <li></li>
            </ul>
        );
    }
}

function mapStateToProps(state){
    return{
        foods: state.foods  
                       
    }
}

let FoodContainer = co