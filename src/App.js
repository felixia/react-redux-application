import React, { Component } from 'react';
import AllPost from './components/AllPost';
import PostForm from './components/PostForm';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <PostForm/>
      <AllPost/>

      </div>
    );
  }
}

export default App;
