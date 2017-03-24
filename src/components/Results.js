import React from 'react';
import ResultRow from './ResultRow';

export default  class Results extends React.Component{
    render(){
        let rows = [];

        for (let i = 0 ; i < this.props.visiblePokemons.length ; i++){
            rows.push(<ResultRow pokemon={this.props.visiblePokemons[i]} />);
        }

        console.log(this.props.visiblePokemons);

        return ( <div className="results">{rows}</div> );
    }
};