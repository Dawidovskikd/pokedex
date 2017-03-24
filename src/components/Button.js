import React, { Component } from 'react';


export default class Button extends React.Component{
    changeVisiblePokemons() {

        let xhr = new XMLHttpRequest();

        xhr.open("GET", this.props.requestURL, false);
        xhr.send();

        let responseJSON = JSON.parse(xhr.responseText);
        this.props.changeVisiblePokemons(responseJSON.pokemon_species || responseJSON.results);
    }
    render(){
        return (
            <div className="menu-btn_container">
                <button className="btn menu-btn" onClick={this.changeVisiblePokemons.bind(this)}>{this.props.name}</button>
            </div>
        )
    }
}
