import React, { Component } from "react";

class Films extends Component {
    // State & Props
    constructor() {
        super()
        this.state = {
            loaded: false,
            results: []
        }
    }

    // This is the same goal as useEffect(() => {}, [])

    async componentDidMount() {
        let res = await fetch("https://ghibliapi.herokuapp.com/films");
        let json = await res.json();
        
        this.setState({
            loaded: true,
            results: json
        })
    }

    render() {
        console.log(this.state);
        return (
            <div>
                {!this.state.loaded
                    ? "Loading"
                    : this.state.results.map((film, index) => <li key={index}>{film.title}</li>)
                }
            </div>
        )
    }
}

/*
const Films = () => {
    return(
        <>
        This is the films component.
        </>
    )
}
*/

export default Films;