import React from 'react';
import PostView from './post-view';

class StatsPostsView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table>
                <tr>
                    <td> <PostView data={this.props.table.bestLikesPost}/> </td>
                    <td> <PostView data={this.props.table.worseLikesPost}/> </td>
                </tr>

                <tr>
                    <td> <PostView data={this.props.table.bestRepostsPost}/> </td>
                    <td> <PostView data={this.props.table.worseRepostsPost}/> </td>
                </tr>

                <tr>
                    <td> <PostView data={this.props.table.bestViewsPost}/> </td>
                    <td> <PostView data={this.props.table.worseViewsPost}/> </td>
                </tr>
            </table>
        );
    }
}

export default StatsPostsView;
