import React from 'react';
import $ from 'jquery';

export default class ResultRow extends React.Component {
    constructor(){
        super();
        this.state = {
            pokemonData : {
                name : '',
                sprites : {
                    front_default : ''
                }
            },
        }
    }
    updatePokemonData(pokemonData){
        this.setState({pokemonData});
    }

    render(){

        let request = $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${this.props.pokemon.name}/`,
            type: "GET",
        });

        let self = this;
        request
            .done(function (response, textStatus, jqXHR){
                self.updatePokemonData( response );
            })
            .fail(function (jqXHR, textStatus, errorThrown){
                console.error(
                    "The following error occurred: "+
                    textStatus, errorThrown
                );
            })
            .always(function () {
            });

        return(
            <div className="pokemon_container">
                <span className="pokemon_name">{this.props.pokemon.name}</span>
                <span className="pokemon_img"><img src={this.state.pokemonData.sprites.front_default} /></span>
            </div>
        )
    }
}
