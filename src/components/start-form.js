import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './css/main.css';
//var jsonSource = require('./source.js');

class StartForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            link: "",
            posts: 0
        };
    }

    render() {
        // TODO : handle form input: errors, validation. Need to generate forms
        return (
            <div className={styles.flexCenterStyle}>

                    <TextField
                        floatingLabelText="Link"
                        onChange={this.handleLinkChange.bind(this)}/> <br />

                    <TextField
                        floatingLabelText="Posts"
                        onChange={this.handlePostsChange.bind(this)}/> <br />

                    <RaisedButton label="Submit"
                                  onClick={this.props.handleSubmit.bind(null, this.state.link, this.state.posts)}/> <br />

            </div>
        );
    }

    // TODO : one function
    handleLinkChange = (event) => {
        this.setState({
            link: event.target.value,
        });
    };

    handlePostsChange = (event) => {
        this.setState({
            posts: event.target.value,
        });
    };
}

export default StartForm;