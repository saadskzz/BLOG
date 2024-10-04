import React from 'react';
import { useParams } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './servicePage.css'
import {Link} from 'react-router-dom'
import SubServiceContent from './SubServiceContent';
import Optimization from './optimization.jpeg'
import Automate from './automate.png'
import BehaviourPrediction from './behaviourprediction.jpeg'
import NewFeature from './newfeature.png'
import ContentUpdates from './contentupdates.png'
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const ServicePage = () => {
  const CustomLeftArrow = ({ onClick }) => (
    <button onClick={onClick} className="custom-arrow left-arroww">
      &lt; {/* Customize your arrow here */}
    </button>
  );
  const CustomRightArrow = ({ onClick }) => (
    <button onClick={onClick} className="custom-arrow right-arroww">
      &gt; {/* Customize your arrow here */}
    </button>
  );
  //consulting
  
  const chatbottags = [
    { name: "SOPHISTICATED MODEL TUNING", id: "tuning" },
    { name: "INNOVATIVE KNOWLEDGE RESPONSE SYSTEM", id: "knowledge-response" },
    { name: "AUTOMATED WORKFLOW", id: "automated-workflow" },
    { name: "LEVERAGING MODELS LIKE GPT, CLAUDE, & RASA", id: "leveraging-models" },
    { name: "COMPLEX DATA PIPELINES", id: "complex-pipelines" },
    { name: "SELF-ADAPTING DECISION SYSTEM", id: "self-adapting-system" },
    { name: "ROBUST SECURITY AND COMPLIANCE", id: "robust-security" },
  ];
  
    const consulttags = [
    { name: "ROBUST PERFORMANCE ANALYSIS",id: "performance-analysis"},
    { name: "CUSTOMIZED AI TRAINING PROGRAMS",id: 'ai-training'},
    { name:  "STRATEGIC AI IMPLEMENTATION PLANNING",id:"ai-planning"},
    { name: "SCALABLE AI GROWTH CONSULTING",id:"ai-growth"}
    ];
    
  const { serviceId, subServiceId } = useParams();
    
  return <div className='servicePage-body'>
    {serviceId === 'chatbots' &&
    <>
    <header>
    <Carousel
  swipeable={false}
  draggable={false}
  
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}

  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
{chatbottags.map((tag,idx)=>{
        return   <div className='tags' key={idx}>
            <div className='tag'>
           <p> <Link to={`/services/chatbots/${tag.id}`}>  {tag.name}</Link> </p>
            </div>

           </div>

      })}
</Carousel>
      
          
   


      
    </header>
    <main>
      <div className='subservice-content'>
      {subServiceId === 'tuning'&& <SubServiceContent 
          subServiceTitle={'SOPHISTICATED MODEL TUNING'} 
          subServicePara={'Axillion AI chatbots are powered by cutting-edge AI with sophisticated model tuning, designed to deliver highly accurate, context-aware, and personalized conversations. We focus on optimizing performance to ensure seamless communication, whether for customer support, sales, or user engagement. With advanced natural language understanding and dynamic response generation, our chatbots provide a human-like experience that adapts to the unique needs of your business and users.'} 
        />}
         {subServiceId === 'knowledge-response'&& <SubServiceContent 
          subServiceTitle={'Innovative knowledge response system'} 
          subServicePara={'Axillion AI innovative chatbot solution transforms traditional customer interactions into dynamic knowledge exchanges. With access to extensive data sources, these AI-driven systems ensure contextually relevant, nuanced responses, tailored to user inquiries in real time. This enhances user engagement, streamlines decision-making, and positions your business as a leader in customer support efficiency. Embrace cutting-edge technology that delivers smarter, faster solutions to your customers.'} 
        />}
         {subServiceId === 'automated-workflow'&& <SubServiceContent 
          subServiceTitle={'Automate workflow'} 
          subServicePara={`In today's digital era, efficiency is the backbone of any successful business. At Axillion AI, 
through our deep understanding of AI and its potential, we design agents that can predictively automate tasks, reducing manual intervention and the chances for human error. Whether you're looking to streamline administrative processes, enhance data operations, or elevate customer interactions, our bespoke autonomous agents are built to integrate seamlessly into your environment.`} 
        />}
         {subServiceId === 'leveraging-models'&& <SubServiceContent 
          subServiceTitle={'Leveraging Models like GPT, Claude & RASA'} 
          subServicePara={`Our chatbot development approach is rooted in leveraging the cutting-edge capabilities of GPT and Claude, alongside the adaptability of the Rasa platform. This powerful combination enables us to design sophisticated, scalable, and highly adaptable chatbots tailored for enterprise-level applications. By harnessing GPT and Claude's state-of-the-art natural language processing with Rasa's robust conversational AI framework, we deliver solutions that are not only technically advanced but also meticulously aligned with the complex and evolving needs of businesses.`} 
        />}
         {subServiceId === 'complex-pipelines'&& <SubServiceContent 
          subServiceTitle={'Complex data pipelines'} 
          subServicePara={`Data is the lifeblood of modern businesses, but its sheer volume and complexity can make it challenging to harness effectively.Our expertise lies in designing and deploying data pipelines that handle large-scale, multi-dimensional data. Whether you're dealing with real-time data streams, batch processing, or a hybrid, our autonomous agents optimize processes, ensuring data integrity, and timely delivery for advanced analytics and machine learning applications.`} 
        />}
           {subServiceId === 'self-adapting-system'&& <SubServiceContent 
          subServiceTitle={'Self adapting decision system'} 
          subServicePara={`At Axillion AI, we're at the forefront of developing Self-Adaptive Decision Systems, a groundbreaking approach that empowers agents to make intelligent decisions dynamically. These systems are not just reactive but proactively adjust to changing environments, learning from new data and evolving patterns. This continuous loop of learning and adapting ensures that your business stays ahead of the curve, optimizing operations and strategizing for future scenarios.`} 
        />}
           {subServiceId === 'robust-security'&& <SubServiceContent 
          subServiceTitle={'Robust Security and Compliance '} 
          subServicePara={`At Axillion Ai we prioritize data security in chatbot development by incorporating robust measures such as data encryption and intrusion detection systems. These protocols safeguard sensitive information during transmission and storage, while continuous monitoring helps detect and respond to potential threats. By limiting access to critical data and conducting regular security audits, we ensure that our chatbot solutions remain functional, secure, and fully compliant with industry standards, providing businesses with the confidence to trust their data with cutting-edge AI technology.`} 
        />}
        <img src={require("./Services-content.png" )} alt="content" />
      </div>
    </main>
    </>
    }
    {serviceId === 'consulting' &&
     <>
     <header>
       <Carousel
         swipeable={false}
         draggable={false}
         responsive={responsive}
         ssr={true}
         infinite={true}
         keyBoardControl={true}
         customTransition="all .5"
         transitionDuration={500}
         containerClass="carousel-container"
         removeArrowOnDeviceType={["tablet", "mobile"]}
         dotListClass="custom-dot-list-style"
         itemClass="carousel-item-padding-40-px"
       >
         {consulttags.map((tag, idx) => (
           <div className='tags' key={idx}>
             <div className='tag'>
               <p> <Link to={`/services/consulting/${tag.id}`}>{tag.name}</Link></p>
             </div>
           </div>
         ))}
       </Carousel>
     </header>

     <main>
       <div className='subservice-content'>
         {subServiceId === 'performance-analysis' && (
           <SubServiceContent
             subServiceTitle={'Robust Performance Analysis'}
             subServicePara={`Our robust performance analysis dives deep into your AI systems, ensuring that every component aligns with your business's strategic objectives. Through comprehensive assessments, we fine-tune your AI initiatives for maximum efficiency and sustained long-term success.`}
           />
         )}
         {subServiceId === 'ai-training' && (
           <SubServiceContent
             subServiceTitle={'Customized AI Training Programs'}
             subServicePara={`Our specialized training programs empower teams with the latest AI knowledge, transforming staff members from basic users into AI experts. This evolution equips them to harness AI-driven solutions effectively, driving innovation and operational efficiency throughout your organization. By fostering in-depth expertise, your team becomes a key driver of your business’s AI success.`}
           />
         )}
         {subServiceId === 'ai-planning' && (
           <SubServiceContent
             subServiceTitle={'Strategic AI Implementation Planning'}
             subServicePara={`Address the complexities of AI integration with our strategic consulting services. We provide a clear roadmap for seamless AI implementation, ensuring that your AI investments not only meet operational needs but also position your business as an industry leader. By aligning AI strategies with your business goals, we help you turn cutting-edge technology into a competitive advantage.`}
           />
         )}
         {subServiceId === 'ai-growth' && (
           <SubServiceContent
             subServiceTitle={'Scalable AI Growth Consulting'}
             subServicePara={`Enhance your AI capabilities as your business scales with our tailored strategies and insights. We ensure that your AI infrastructure remains robust, flexible, and aligned with the evolving demands of your organization. By keeping AI systems adaptable, we help you seamlessly integrate innovation into your business growth, maximizing long-term success and resilience.`}
           />
         )}
         
         <div className='imgsconsult'>
         <div className ='consultimg-style specific'>
          <p>Optimization & Tuning</p>
        <img src={Optimization} alt="optimization" />
         </div>
         <div className ='consultimg-style'  >
          <p>New Feature Recommendations & Deployment</p>
        <img src={NewFeature} alt="new-feature" />
         </div>
         <div className ='consultimg-style specific'>
          <p>Content Updates & Knowledge Base Maintenance</p>
        <img src={ContentUpdates} alt="ContentUpdates specific" />
         </div>
         <div className ='consultimg-style specific'>
<p>Customer Behavior Prediction</p>      
  <img src={BehaviourPrediction} alt="BehaviourPrediction" />
         </div>
         <div className ='consultimg-style'>
<p>Automated Customer Feedback Loop</p>      
  <img src={Automate} alt="Automate" />
         </div>
       </div>
       </div>
     </main>
   </>

  
    }
  </div>
     
};

export default ServicePage;
