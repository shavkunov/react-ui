import React from 'react';
import PostView from './post-view';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import Reposts from 'material-ui/svg-icons/social/share';
import Favorite from 'material-ui/svg-icons/action/favorite';
import Visibility from 'material-ui/svg-icons/action/visibility';

class StatsPostsView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            slideIndex: 0,
        };
    }

    handleChange = (value) => {
        this.setState({
            slideIndex: value,
        });
    };

    render() {
        return (
            <div>
                <Tabs onChange={this.handleChange} value={this.state.slideIndex}>
                    <Tab label="Likes" icon={<Favorite />} value={0}/>
                    <Tab label="Reposts" icon={<Reposts />} value={1}/>
                    <Tab label="Views" icon={<Visibility />} value={2}/>
                </Tabs>

                <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>
                    <div>
                        <PostView data={this.props.table.bestLikesPost} />
                        <PostView data={this.props.table.worseLikesPost} />
                    </div>
                    <div>
                        <PostView data={this.props.table.bestRepostsPost} />
                        <PostView data={this.props.table.worseRepostsPost} />
                    </div>
                    <div>
                        <PostView data={this.props.table.bestViewsPost} />
                        <PostView data={this.props.table.worseViewsPost} />
                    </div>
                </SwipeableViews>
            </div>
        );
    }
}

export default StatsPostsView;