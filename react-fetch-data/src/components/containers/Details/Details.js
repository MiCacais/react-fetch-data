import React, { Component } from 'react';
import axios from 'axios';
import Character from './Character/Character';
import { Link } from 'react-router-dom';

class Details extends Component {

    state = {
        selectedEp: this.props.match.params.id,
        posts: [],
        characters: []
    }

    componentDidMount () {
        axios.get('https://rickandmortyapi.com/api/episode/' + this.state.selectedEp)
            .then( response => {
                this.setState({posts: response.data});
                 for (var i = 0; i < this.state.posts.characters.length; i++){
                    axios.get(this.state.posts.characters[i])
                        .then( res => {
                            this.setState({characters: [...this.state.characters, res.data]});
                        });
                 }
            });
    }

    render() {
        const characters = this.state.characters.map(characters => {
            return <Character key={characters.id} name={characters.name} img={characters.image}/>;
        });

        return (
        <div>
            <div class="jumbotron text-center">
                <h1 class="display-4">{this.state.posts.name}</h1>
                <hr class="my-4"/>
                <p class="lead">Reference: {this.state.posts.episode}</p>
                <Link to='/' className="btn btn-outline-secondary">Back</Link>
            </div>
            <h4>Characters:</h4>
            <div className="container">{characters}</div>
        </div>
        );
    }
}

export default Details;
