import React, { useState } from 'react';
import './HomeStyles.css';

export const Home = () => {

    return (
        <div className="container-fluid main">
            <div className="row" style={{paddingTop:'120px'}}>
                <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <span>
                        <img src={`${process.env.PUBLIC_URL}/img/Isaacprofilepic.jpg`}/>
                    </span>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                    <div className="home-intro">
                        <h4>Hi there, I am</h4>
                        <h3>Isaac Mokoena</h3>
                        <p>A Full Stack Web Developer based in Pretoria, South Africa.</p>
                        <p>With over four years in the tech industry,  I've strengthened my proficiency in web development through valuable experiences gained during my tenure with companies. </p>
                    </div>
                    
                    <ul>
                        <li>
                            <img src={`${process.env.PUBLIC_URL}/img/dotnet.png`}/>
                            <p>DotNet</p>
                        </li>
                        <li>
                            <img src={`${process.env.PUBLIC_URL}/img/nodejs.png`}/>
                            <p>NodeJS</p>
                        </li>
                        <li>
                            <img src={`${process.env.PUBLIC_URL}/img/react.png`}/>
                            <p>React</p>
                        </li>
                        <li>
                            <img src={`${process.env.PUBLIC_URL}/img/angularjs.png`}/>
                            <p>Angular</p>
                        </li>
                        <li>
                            <img src={`${process.env.PUBLIC_URL}/img/cloud.png`}/>
                            <p>Cloud</p>
                        </li>
                        <li>
                            <img src={`${process.env.PUBLIC_URL}/img/git.png`}/>
                            <p>Git</p>
                        </li>
                        <li>
                            <img src={`${process.env.PUBLIC_URL}img/bootstrap.png`}/>
                            <p>bootstrap</p>
                        </li>
                        <li>
                            <img src={`${process.env.PUBLIC_URL}/img/javascript.png`}/>
                            <p>Javascript</p>
                        </li>
                        <li>
                            <img src={`${process.env.PUBLIC_URL}/img/more.png`}/>
                            <p>And More</p>
                        </li>
                    </ul>
                    <br/>
                    <a href="/portfolio" style={{float:'none',clear:'both'}} className="btn btn-primary">Learn More</a>
                </div>
            </div>
        </div>
    );
}
