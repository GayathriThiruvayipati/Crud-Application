import { useState } from "react";
import {
  Grid,
  Button,
  TextField,
  Link,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/post/postActions";
import { useNavigate } from "react-router-dom";

const style = {
  width: "45ch",
  marginBottom: 20,
};

const CreatePost = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const [state, setState] = useState({
    title: "",
    body: "",
  });

  const { title, body } = state; 
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !body) {
      setError("Please enter all the values");
    } else {
      dispatch(addPost(state));
      navigate("/");
      setError("");
    }
  };

  return (
    <div>
      <h2>Add Post</h2>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          label="Title Post"
          variant="standard"
          value={title}
          name="title"
          style={style}
          onChange={handleInputChange}
          type="text"
        />
        <br></br>
        <TextField
          id="standard-basic"
          label="Body Post"
          variant="standard"
          value={body}
          name="body"
          style={style}
          onChange={handleInputChange}
          type="text"
        />
        <br></br>
        <Button
          style={{ width: "300px" }}
          variant="contained"
          color="primary"
          onChange={handleInputChange}
          type="submit"
        >
          Create Post
        </Button>
      </form>
      <Grid style={{ marginTop: 20 }}>
        <Link href="/">Dashboard</Link>
      </Grid>
    </div>
  );
};

export default CreatePost;
