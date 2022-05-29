import CardList from "../components/CardList";
import React, { Component } from "react";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: "",
        };
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((users) => this.setState({ robots: users }));
    }
    onFieldValueChange = (event) => {
        this.setState({ searchField: event.target.value });
    };
    render() {
        const { robots, searchField } = this.state
        const filteredRobots = robots.filter((robot) => {
            return robot.name
                .toLowerCase()
                .includes(searchField.toLowerCase());
        });
        return !robots.length ? (
            <h1 className="tc">Loading</h1>
        ) : (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox onFieldValueChange={this.onFieldValueChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        );
    }
}

export default App;
