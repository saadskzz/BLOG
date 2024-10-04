import React from 'react'
import './services.css'
import {Link} from 'react-router-dom'
import {Col,Row} from 'antd'


function Services() {
  return ( <div>
    <header className='service-header'>
      <div className='serviceHeader-content'>
     <h1>OUR SERVICES</h1>
     </div>
    </header>
    <main>
    
      <Row gutter={80}>
        <Col span={7} offset={1}>
        <div className='card'>
          
            <Row>
              <Col span={18} offset={3} >
              <div className='card-header'>
            <p>CHATBOTS DEVELOPMENT</p>
                   
            </div>
            

              </Col>
            </Row>
            <Row gutter={[16,24]}>
              <Col span={18}              
              >
                <div className='card-content'>
    <ul>
    <li><Link to='/services/chatbots/tuning'>Sophisticated Model Tuning</Link></li>
    <li><Link to='/services/chatbots/knowledge-response'>Innovative Knowledge Response System</Link></li>
    <li><Link to='/services/chatbots/automated-workflow'>Automated Workflow</Link></li>
    <li><Link to='/services/chatbots/leveraging-models'>Leveraging Models like GPT, Claude, & RASA</Link></li>
    <li><Link to='/services/chatbots/complex-pipelines'>Complex Data Pipelines</Link></li>
    <li><Link to='/services/chatbots/self-adapting-system'>Self-Adapting Decision System</Link></li>
    <li><Link to='/services/chatbots/robust-security'>Robust Security and Compliance</Link></li>
    
</ul>
</div>
</Col>
            </Row>
          
        </div>
     
        </Col>
        <Col span={7} >
       
        <div className='card'>
        
        <Row>
              <Col span={18} offset={3} >
              <div className='card-header'>
            <p>CONSULTING</p>
                   
   </div>
                      
              </Col>
                            
            </Row>
        <Row gutter={[16,24]}>
          <Col span={20}>    
          <div className='card-content'>
                <ul>
                <li><Link to='/services/consulting/performance-analysis'>Robust Performance Analysis</Link></li>
                      <li><Link to='/services/consulting/ai-training'>Customized AI Training Programs</Link></li>
                      <li><Link to='/services/consulting/ai-planning'>Strategic AI Implementation Planning</Link></li>
                      <li><Link to='/services/consulting/ai-growth'>Scalable AI Growth Consulting</Link></li>

</ul>
</div>

          </Col>
        </Row>
        </div>
        
        </Col> 
         <Col span={7} >
         <div className='card'>
         
         <Row>
              <Col span={18} offset={3} ><div className='card-header'>
            <p>AUTONOMOUS MARKETING AGENT</p>
            </div>
   
          </Col>
        </Row>
        <div className='card-content'>
          <h1>COMING SOON</h1>
       
        </div>  
</div>
            
        </Col>
      </Row>
     
    </main>
    </div>
    
  )
}

export default Services