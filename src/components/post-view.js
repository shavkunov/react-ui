import React from 'react';
import Divider from 'material-ui/Divider';
import {GridList, GridTile} from 'material-ui/GridList';
import Reposts from 'material-ui/svg-icons/social/share';
import Favorite from 'material-ui/svg-icons/action/favorite';
import Visibility from 'material-ui/svg-icons/action/visibility';

class PostView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h4> {this.props.data.description} </h4>
                <h5> <a href={this.props.data.postLink}> post link</a> </h5>
                <Divider />

                <p> {this.props.data.text} </p>

                {this.renderImage()}

                <div>
                    <Favorite /> {this.props.data.likes} 
                    <Reposts /> {this.props.data.reposts}
                    <Visibility /> {this.props.data.views}
                </div>
            </div>
        );
    }

    renderImage = () => {
        if (this.props.data.images.length == 1) {
            let imageUrl = this.props.data.images[0];
            return (
                <img src={imageUrl} /> 
            );
        }

        // TODO : style this grid list.
        return (
            <GridList cols={2} cellHeight={200}>
                {this.props.data.images.map((image) => (
                    <GridTile>
                        <img src={image} />
                    </GridTile>
                ))}
            </GridList>
        );
    };
}

export default PostView;