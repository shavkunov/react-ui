import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Reposts from 'material-ui/svg-icons/communication/screen-share';
import Favorite from 'material-ui/svg-icons/action/favorite';
import Visibility from 'material-ui/svg-icons/action/visibility';

class StatsHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>
                    {this.props.name} '\n'
                    stats of {this.props.posts} last posts
                </h3>
                
                <List>
                  <Subheader> average values </Subheader>
                  <Divider />
                  <ListItem primaryText={this.props.averageLikes} leftIcon={<Favorite />} />
                  <ListItem primaryText={this.props.averageReposts} leftIcon={<Reposts />} />
                  <ListItem primaryText={this.props.averageViews} leftIcon={<Visibility />} />
                </List>

                <Divider />
            </div>
        );
    }
}

export default StatsHeader;