import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutStyles.css';

export const About = () => {
    return(
        <div className="row about">
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center'>
               <img src={`${process.env.PUBLIC_URL}/img/Isaacprofilepic.jpg`} style={{marginTop:'100px !important'}}/>
               <br/>
               <br/>
               <h3>About Me</h3>  
               <p>Welcome to my profile outside the realm of technology</p>
            </div>
            <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12 text-left'>
                <div className='card'>
                    <div className='card-header'>
                        <h5>Meet Family Isaac</h5>
                    </div>
                    <div className='card-body'>
                        <img src={`${process.env.PUBLIC_URL}/img/about/3.jpg`}/>
                    </div>
                    <div className='card-footer'>
                        <p>When I'm not coding or solving problems, you can find me spending quality time with my loved ones. Family is everything to me, and I'm grateful for the support and love they bring to my life. Whether it's a family game night, a weekend getaway, or just a simple dinner together, I cherish every moment with my family. They inspire me to be a better person and motivate me to work hard to provide for them. I'm proud to be a family man and look forward to creating many more memories with my loved ones.</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12'>
                <div className='card'>
                    <div className='card-header'>
                        <h5>Meet Adventurous Isaac</h5>
                    </div>
                    <div className='card-body'>
                        <img src={`${process.env.PUBLIC_URL}/img/about/4.jpg`}/>
                    </div>
                    <div className='card-footer'>
                        <p>I'm not just a tech enthusiast, I'm also an adventure seeker! I love exploring new places, trying new foods, and experiencing different cultures. Whether it's hiking in the mountains, scuba diving in the ocean, or simply trying a new restaurant, I'm always up for a challenge. My adventurous spirit helps me stay curious and open-minded, which translates to my work as a developer. I believe that life is too short to stay in one place, and I'm always looking forward to my next adventure.</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12'>
                <div className='card'>
                    <div className='card-header'>
                        <h5>Meet Friendly Isaac</h5>
                    </div>
                    <div className='card-body'>
                        <img src={`${process.env.PUBLIC_URL}/img/about/4.jpg`}/>
                    </div>
                    <div className='card-footer'>
                        <p>I'm a firm believer that technology should be used to bring people together, not drive them apart. That's why I strive to be a friendly and approachable person, both online and offline. I love meeting new people, learning about their stories, and sharing my own experiences. Whether it's through volunteering, attending community events, or simply being a good listener, I believe that kindness and empathy can go a long way. I'm grateful for the friendships I've made along the way and look forward to making many more.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// acs company