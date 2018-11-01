import React, { Component } from 'react';
import Post from './Post';
import EditComponent from './EditComponent';
import { connect } from 'react-redux';

class AllPost extends Component {
    render() {
        return (
            <div>
                <h1>All Posts</h1>
                {this.props.posts.map(post => (
                    <div key={post.id}>
                    {post.editing ? <EditComponent key={post.id} post={post}/> :

                    <Post key={post.id} post={post}/>

                }
                        
                    </div>

                    ))}
                    
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.postReducer.posts
    }
}
export default connect(mapStateToProps)(AllPost);