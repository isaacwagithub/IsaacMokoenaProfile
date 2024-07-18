import React from 'react';
import './TrenstarStyles.css';

export const Trenstar = () => {
    return (
        <div className='trenstar'>
            <h3>Trenstar</h3>
            <h4>Junior full stack web developer</h4>
            <h5>Duties and Responsibilities</h5>
            <ul>
                <li>Collaborate in the development and maintainance of applications.</li>
                <li>Participate in code reviews and testing.</li>
                <li>Attend daily stand-ups for delivering project updates, addressing roadblocks, and collaborating for goal alignment</li>
                <li>Contribute to weekly code deployments, ensuring a disciplined release approach.</li>
                <li>Bug fixing</li>
            </ul>
            <br/>
            <h5>Exposure</h5>
            <p>As a Junior Full .NET Stack Developer, I have been exposed to a variety of tools and technologies, including:</p>
            <ul>
                <li>Programming languages: C#, TypeScript, Javascript</li>
                <li>Web frameworks and libraries: Razor, Material Design,Bootstrap</li>
                <li>ORM frameworks: Entity Framework, Dapper</li>
                <li>Database management: SQL</li>
                <li>Package managers: NuGet</li>
                <li>Reporting and charting tools: Telerik</li>
                <li>Development environments: Visual Studio 2019, 2022</li>
                <li>Version control systems: Git, Team Foundation Server (TFS)</li>
                <li>Agile project management tools: Azure DevOps</li>
            </ul>
            <br/>
            <h5>Coding Tasks</h5>
            <h6>Feature Development and Integration</h6>
            <ul>
                <li>
                    <h6 style={{fontWeight:'bold'}}>Integrated a monthly exceptions report into an existing system.</h6>
                    <section>
                        <ul>
                            <li>Developed a user-friendly report interface using Kendo UI components with TypeScript, providing an intuitive experience for users to view and analyze exceptions.</li>
                            <li>Implemented backend logic using C# to handle report requests and process data.</li>
                            <li>Authored a stored procedure in SQL to efficiently retrieve data for the report based on user-selected parameters.</li>
                            <li>Utilized an existing alert engine to send the report through email should the report consist of X amount of records.
                                
                            </li>
                            <li>Successfully integrated the report into an existing .NET system.</li>
                        </ul>
                    </section>
                </li>
                <br/>
                <li>
                    <h6 style={{fontWeight:'bold'}}>Integrated charts into an existing system.</h6>
                    <section>
                        <ul>
                            <li>Added charts to client view dashboard system.
                                <ul>
                                    <li>Utilized kendo ui components with Typescript to draw the charts</li>
                                    <li>Used C# to handle user requests from the client side</li>
                                    <li>Used stored procedure to retrieve the data that will be used to draw the charts</li>
                                </ul>
                            </li>
                        </ul>
                    </section>
                </li>
                <li>
                    <h6 style={{fontWeight:'bold'}}>Integrated RDL Reports.</h6>
                    <section>
                        <ul>
                            <li>Added charts to client view dashboard system.
                                <ul>
                                    <li>Utilized kendo ui components with Typescript to draw the charts</li>
                                    <li>Used C# to handle user requests from the client side</li>
                                    <li>Used stored procedure to retrieve the data that will be used to draw the charts</li>
                                </ul>
                            </li>
                        </ul>
                    </section>
                </li>
            </ul>
            <br/>
            <h5>Bug Fixing</h5>
            <br/>
            <ul>
                <li>
                    <h6 style={{fontWeight:'bold'}}>Identify and Isolate the Issue</h6>
                    <section>
                        <ul>
                            <li>Reproduce the error to understand the problem</li>
                            <li>Gather relevant logs, error messages, and stack traces</li>
                        </ul>
                    </section>
                </li>
                <br/>
                <li>
                    <h6 style={{fontWeight:'bold'}}>Client-Side Debugging</h6>
                    <section>
                        <ul>
                            <li>Inspect JavaScript console logs and errors</li>
                            <li>Use browser developer tools to debug client-side scripts</li>
                            <li>Verify data manipulation and processing in JavaScript code</li>
                        </ul>
                    </section>
                </li>
                <br/>
                <li>
                    <h6 style={{fontWeight:'bold'}}>Server-Side Debugging</h6>
                    <section>
                        <ul>
                            <li>Review server-side logs and error messages</li>
                            <li>Debug Action Controllers and API endpoints</li>
                            <li>Verify data processing and manipulation in server-side code</li>
                        </ul>
                    </section>
                </li>
                <br/>
                <li>
                    <h6 style={{fontWeight:'bold'}}>Database Query Review</h6>
                    <section>
                        <ul>
                            <li>Analyze SQL stored procedures and queries</li>
                            <li>Verify data retrieval and manipulation in database queries</li>
                            <li>Check for any data type mismatch or casting issues</li>
                        </ul>
                    </section>
                </li>
                <br/>
                <li>
                    <h6 style={{fontWeight:'bold'}}>Code Review and Testing</h6>
                    <section>
                        <ul>
                            <li>Review relevant code sections and changes</li>
                            <li>Write unit tests and integration tests to verify fixes</li>
                            <li>Perform thorough testing to ensure issue resolution</li>
                        </ul>
                    </section>
                </li>
            </ul>
            <p></p>
            <br/>
        </div>
    );
};
