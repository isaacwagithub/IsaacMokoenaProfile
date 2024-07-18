import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactStyles.css'

export const Contact = () => {
    return(
        <div className="row contact">
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-center'>
                <img src={`${process.env.PUBLIC_URL}/img/Isaacprofilepic.jpg`}/>
            </div>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12justify-content-center'>
                <h3>Contact Me</h3>
                <p className='text-center'>Easily get in touch with me during weekdays between 08:00 AM until 17:00</p>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                <div className="card">
                    <div className='card-header'>
                        <h5>Social Media Contacts</h5>
                    </div>
                    <div className='card-body'>
                        <ul>
                            <li>Email: imokoena268@gmail.com</li>
                            <li>Linkedin: imokoena268@gmail.com</li>
                            <li>WhatsApp: 0646392984</li>
                        </ul>
                    </div>
                    <div className='card-footer'></div>
                </div>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                <div className="card">
                    <div className='card-header'>
                        <h5>Mobile Contacts</h5>
                    </div>
                    <div className='card-body'>
                        <ul>
                            <li>Mobile Number : 0646392984</li>
                            <li>Alternative : 0794428428</li>
                        </ul>
                        <br/>
                    </div>
                    <div className='card-footer'></div>
                </div>
            </div>
            
        </div>
    );
}