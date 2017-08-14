import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Reposts from 'material-ui/svg-icons/social/share';
import Favorite from 'material-ui/svg-icons/action/favorite';
import Visibility from 'material-ui/svg-icons/action/visibility';

const center = {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
};

class StatsHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let statsHeader = "stats of " + this.props.posts + " last posts";
        return (
            <div style={center}>
                <List>
                    <ListItem disabled={true} leftAvatar={<Avatar src={this.props.owner.photo} />} primaryText={this.props.owner.name} />
                </List>

                <p> {statsHeader} </p>

                <List>
                  <Subheader> Average values </Subheader>
                  <Divider />
                  <ListItem disabled={true} primaryText={this.props.averageLikes} leftIcon={<Favorite />} />
                  <ListItem disabled={true} primaryText={this.props.averageReposts} leftIcon={<Reposts />} />
                  <ListItem disabled={true} primaryText={this.props.averageViews} leftIcon={<Visibility />} />
                </List>

                <Divider />
            </div>
        );
    }
}

export default StatsHeader;