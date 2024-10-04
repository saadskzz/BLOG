import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';
import { Row, Col, Button } from 'antd';
import './contact.css';
import { Input, TimePicker } from 'antd'; // Import TimePicker from Ant Design
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ClockCircleOutlined, CalendarOutlined } from '@ant-design/icons';
import splash from './s.png'


function Contact() {
    const [value, onChange] = useState(new Date());
    const TimeSlots = ['02:30 PM', '03:00 PM', '03:30 PM','04:00 PM','04:30 PM' ]

    const [times,setTime] = useState(TimeSlots)
    const [appointmentDate,setAppointmentDate] = useState('')
    
    const { control, handleSubmit, formState: { errors } } = useForm();
    const [loadForm, setLoadForm] = useState(false);
    const [loadCalendar, setLoadCalendar] = useState(false);
    const [timeValue, setTimeValue] = useState(null); // State for storing selected time
    const onSubmit = (data) => {
        console.log({ ...data, selectedDate: value, selectedTime: timeValue });
    };
    console.log(loadForm);

    return (
        <div className='contact-page'>
            <img src={splash} alt="splash" className='splash' />
            <header>
                <div className='contact-header'>
                    <p className='query' onClick={() => { setLoadForm(!loadForm); }}>DROP A LINE <br /> ASK A QUESTION</p>
                    <p className='connects'> LETS CONNECT</p>
                    <p className='query' onClick={()=>setLoadCalendar(!loadCalendar)}>BOOK A CALL <br /> REQUEST A DEMO</p>
                </div>
            </header>
            <main>
                {loadForm && <div className='form-section'>
                    <Row>
                        <Col span={24}>
                            <div className='form-card'>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Row gutter={16}>
                                        <Col span={24}>
                                            <label htmlFor="UserName">Your Name</label>
                                            <br />
                                            <Controller
                                                name='UserName'
                                                control={control}
                                                rules={{ required: 'Name is required' }}
                                                render={({ field }) => <Input id='UserName' {...field} size='large' className='contact-form-input' />}
                                            />
                                            {errors.UserName && <p style={{ color: 'red' }}>{errors.UserName.message}</p>}
                                        </Col>

                                        <Col span={24}>
                                            <label htmlFor="email">Your Email</label><br />
                                            <Controller
                                                name='UserEmail'
                                                control={control}
                                                rules={{ required: 'Email is required' }}
                                                render={({ field }) => <Input id='email' {...field} size='large' className='contact-form-input' />}
                                            />
                                            {errors.UserEmail && <p style={{ color: 'red' }}>{errors.UserEmail.message}</p>}
                                        </Col>

                                        <Col span={24}>
                                            <label htmlFor="phoneNumber">Your Phone Number</label><br />
                                            <Controller
                                                name='UserNumber'
                                                control={control}
                                                rules={{ required: 'Phone Number is required' }}
                                                render={({ field }) => <Input id='phoneNumber' {...field} size='large' className='contact-form-input' />}
                                            />
                                            {errors.UserNumber && <p style={{ color: 'red' }}>{errors.UserNumber.message}</p>}
                                        </Col>

                                        <Col span={24}>
                                            <label htmlFor="Question">Ask A Question</label><br />
                                            <Controller
                                                name='UserQuestion'
                                                control={control}
                                                render={({ field }) => <Input id='Question' {...field} size='large' className='contact-form-input' />}
                                            />
                                        </Col>
                                    </Row>

                                    <button type='submit'>Submit</button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </div>}
                {loadCalendar && <div className='calendar-card'>
                    <Row><Col className='calendar-card-design' span={24}>
                        <div className='calendar-content'>
                            <Row>
                                <Col span={8} className='appointment-details'>
                                    <p>img</p>
                                    <h4>Consult - 30 Mins</h4>
                                    <div className='schedule'>
                                    <p>   <ClockCircleOutlined /> 30 mins</p>
                                    <p><CalendarOutlined /> {appointmentDate ? appointmentDate.toLocaleDateString() : ''}</p>
                                    <p>Thank you for considering ALLMYTE. Book a call at your earliest convenience.</p>
                                    </div></Col>
                                <Col span={10}>
                                    <h4>Select Date & Time</h4>
                                    <Calendar className='act-calendar' onChange={onChange} value={value} onClickDay={(value)=>{setAppointmentDate(value); console.log(value)}}/>
                                <h5>Time Zone</h5>
                                <p>GMT+5:00 ASIA/KARACHI (GMT+5)</p>
                                </Col>
                                <Col span={6}>
                                    
                {times.map((ti,idx)=>{

               return  <Row key={idx}> <Col span={24}><Button className='appointment-time' danger>{ti}
               </Button></Col></Row>  
 } )}
                                </Col>
                            </Row>
                        </div>
                    </Col></Row>
                </div>}
            </main>

        </div>
    );
}

export default Contact;
