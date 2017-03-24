import React, { Component } from 'react';
import Buttons from './Buttons';
import Results from './Results';


export default class App extends React.Component {
    constructor(){
        super();
        this.state= {
            visiblePokemons : []
        }
    }
    changeVisiblePokemons(visiblePokemons){
        this.setState({visiblePokemons});
    }

    getGenerationList(){

        let xhr = new XMLHttpRequest();

        xhr.open("GET", "http://pokeapi.co/api/v2/generation/", false);
        xhr.send();

        return JSON.parse(xhr.responseText);
    }
    render(){

        return (
            <div className="container">
                <h1>Pokedex</h1>
                <div className="row">
                    <div className="col-md-3">
                        <Buttons generationList={this.getGenerationList()} changeVisiblePokemons={this.changeVisiblePokemons.bind(this)}/>
                    </div>
                    <div className="col-md-9">
                        <Results visiblePokemons={this.state.visiblePokemons} changeVisiblePokemons={this.changeVisiblePokemons.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }
}
