import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addPost } from '../actions/posts';

const StyledEditPost = styled.form`
  margin-top: 20px;
`;

class EditPost extends React.Component {
  state = {
    title: '',
    body: ''
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.addPost(this.state.title, this.state.body);
    this.setState( {
      title: '',
      body: ''
    })
  };

  render() {
    return (
      <StyledEditPost className="ui form" onSubmit={this.onFormSubmit}>
        <div className="field">
          <h2>Edit Post:</h2>
          <label>Title: </label>
          <input
            type="text"
            name="title"
            placeholder="Enter Post Title"
            autoComplete="off"
            required
            value={this.state.title}
            onChange={this.onInputChange}
          />
        </div>
        <div className="field">
          <label>Body</label>
          <textarea
            rows="2"
            type="text"
            name="body"
            placeholder="Enter Post Body"
            required
            value={this.state.body}
            onChange={this.onInputChange}
          />
        </div>
        <button className="ui button teal" type="submit">
          Submit
        </button>
      </StyledEditPost>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPost: (title, body) => {
      dispatch(addPost(title, body));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(EditPost);
