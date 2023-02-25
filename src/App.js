// import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Viewpage from './components/Viewpage';
import Signin from './components/Auth/Signin';
import Signup from "./components/Auth/Signup"
import Detail from './components/Detail';
import Addnew from './components/Addnew';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route element={<Signin/>} path="/"/>
      <Route element={<Signup/>} path="/signup"/>
      <Route element={<Viewpage/>} path="/view" />
      <Route element={<Detail/>} path="/details" />
      <Route element={< Addnew />} path="/addnew" />

     </Routes>
    </div>
  );
}

export default App;
