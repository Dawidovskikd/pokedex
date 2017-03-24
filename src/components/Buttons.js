import React, { Component } from 'react';
import Button from './Button';

export default class Buttons extends React.Component {
    render(){
        let buttons = [];

        //Get all pokemons button

        buttons.push(<Button
            changeVisiblePokemons={this.props.changeVisiblePokemons}
            name='All pokemons'
            requestURL="http://pokeapi.co/api/v2/pokemon/"
        />)

        // Sort by generation buttons

        for (let i = 0 ; i < this.props.generationList.count ; i++){
            buttons.push(<Button
                changeVisiblePokemons={this.props.changeVisiblePokemons}
                name={this.props.generationList.results[i].name}
                requestURL={this.props.generationList.results[i].url} />
            )
        }

        return (
            <div>{buttons}</div>
        );
    }
}