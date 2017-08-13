import React from 'react';
import StartForm from './start-form'
import $ from "jquery";
import StatsView from './stats-view'
var jsonSource = require('./source.js');

class UI extends React.Component {
    constructor() {
        super();

        this.state = {
            isTableLoaded: false,
            table: null
        }

    }

    render() {
        if (this.state.isTableLoaded) {
            return (
                <div>
                    <StartForm handleSubmit={this.handleSubmit.bind(this)}/>
                    <StatsView name={this.state.name} posts={this.state.posts} table={this.state.table}/>
                </div>
            );
        }


        return (
            <StartForm handleSubmit={this.handleSubmit.bind(this)}/>
        );
    }

    handleSubmit = (link, posts) => {
        // TODO : make one file with server's name and port
        let url = "http://localhost:8080/link=" + link + "&posts=" + posts;   

        this.setState({
            name: "alfabank",
            posts: posts,
            isTableLoaded: true,
            table: jsonSource.json
        });
        /*$.getJSON(jsonSource.json, function (data) {
            console.log("json loaded");
            alert("average likes: " + data.averageLikes);
        });*/
    };
}

export default UI;