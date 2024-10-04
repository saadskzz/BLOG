import React from 'react'
import {Row,Col} from 'antd'
import {Controller,useForm} from 'react-hook-form'
import './blog.css'
import aihand from './ai-hand.png'
import {Input} from 'antd'
function Blog() {
    const {control,handleSubmit,} = useForm()
    const onSubmit = (data)=>console.log(data);
    return       <div className='Blog-body'>

            <img src={aihand} alt="aihand" className='robot'/>
    <Row>
        <Col span={3} offset={10}>
        <div className='Blog-header'>
        <h1>Blog</h1>
        </div>
        </Col>
    </Row>
    <Row>
        <Col span={24}>
        <div className='Blog-form'>
         <form action="" onSubmit={handleSubmit(onSubmit)}>
         <Row>
         <Col span={12}>
           <label htmlFor="blog1"> logo</label>
            <Controller  name='blog1' control={control}  render={({field})=> <Input className='formspace' size='large'{...field}/>}> 

            </Controller>
            </Col>
            </Row>
            <Row>
            <Col  span={12}>
            <label htmlFor="blog2">logo</label>
            <Controller name='blog2' control={control}  render={({field})=> <Input className='formspace'  size='large'{...field}/>}> 
            

            </Controller>
            </Col>
            </Row>
            <Row>
            <Col  span={12}>
            <label htmlFor="blog3">logo</label>
            <Controller name='blog3' control={control}  render={({field})=> <Input className='formspace'  size='large'{...field}/>}> 

            </Controller>
            </Col >
            </Row>
            <Row>
            <Col  span={12}>
            <label htmlFor="blog4">logo</label>
            <Controller  name='blog4' control={control}  render={({field})=> <Input className='formspace' size='large' {...field}/>}> 

            </Controller>
            </Col>
            </Row>
        
         </form>
        </div>
        </Col>
    </Row>
    </div>

}

export default Blog;