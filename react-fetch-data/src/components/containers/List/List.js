import React, { Component } from 'react';
import axios from 'axios';
import Item from './Item/Item';
import { Link } from 'react-router-dom';

class List extends Component {

    state = {
        items: []
    }

    componentDidMount () {
        axios.get('https://rickandmortyapi.com/api/episode')
            .then( response => {
                this.setState({items: response.data.results});
            });
    }

    selectedPost = (id) => {
        this.setState({selectedPost: id})
    }

    render() {

        const items = this.state.items.map(items => {
            return (
                <Link to={'/' + items.id} key={items.id}>
                    <Item key={items.id}
                    id={items.id}
                    title={items.name}/>
                </Link>
            );
        });

        return (
        <div className="container">
            <h1>Episodes</h1>
            {items}
        </div>
        );
    }
}

export default List;
