import React, {useEffect} from 'react';
// import $ from 'jquery';
import './PersonalProjectsStyles.css';

export const PersonalProjects = () => {
    

    const onImageClicked = () => {
        const modal = document.getElementsByClassName('modal')[0];
        if(modal != null){
            // var modalPic = modal.querySelector('img');
            // modalPic.attributes.src.value = '';
            // modalPic.attributes.src.value = image;
            modal.style.display = 'block';
        }
    }; 
    
    // $('.closeModal').on('click',function(){
    //     console.log('im clicked');
    // });
    
    // const closeModal = () => {
    //     const element = cardRef.current;
        
    //     console.log('that');
    //     console.log(element);
    //     // if(modal != null){
    //     //     modal.style.position = 'relative';
    //     //     modal.style.display = 'none !important';
    //     // }
    // };

    return (
        <div>
            <h3>Personal Projects</h3>
            <div className='projects-container'>
                <h4>Career Bridge - Job Portal <span>(Web application)</span></h4>
                <p>Job portal tailored for both job seekers and employers. Job seekers can easily create profiles, publicly comment/react on job posts, and apply seamlessly. Meanwhile, employers' benefit from a user-friendly dashboard to create and manage job posts, fostering a comprehensive platform for recruitment and interaction.</p>
                <div className='tools-features'>
                    <div className='col-lg-6 col-md-12'>
                    <h5>Features</h5>
                        <ul>
                            <li>
                                Authentication/Authorization
                            </li>
                            <li>Filtering
                                <section>
                                    <ul>
                                        <li><span>Job Seeker:</span> search for jobs by date,department,job title and location.</li>
                                        <li><span>Recruiter:</span> search for candidates by qualitfication and location.</li>
                                    </ul>
                                </section>
                            </li>
                            <li>Comment and React</li>
                            <li>Easy Apply For Jobs Posted</li>
                            <li>Profile Management
                                <section>
                                    <ul>
                                        <li>Skills and Endorsements: Showcase your skills and earn endorsements from previous employers or colleagues.</li>
                                        <li>Experience and Education: Add and manage your work experience, education, and certifications.</li>
                                    </ul>
                                </section>
                            </li>
                            <li>Job Post Management
                                <section>
                                    <ul>
                                        <li>Create and publish job posts with essential details, requirements, and preferences.</li>
                                        <li>Application Management: Efficiently manage incoming applications, sort, and filter candidates.</li>
                                    </ul>
                                </section>
                            </li>
                        </ul>
                    </div>
                    <div className='col-lg-6 col-md-12'>
                        <h5>Tools Used</h5>
                        <ul>
                            <li>Dotnet
                                <section>
                                    <h6>Identity</h6>
                                    <ul>
                                        <li>User authentication: Register, Login and logout</li>
                                        <li>User authorization: Role-based access control and claims-based identity</li>
                                    </ul>
                                    <h6>Entity Framework</h6>
                                    <ul>
                                        <li>Code-first approach: Create a database schema from .NET classes</li>
                                        <li>Data Processing: retrieving, manipulating, and storing data in a database.</li>
                                    </ul>
                                </section>
                            </li>
                            <li>SQL Server Management Studio</li>
                            <li>Bootstrap
                                <section>
                                    <ul>
                                        <li>Navbar Layout</li>
                                        <li>Cards</li>
                                        <li>Modals</li>
                                        <li>Tables</li>
                                    </ul>
                                </section>
                            </li>
                            <li>JQuery
                                <section>
                                    <ul>
                                        <li>Event Listeners</li>
                                        <li>Data Object Manupilation</li>
                                        <li>Ajax Requests</li>
                                    </ul>
                                </section>
                            </li>
                        </ul>
                    </div>
                </div>
                <br/>
                <br/>
                {/* <div className='screenshots-intro'>
                    <h6 className='text-left' style={{float:'none',textAlign:'left !important'}}>Screenshots</h6>
                    <p className='text-left'>Job seeker interfaces</p>
                </div> */}
                
                <div className='cards-container'>
                    <div onClick={() => onImageClicked()} className='card'>
                        <div className='card-body'>
                            <img src={`${process.env.PUBLIC_URL}/img/careerbridge/1.png`} alt="Logo"/>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-body'>
                            <img src={`${process.env.PUBLIC_URL}/img/careerbridge/3.png`} alt="Logo"/>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-body'>
                            <img src={`${process.env.PUBLIC_URL}/img/careerbridge/4.png`} alt="Logo"/>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-body'>
                            <img src={`${process.env.PUBLIC_URL}/img/careerbridge/7.png`} alt="Logo"/>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-body'>
                            <img src={`${process.env.PUBLIC_URL}/img/careerbridge/7.png`} alt="Logo"/>
                        </div>
                    </div>
                </div>
                <br/>
                <div className='cards-container'>
                    <div className='card'>
                        <div className='card-body'>
                            <img src={`${process.env.PUBLIC_URL}/img/careerbridge/1.png`} alt="Logo"/>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-body'>
                            <img src={`${process.env.PUBLIC_URL}/img/careerbridge/1.png`} alt="Logo"/>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-body'>
                            <img src={`${process.env.PUBLIC_URL}/img/careerbridge/1.png`} alt="Logo"/>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-body'>
                            <img src={`${process.env.PUBLIC_URL}/img/careerbridge/1.png`} alt="Logo"/>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-body'>
                            <img src={`${process.env.PUBLIC_URL}/img/careerbridge/1.png`} alt="Logo"/>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div className='projects-container'>
                <h4>News App <span>Web application</span></h4>
                <p>A single-page web application that uses a third api to fetch news and display them to the user. Each article have the feature for commenting and reacting.</p>
                <h5>Tools Used</h5>
                <ul>
                    <li>Nodejs</li>
                    <li>ExpressJs</li>
                    <li>Web Sockets</li>
                    <li>API</li>
                    <li>JQuery</li>
                </ul>
                <h5>Screenshots</h5>
                <p>Job seeker interfaces</p>
                <div className='cards-container'>
                    <div className='card'>
                        <div className='card-body'>
                            <img src={`${process.env.PUBLIC_URL}/img/newsapp/1.jpg`} alt="Logo"/>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-body'>
                            <img src={`${process.env.PUBLIC_URL}/img/newsapp/2.jpg`} alt="Logo"/>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div className='projects-container'>
                <h4>Front-end Designs</h4>
                <p>Desgined and developed interfaces for various systems</p>
                <div className='cards-container'>
                    <div className='card' onClick={onImageClicked()}>
                        <div className='card-body'>
                            <img src={`${process.env.PUBLIC_URL}/img/floats/1.png`} alt="Logo"/>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-body'>
                            <img src={`${process.env.PUBLIC_URL}/img/floats/2.jpg`} alt="Logo"/>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-body'>
                            <img src={`${process.env.PUBLIC_URL}/img/floats/3.png`} alt="Logo"/>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-body'>
                            <img src={`${process.env.PUBLIC_URL}/img/floats/5.png`} alt="Logo"/>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-body'>
                            <img src={`${process.env.PUBLIC_URL}/img/floats/6.png`} alt="Logo"/>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-body'>
                            <img src={`${process.env.PUBLIC_URL}/img/floats/8.png`} alt="Logo"/>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-body'>
                            <img src={`${process.env.PUBLIC_URL}/img/floats/9.png`} alt="Logo"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal">
                <div className='card'>
                    <div className='card-header'>
                        <i id='close' style={{fontSize:'140%',color:'#fff',float:'right'}} className='fa fa-close closeModal'></i>
                    </div>
                    {/* <div className='card-body'>
                        <img src={`${process.env.PUBLIC_URL}/img/careerbridge/1.png`}/>
                    </div> */}
                </div>
            </div>
        </div>
    );
};
