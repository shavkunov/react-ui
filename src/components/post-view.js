import React from 'react';
import Divider from 'material-ui/Divider';

class PostView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h5> <a href={this.props.data.postLink}> post link</a> </h5>
                <Divider />

                <p> {this.props.data.text} </p>
            </div>
        );
    }
}

export default PostView;