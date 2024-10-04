import React from 'react'
import homepageVideo from '../Home/homepage.mp4'; 
import './end.css'
import {Row,Col,Button} from 'antd'
import {FacebookOutlined ,InstagramOutlined,LinkedinOutlined,TikTokOutlined } from '@ant-design/icons'

import {Link} from 'react-router-dom'
function End() {
  return (
    <div> 
         {/* <div><video 
    className="background-video" 
    src={homepageVideo}  
    autoPlay 
    muted 
    loop 
  ></video> */}
  <div className='end-content'>
    <div className='aijourney-content'>
    <Row>
        <Col span={24}>

        <div className='ai-journey'>
        <h1>Embark on your <span>AI Journey </span> with us</h1>
        <p>Embrace the future of business with our cutting-edge AI solutions
        </p>
        <Button className='contact-button2'><Link to='/Contact'> Contact us</Link></Button>
        </div>   </Col>
    </Row>
    </div>
    
  </div>
  <div className='socialmedia-links'>
  <Row>
        <Col span={24}>

        <div className='ai-journey'>
       <div className='media'>
        <p className='logos'>XILLION AI</p>
        <div className='socials'>
        <a className='link-icon'><FacebookOutlined /></a>
      <a className='link-icon'>  <InstagramOutlined /></a>
      <a className='link-icon'><LinkedinOutlined /></a>
      <a className='link-icon'><TikTokOutlined /></a>
        </div>
        <div className='backlink'>
            <p ><Link to='/Service'> Services </Link></p>
            <p><Link to='/about-us'> About Us </Link></p>
            <p><Link to='/Contact'> Contact Us </Link></p>
        </div>
               </div>
        </div>   </Col>
    </Row>
  </div>
  </div>
  )
}

export default End