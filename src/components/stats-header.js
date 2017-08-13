import React from 'react';
import UserAvatar from './user-avatar.js';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Reposts from 'material-ui/svg-icons/social/share';
import Favorite from 'material-ui/svg-icons/action/favorite';
import Visibility from 'material-ui/svg-icons/action/visibility';

class StatsHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let statsHeader = "stats of " + this.props.posts + " last posts";

        return (
            <div>
                <List>
                    <ListItem disabled={true} leftAvatar={<Avatar src="https://pp.userapi.com/c837125/v837125523/364c8/suxseu6Hjos.jpg" />} primaryText={this.props.name} />
                    <ListItem disabled={true} primaryText={statsHeader} />
                </List>
                
                <List>
                  <Subheader> average values </Subheader>
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