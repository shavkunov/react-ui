import React from 'react';
import Divider from 'material-ui/Divider';

class PostView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h5> link: TODO link </h5>

                <Divider />

                <p> {this.props.data.text} </p>
            </div>
        );
    }
}

export default PostView;