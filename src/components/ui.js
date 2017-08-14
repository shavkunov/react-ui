import React from 'react';
import StartForm from './start-form'
import $ from "jquery";
import StatsView from './stats-view'
import Paper from 'material-ui/Paper';
var jsonSource = require('./source.js');

const paper = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15px",
    width: "90%",
};

var center = {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
};

class UI extends React.Component {
    constructor() {
        super();

        this.state = {
            isTableLoaded: false,
            table: null
        }
    }

    renderTable = () => {
        if (this.state.isTableLoaded) {
            return (
                <Paper zDepth={4} style={paper}>
                    <StatsView name={this.state.name} posts={this.state.posts} table={this.state.table}/>
                </Paper>
            );
        }
    }

    render() {
        return (
            <div style={center}>
                <StartForm handleSubmit={this.handleSubmit.bind(this)}/>
                {this.renderTable()}
            </div>
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