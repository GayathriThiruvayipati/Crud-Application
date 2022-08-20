import {Routes, Route, Link } from 'react-router-dom';
import './App.css';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import Home from './components/Home';


function App() {

  return (
      <div className="App"> 
        <Routes>   
          <Route path="/" element={<Home />} />
          <Route path="/addPost" element={<CreatePost />} />
          <Route path="/editPost/:id" element={<EditPost />} />
        </Routes>
      </div>
  );
}

export default App;
