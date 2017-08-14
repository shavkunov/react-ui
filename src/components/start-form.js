import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const center = {
	display: "flex",
	flexDirection: "column",
	flexWrap: "wrap",
	justifyContent: "center",
	alignItems: "center",
};

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
        // TODO : request url to user, but need only id, so need to cut vk prefix
        return (
            <div style={center}>

                    <TextField
                        floatingLabelText="Link"
                        onChange={this.handleLinkChange.bind(this)}
                        /> 

                    <TextField
                        floatingLabelText="Posts"
                        onChange={this.handlePostsChange.bind(this)}
                        /> 

                    <RaisedButton label="Submit"
                                  onClick={this.props.handleSubmit.bind(null, this.state.link, this.state.posts)}
								  />

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