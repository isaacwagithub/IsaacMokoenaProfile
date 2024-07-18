import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FooterStyles.css';



export const Footer = () => {
  return (
    <footer className="border-top footer" style={{fontFamily:'calibri',color: '#fff'}}>
        <div className="row" style={{background:'#1f1f1f',padding: '3% !important',marginLeft: '0',marginRight: '0'}}>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <h5>About Me</h5>
                <p>I'm a passionate developer with a love for creating intuitive and dynamic user experiences. With a background in both front-end and back-end development, I thrive on bringing innovative ideas to life.</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <h5>Recent Projects</h5>
                <p>Explore my latest work, including web applications, and collaborative projects with other developers. Each project showcases my skills in design, development, and problem-solving.</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <h5>Contact</h5>
                <p>Feel free to get in touch for collaboration opportunities, freelance work, or just to say hello. I'm always open to connecting with like-minded professionals and exploring new ventures.</p>
            </div>
        </div>
        {/* <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="border-top text-center text-muted" style={{background: '#1f1f1f'}}>
                <span style={{color:'#555'}}>&copy; 2024 - Isaac Mokoena</span>
                <br/>
            </div>
        </div> */}
    </footer>
  );
}