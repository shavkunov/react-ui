import $ from "jquery";
import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './css/main.css';

class StartForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: "",
            posts: 0.
        };
    }

    render () {
        // TODO : handle form input: errors, validation. Need to generate forms
        return (
            <div className={styles.flexCenterStyle}>

                    <TextField
                        floatingLabelText="Link"
                        onChange={this.handleIdChange.bind(this)}/> <br />

                    <TextField
                        floatingLabelText="Posts"
                        onChange={this.handlePostsChange.bind(this)}/> <br />

                    <RaisedButton label="Submit"
                                  onClick={this.handleSubmit.bind(this)}/> <br />

            </div>
        );
    }

    handleSubmit = () => {
        // TODO : make one file with server's name and port
        let url = "http://localhost:8080/link=" + this.state.id + "&posts=" + this.state.posts;
        message = url;
        $.getJSON(url, function (data) {
            alert(message)
        });
    };

    // TODO : one function
    handleIdChange = (event) => {
        this.setState({
            id: event.target.value,
        });
    };

    handlePostsChange = (event) => {
        this.setState({
            posts: event.target.value,
        });
    };
}

export default StartForm;