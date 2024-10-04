import React from 'react';
import { Button } from 'antd';
import {Link} from 'react-router-dom';
import './home.css';
import {Col,Row} from 'antd'
import Services from '../Services/Services';
import homepageVideo from './homepage.mp4'; // Import the video
import axillionlogo from '../../AXILLIONLOGO.png'

function Home() {
  return (
    <div>
      <div className='home-container'>  
      <video 
        className="background-video" 
        src={homepageVideo}  
        autoPlay 
        muted 
        loop 
      ></video>
      <header className='header'>
        <div className='header-content'>
          <div className='logo'>
         <h1> XILLION AI</h1>
          </div>
          <div className='header-container'>
            <div className='header-menu'>
          <Link to='/Service'> Services </Link>
              <Link to='/Blog'>Blog</Link>
              <Link to='/about-us'>About Us</Link>
              
            </div>
            <Button className='contact-button'><Link to='/Contact'> Contact us</Link></Button>
          </div>
        </div>
      </header>
      <main>
    <div className='content'>
    <Row gutter={16}>
      <Col className="gutter-row" span={8} offset={1}>
      <h1>BREATHE IN LIFE INTO YOUR SYSTEMS WITH OUR CUTTING EDGE AI SOLUTIONS</h1>
        
      </Col>
      </Row>
      <Row gutter={16}>
      <Col className="gutter-row" span={8} offset={1}>
      <p>Discover advanced AI solutions designed to propel innovative businesses to the forefront of their industries,
         enhancing efficiency and competitive advantage.</p>
        
      </Col>
      </Row>
      </div>
      </main>
      </div>
    </div>
  );
}

export default Home;