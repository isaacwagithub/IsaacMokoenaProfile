import React from 'react';
import './EducationStyles.css';

export const Education = () => {
    return (
        <div>
            <h3>Education</h3>
            <h6><span>Institution: </span>CTU Training Solutions</h6>
            <p><span>Certificate: </span>Systems Development NQF Level 5</p>
            <p><span>Duration: </span>November 2020 - October 2021</p>
            <h4 style={{color: '#4696ad !important'}}>Course Modules</h4>
            <ol>
                <li>Introduction To C#
                    <ul>
                        <li>Object oriented programming</li>
                    </ul>
                </li>
                <li>C# Intermediate Programming
                    <ul>
                        <li>ASP.NET</li>
                        <li>MVC
                            <ul>
                                <li>Models
                                    <ul>
                                        <li>Properties (data members) that represent the data</li>
                                        <li>Methods (functions) that operate on that data</li>
                                        <li>Validation logic to ensure data consistency</li>
                                        <li> logic to perform calculations, transformations, or other operations</li>
                                    </ul>
                                </li>
                                <li>View
                                    <ul>
                                        <li>Rendering: Displaying the data provided by the Controller in a human-readable format.</li>
                                        <li>Layout and design: Determining the visual appearance and layout of the UI components.</li>
                                    </ul>
                                </li>
                                <li>Controller
                                    <ul>
                                        <li>Receiving input: Handling requests from the user, such as HTTP requests (GET, POST, PUT, DELETE, etc.).</li>
                                        <li>Updating the View: Passing data to the View, rendering the appropriate View, or redirecting to another action.</li>
                                        <li>Entity Framework</li>
                                        <li>Use LINQ queries to retrieve and manipulate data</li>
                                        <li>Handling business logic: Performing operations that involve multiple Models, Services, or other Controllers.</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>Database
                    <ul>
                        <li>SQL Server Management Studio
                            <ul>
                                <li>Database design: Understanding database schema and table relationships.</li>
                                <li>SQL functions and aggregates: Using built-in functions (e.g., SUM, AVG, MAX).</li>
                                <li>SQL Queries: selecting, inserting, updating, and deleting, using clauses and other techniques</li>
                            </ul>
                        </li>
                        <li>MongoDB
                            <ul>
                                <li>Same as SQL</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>Cloud
                    <ul>
                        <li>Microsoft Azure
                            <ul>
                                <li>App Service: Build, deploy, and scale web applications</li>
                                <li>Deploy changes to azure hosted app through git</li>
                                <li>Azure SQL Database: Connected our app to a secure and scalable database, leveraging Azure's managed database services</li>
                            </ul>
                        </li>
                        <li>Microsoft DevOps
                            <ul>
                                <li>Continuous Deployment (CD): Automated deployment of code changes to production</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>Frontend
                    <ul>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>Javascript
                            <ul>
                                <li>Event handlers</li>
                                <li>AJAX Requests</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>JAVA
                    <ul>
                        <li>Object oriented programming</li>
                    </ul>
                </li>
            </ol>
        </div>
    );
};
