import React from 'react';
import PostView from './post-view';
import {Tabs, Tab} from 'material-ui/Tabs';
import Reposts from 'material-ui/svg-icons/social/share';
import Favorite from 'material-ui/svg-icons/action/favorite';
import Visibility from 'material-ui/svg-icons/action/visibility';

class StatsPostsView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Tabs>
                <Tab label="Likes" icon={<Favorite />}>
                  <div>
                    <PostView data={this.props.table.bestLikesPost} />
                    <PostView data={this.props.table.worseLikesPost} />
                  </div>
                </Tab>

                <Tab label="Reposts" icon={<Reposts />}>
                  <div>
                    <PostView data={this.props.table.bestRepostsPost} />
                    <PostView data={this.props.table.worseRepostsPost} />
                  </div>
                </Tab>

                <Tab label="Views" icon={<Visibility />}>
                  <div>
                    <PostView data={this.props.table.bestViewsPost} />
                    <PostView data={this.props.table.worseViewsPost} />
                  </div>
                </Tab>
            </Tabs>
        );
    }
}

export default StatsPostsView;