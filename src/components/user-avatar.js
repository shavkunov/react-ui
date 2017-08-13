import React from 'react';
import Avatar from 'material-ui/Avatar';

class UserAvatar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Avatar src={this.props.photo} />
        );
    }
}

export default UserAvatar;