import { React, useState } from 'react';
import { Sidebar } from '../../Components/SidebarComponent/Sidebar';
import { Trenstar } from '../../Components/DashboardComponents/WorkExperience/Trenstar/Trenstar';
import { MMSTechnologies } from '../../Components/DashboardComponents/WorkExperience/MMSTechnologies/MMSTechnologies';
import { PersonalProjects } from '../../Components/DashboardComponents/PersonalProjects/PersonalProjects';
import { Frontend } from '../../Components/DashboardComponents/Skills/Frontend/Frontend';
import { Backend } from '../../Components/DashboardComponents/Skills/Backend/Backend';
import { Education } from '../../Components/DashboardComponents/Education/Education';
import { Certificates } from '../../Components/DashboardComponents/Certificates/Certificates';
import './PortfolioStyles.css';

export const Portfolio = () => {
    const [selectedItem, setSelectedItem] = useState('personal-projects'); // Default to 'dashboard' on initial load
    const handleMenuItemClick = (item) => {
        setSelectedItem(item);
        const allTabs = document.getElementsByClassName('sidebar-tab');
        for(var g = 0; g < allTabs.length; g++){
            var tabClasses = allTabs[g].classList;
            for(var h = 0; h < tabClasses.length;h++){
                tabClasses.remove('activeSidebarLink');
            }
        }
        for(var i = 0; i < allTabs.length; i++){
            var tabClasses = allTabs[i].classList;
            for(var j = 0; j < tabClasses.length;j++){
                if(tabClasses[j] == item){
                    tabClasses.add('activeSidebarLink');
                }
            }
        }
    };
    

    // Render the content based on the selected sidebar item
    const renderContent = () => {
        switch (selectedItem) {
            case 'personal-projects':
                return <PersonalProjects />;
            case 'trenstar':
                return <Trenstar />;
            case 'mmstechnologies':
                return <MMSTechnologies />;
            case 'frontend':
                return <Frontend />;
            case 'backend':
                return <Backend />;
            case 'education':
                return <Education />;
            case 'certificates':
                return <Certificates />;
            default:
                return <Trenstar />;
        }
    };

    return(
        <div className='row'>
            <div className="col-lg-3">
                <Sidebar onMenuItemClick={handleMenuItemClick}/>
            </div>
            <div className='col-lg-9' id='dashboardContent' style={{textAlign:'left',padding:'90px 30px 30px 30px',height:'100vh',overflowY:'scroll'}}>
            {renderContent()}
            </div>
        </div>
    );
}