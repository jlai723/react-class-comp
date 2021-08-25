import React, { Component } from "react";

class Film extends Component {
    render() {
        return <li key={this.props.film.id}>{ this.props.film.title }</li>
    }
}

export default Film;