import React, { Component } from 'react';
import './internship.css';
import Alert from 'react-bootstrap/Alert';

export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
      <div id="internship">
        <Alert variant="info">
            <Alert.Heading>Internship</Alert.Heading>
            <p> 
                <h5>Test Automation Developer - Student (September 2016 - December 2016)</h5>
                <h6>BlackBerry - Ottawa, Ontario, Canada</h6>
                <ul>
                    <li>Familiar with BBM and responsible for test planning, quality and clarity of defect authoring, and overall
						contribution to the SCRUM team.</li>
					<li>Drive the automation strategy supported by SCRUM team members and other members of the automation
						team using Ruby, Cucumber, Adb.</li>
					<li>Contributed to functional testing of cross platform BBM by implementing automation framework for BB10 from
						scratch.</li>
                </ul>
            </p>

            <p> 
                <h5>Android Developer - Student (May 2016 - August 2016)</h5>
                <h6>Urkkada Technology Ltd. - Ottawa, Ontario, Canada</h6>
                <ul>
                    <li>Developed Android Application that helps in carrying out geo-technical engineering calculations for internal use.</li>
					<li>Integrated app with ArcGIS maps.</li>
					<li>Responsible for developing and testing front-end and back-end of the app using Java and XML.</li>
                </ul>
            </p>
        </Alert>
        </div>        
      </React.Fragment>
    );
  }
}