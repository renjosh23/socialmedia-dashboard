import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import { fetchUser } from '../actions/user';
import { fetchAlbums } from '../actions/albums';
import styled from 'styled-components';

import UserDetail from '../components/UserDetail';
import PostList from '../components/PostList';
import AlbumList from '../components/AlbumList';
import NewPostForm from '../components/NewPostForm';

const StyledUserPage = styled.div`
  .add-post-icon {
    cursor: pointer;
  }
`;

class UserPage extends React.Component {
  state = {
    showPostForm: false
  };

  async componentDidMount() {
    let userId = this.props.location.state
      ? this.props.location.state.id
      : this.props.match.params.userId;

    this.props.fetchUser(userId);
    this.props.fetchPosts(userId);
    this.props.fetchAlbums(userId);
  }

  toggleNewPost = () => {
    this.setState(prevState => ({
      showPostForm: !prevState.showPostForm
    }));
  };

  render() {
    return (
      <StyledUserPage>
        <div>
          <h1>
            {this.props.user.name ? (
              this.props.user.name
            ) : (
              <div className="ui placeholder">
                <div className="line" />
              </div>
            )}
          </h1>
          <div className="ui divider" />
          <UserDetail />
        </div>
        <div className="ui divider" />
        <div className="ui stackable grid">
          <div className="eight wide column posts-list">
            <div className="ui fluid card">
              <div className="content">
                <h1>Posts</h1>
                <div className="add-post">
                  <h3>
                    Add Post!
                    <i
                      className="teal plus square icon add-post-icon"
                      onClick={this.toggleNewPost}
                    />
                  </h3>
                  {this.state.showPostForm ? <NewPostForm /> : <div />}
                </div>
                <div className="ui divider" />
                <PostList />
              </div>
            </div>
          </div>
          <div className="eight wide column albums-list">
            <div className="ui fluid card">
              <div className="content">
                <h1>Albums</h1>
                <AlbumList />
              </div>
            </div>
          </div>
        </div>
      </StyledUserPage>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    posts: state.posts,
    albums: state.albums
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: userId => {
      dispatch(fetchUser(userId));
    },
    fetchPosts: userId => {
      dispatch(fetchPosts(userId));
    },
    fetchAlbums: userId => {
      dispatch(fetchAlbums(userId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
