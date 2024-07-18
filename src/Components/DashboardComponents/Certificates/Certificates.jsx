import React from 'react';
import './CertificatesStyles.css';

export const Certificates = () => {
    return (
        <div>
            <h3>Certificates</h3>
            <br/>
            <div className='certificates-container'>
                <div className='card'>
                    <div className='card-body'>
                        <h4>NQF 5 Systems Development</h4>
                        <p><span>Institution:</span> CTU Training Solutions</p>
                        <p><span>Date Issued: </span>November 2020 - October 2021</p>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-body'>
                        <h4>Microsoft Azure AZ-400</h4>
                        <p><span>Institution:</span> CTU Training Solutions</p>
                        <p><span>Date Issued: </span>November 2020 - October 2021</p>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-body'>
                        <h4>Microsoft Technology Associate (MTA)</h4>
                        <p><span>Institution:</span> Dynamic DNA</p>
                        <p><span>Date Issued: </span>March 2019</p>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-body'>
                        <h4>Microsoft Programming in C#</h4>
                        <p><span>Institution:</span> Dynamic DNA</p>
                        <p><span>Date Issued: </span>April 2019</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
