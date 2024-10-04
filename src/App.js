

import Home from './components/Home/Home';
import Services from './components/Services/Services';
import ServicePage from './components/Services/ServicePage';
import {Route,Routes} from 'react-router-dom'
import Contact from './components/Home/Contact/Contact';
import Blog from './components/Blogs/Blog';
import './App.css';

import {useState} from 'react'
import AboutUs from './components/About/AboutUs';
import End from './components/Endpage/End';


function App() {
 return <>
 <Routes>
    <Route path='/' element= {<Home/>}/>
    <Route path='/Service' element= {<Services/>}/>
    <Route path="/services/:serviceId/:subServiceId" element={<ServicePage />} />
    <Route path='/Blog' element={<Blog/>}/>
    <Route path='/about-us' element ={<AboutUs/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/end' element={<End/>}/>


 </Routes>
 
 </>

}

export default App;
