import React, { Component } from "react";

import Film from "./Film";

class Films extends Component {
    // State & Props
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            loaded: false,
            results: [],
            people: [],
            fname: this.props.fname
        }
        console.log(this.state)
    }

    // This is the same goal as useEffect(() => {}, [])

    async componentDidMount() {
        let res = await fetch("https://ghibliapi.herokuapp.com/films/");
        let json = await res.json();
        
        this.setState({
            loaded: true,
            results: json
        })
    }

    // After the results are set, if the people [] is empty, get all of the people from each film
    async componentDidUpdate() {
        let { people, results } = this.state;
        let peopleUrls = [];
        if (results && people.length === 0) {
            for (let i = 0; i < results.length; i++) {
                for (let j = 0; j < results[i].people.length; j++) {
                    console.log(results[i].people[j])
                    peopleUrls.push(results[i].people[j])
                }
            }
            console.log(peopleUrls)
            console.log(results)
        }
    }

    render() {
        let { favNumber } = this.props;
        console.log(this.state)
        return (
            <div>
                {favNumber}
                {!this.state.loaded
                    ? "Loading"
                    // Display films with a custom Film Class Component
                    : this.state.results.map((film) => <Film film={film}/>)
                }
                {/* Display people's names */}
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