//jshint ignore:start
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import Contact from './components/Pages/Contact';
import Service from './components/Pages/Service';
import About from './components/Pages/About';
import Create from './components/crud/Create';
import Read from './components/crud/Read';
import Update from './components/crud/Update';


function App() {
  return (
    <div className="container1">
       <Router>

           <Navbar/>
           <Routes>
           <Route exact path="/" element={<Home/>}/>
           <Route path="/contact" element={<Contact/>}/>
           <Route path="/service" element={<Service/>}/>
           <Route path="/about" element={<About/>}/>
           <Route path="/create" element={<Create/>}/>
           <Route path="/read" element={<Read/>}/>
           <Route path="/update/:id" element={<Update/>}/>
           </Routes>
       </Router>
    </div>
  );
}

export default App;
