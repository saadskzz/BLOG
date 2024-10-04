import React from 'react'
import OwnerImage from './owner.jpeg'
import './aboutUs.css'
import {Row,Col} from 'antd'
function AboutUs() {
    return (
        <div className='About-body'>
            
    <Row>
        <Col span={3} offset={10}>
        <div className='About-header'>
        <h1>About Us</h1>
        </div>
        </Col>
    </Row>
    
    <Row gutter={32}>
        <Col span={16} offset={1}>
        <div className='owner-info'>
        <p>Meet Adeel Babar, a visionary entrepreneur at the forefront of transforming Pakistan’s SME sector through innovative AI solutions. As the founder of Axillion AI, he is dedicated to empowering businesses with advanced AI tools that enhance decision-making, drive autonomous marketing, and streamline operations. Adeel’s pioneering innovations enable companies to scale efficiently and maintain a competitive edge in today’s dynamic digital landscape. He is not merely delivering AI technology he is redefining how businesses harness AI for sustainable growth and success. With a mission to turn challenges into opportunities,
             Adeel is propelling companies into a future shaped by AI-driven innovation.</p>
             </div>   </Col>
             <Col span={7}>
             <img src={OwnerImage} alt="owner" height={'37.8%'} />
             </Col>
    </Row>
    
        </div>
       
      )
}

export default AboutUs