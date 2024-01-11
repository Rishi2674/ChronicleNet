import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div >
        <BrowserRouter>
            <Navbar />
            <Routes>
            <Route exact path='/' element={<News country="in" category="general"/>}/>
            <Route path='/business' element={<News category="business"/>}/>
            <Route path='/entertainment' element={<News category="entertainment"/>}/>
            <Route path='/sports' element={<News category="sports"/>}/>
            <Route path='/science' element={<News category="science"/>}/>
            <Route path='/health' element={<News category="health"/>}/>
            <Route path='/technology' element={<News category="technology"/>}/>
            </Routes>
          </BrowserRouter>
      </div>
    )
  }
}

