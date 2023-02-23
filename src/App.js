import './App.css';
import { Component } from 'react';
import Sidbar from './Components/Sidebar';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from './Components/Sidebar';

class App extends Component {


  render(){

  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}
}
export default App;
