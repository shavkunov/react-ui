import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import PostView from './post-view';

class StatsPostsView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h4> {this.props.table.bestLikesPost.description} </h4>
                <PostView data={this.props.table.bestLikesPost} />
            </div>
        );
    }
}

export default StatsPostsView;
