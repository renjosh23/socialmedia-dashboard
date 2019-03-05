import { ADD_POST, DELETE_POST, FETCH_POSTS, EDIT_POST } from './types';
import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com';

export const addPost = (title, body) => dispatch => {
  axios
    .post(`${apiUrl}/posts`, { title, body })
    .then(response => {
      console.log(response.data);
      dispatch(addPostSuccess(response.data));
    })
    .catch(error => {
      throw error;
    });
};

export const addPostSuccess = data => {
  return {
    type: ADD_POST,
    payload: {
      id: data.id,
      title: data.title,
      body: data.body
    }
  };
};

export const deletePost = id => dispatch => {
  console.log(`Trying to delete ${apiUrl}/posts/${id}`)
  axios
    .delete(`${apiUrl}/posts/${id}`)
    .then(response => {
      console.log(response.status);
      dispatch(deletePostSuccess(id));
    })
    .catch(error => {
      throw error;
    });
};

export const deletePostSuccess = id => {
  return {
    type: DELETE_POST,
    payload: {
      id: id
    }
  };  
};

export const editPost = (id, title, body) => dispatch =>{
  console.log(id, title, body)
  axios
    .put(`${apiUrl}/posts/${id}`, { title, body })
    .then(response => {
      console.log(response.data);
      dispatch(editPostSuccess(response.data));
    })
    .catch(error => {
      throw error;
    });
}

export const editPostSuccess = data => {
  return {
    type: EDIT_POST,
    payload: {
      id: data.id,
      title: data.title,
      body: data.body
    }
  };
};

export const fetchPosts = userId => dispatch => {
  console.log(userId);
  axios
    .get(`${apiUrl}/posts?userId=${userId}`)
    .then(response => {
      dispatch(fetchPostsSuccess(response.data));
    })
    .catch(error => {
      throw error;
    });
};

export const fetchPostsSuccess = posts => {
  return {
    type: FETCH_POSTS,
    posts: posts
  };
};
