import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadPosts } from "../redux/post/postActions";
import { useNavigate } from "react-router-dom";
import {Link} from "@mui/material"

const dashboardstyle = {
  width: 1200,
  margin: "10px auto",
  marginTop: 20,
  padding: "10px",
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Home = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const { posts } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadPosts());
  }, []);

  return (
    <>
      <Grid style={{marginTop:20}}>
        <Link href="/addPost">Create Post</Link>
      </Grid>

      <TableContainer component={Paper} style={dashboardstyle}>
        <Table sx={{ minWidth: 900 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell align="center">Body</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts && posts.map((post) => (
              <StyledTableRow key={post.id}>
                <StyledTableCell component="th" scope="row">
                  {post.title}
                </StyledTableCell>
                <StyledTableCell align="center">{post.body}</StyledTableCell>
                <StyledTableCell align="center">
                  <ButtonGroup
                    variant="contained"
                    arial-label="contained primary button group"
                  >
                    <Button color="primary" onClick={()=>navigate(`/editPost/${post.id}`)}>Edit</Button>
                  </ButtonGroup>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Home;
