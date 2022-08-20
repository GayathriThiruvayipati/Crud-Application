import { useState, useEffect } from "react";
import { Grid, Button, TextField, Link } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSinglePost, editPost } from "../redux/post/postActions";

const style = {
  width: "45ch",
  marginBottom: 20,
};

const EditPost = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const [state, setState] = useState({
    title: "",
    body: "",
  });

  const [error, setError] = useState("");
  let { id } = useParams();

  const {post} = useSelector(state => state.data) ;

  const { title, body } = state;

  useEffect(() => {
    dispatch(getSinglePost(id));
  }, []);


  useEffect(() => {
    if(post){
      setState({...post})
    }
  }, [post]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !body) {
      setError("Please enter all the values");
    } else {
      dispatch(editPost(state, id));
      navigate("/");
      setError("");
    }
  };

  return (
    <div>
      <h2>Edit Post</h2>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          label="Title Post"
          variant="standard"
          value={title || ""}
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
          value={body || ""}
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
          Edit Post
        </Button>
      </form>
      <Grid style={{ marginTop: 20 }}>
        <Link href="/">Dashboard</Link>
      </Grid>
    </div>
  );
};

export default EditPost;
