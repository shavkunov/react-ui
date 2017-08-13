import React from 'react';
import StatsHeader from './stats-header';
import StatsPostsView from './stats-posts-view';

class StatsView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <StatsHeader name={this.props.name} 
                             posts={this.props.posts}
                             averageLikes={this.props.table.averageLikes}
                             averageReposts={this.props.table.averageReposts}
                             averageViews={this.props.table.averageViews}
                             />

                <StatsPostsView table={this.props.table}/>

            </div>
        );
    }
}

export default StatsView;