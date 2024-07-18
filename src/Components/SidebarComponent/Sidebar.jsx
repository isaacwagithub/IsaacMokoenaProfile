import React from 'react';
import './SidebarStyles.css';

export const Sidebar = ({ onMenuItemClick  }) => {

    const onParentTabClicked = (item) => {
        //hide other children from opened tabs
        var parentTabs = document.getElementsByClassName('parentTab');
        for(var i = 0; i < parentTabs.length;i++){
            var section = parentTabs[i].nextSibling;
            section.style.display='none';
        } 
        var parentTab = document.getElementsByClassName(item);
        var openingSection = parentTab[0].nextSibling;
        openingSection.style.display='block';
    }; 

    return (
        <div className="sidebarDiv">
            <ul>
                <li></li>
                <li></li>
                <li>
                    <span>
                        <img src={`${process.env.PUBLIC_URL}/img/Isaacprofilepic.jpg`}/>
                    </span>
                    <br/>
                    <br/>
                </li>
                <li className="sidebar-tab personal-projects activeSidebarLink" onClick={() => onMenuItemClick('personal-projects')}>
                    <p className="vertical-align"><span><i className='fa fa-briefcase'></i></span><a href="#">Personal Projects</a></p>
                </li>
                <li>
                    <p onClick={() => onParentTabClicked('work')} className="vertical-align work parentTab"><span><i className='fa fa-file'></i></span><a href="#">Work Experience</a></p>
                    <section>
                        <ul>
                            <li className="sidebar-tab trenstar" onClick={() => onMenuItemClick('trenstar')}>
                                <p className="vertical-align"><span className='round-span'></span><a href="#"> TrenStar</a></p>
                            </li>
                            <li className="sidebar-tab mmstechnologies" onClick={() => onMenuItemClick('mmstechnologies')}>
                                <p className="vertical-align"><span className='round-span'></span><a href="#"> MMS Technologies</a></p>
                            </li>
                        </ul>
                    </section>
                </li>
                <li>
                    <p onClick={() => onParentTabClicked('skills')} className="vertical-align skills parentTab"><span><i className='fa fa-wrench'></i></span><a href="#"> Skills</a></p>
                    <section>
                        <ul>
                            <li className="sidebar-tab frontend" onClick={() => onMenuItemClick('frontend')}>
                                <p className="vertical-align"><span className='round-span'></span><a href="#"> Front-end</a></p>
                            </li>
                            <li className="sidebar-tab backend" onClick={() => onMenuItemClick('backend')}>
                                <p className="vertical-align"><span className='round-span'></span><a href="#"> Back-end</a></p>
                            </li>
                        </ul>
                    </section>
                </li>
                <li className="sidebar-tab education" onClick={()=> onMenuItemClick('education')}>
                    <p className="vertical-align"><span><i className='fa fa-book'></i></span><a href="#">Education</a></p>
                </li>
                <li className="sidebar-tab certificates" onClick={()=> onMenuItemClick('certificates')}>
                    <p className="vertical-align"><span><i className='fa fa-certificate'></i></span><a href="#">Certificates</a></p>
                </li>
            </ul>
        </div>
    );
};
