import { GET_POST, ADD_POST, EDIT_POST, GET_SINGLE_POST } from "./postTypes";

const getPosts = (posts) => ({
  type: GET_POST,
  payload: posts,
});

const postAdded = () => ({
  type: ADD_POST,
});

const postEdited = () => ({
  type: EDIT_POST,
});

const getPost = (post) => ({
  type: GET_SINGLE_POST,
  payload: post,
});

export const loadPosts = () => {
  return async function (dispatch) {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        dispatch(getPosts(data));
      });
  };
};

export const addPost = (post) => {
  return async function (dispatch) {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        post,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        dispatch(postAdded());
        dispatch(loadPosts());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getSinglePost = (id) => {
  return async function (dispatch) {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(getPost(data));
      });
  };
};

export const editPost = async (post, id) => {
  return async function (dispatch) {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        post,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(postEdited());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
