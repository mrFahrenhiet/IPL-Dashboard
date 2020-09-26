import React from "react";
// react plugin used to create charts
import { Line, Bar, Pie } from "react-chartjs-2";
// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

// core components
import {
  chartExample5,
  chartExample6,
  chartExample7,
  chartExample8,
  chartExample9,
  chartExample10
} from "variables/charts.js";

class Charts extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <h2 className="text-center">Contact The Developer</h2>
          <p className="category text-center">
            <h4>
            This project was made by Shreyansh Gupta for Atlan Interview Procedure:{" "}
            <a
              href="https://github.com/mrFahrenhiet/IPL-Dashboard.git"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub Repository
            </a>
            </h4>
            <h4>
            Please check my github Profile{" "}
            <a
              href="https://github.com/mrFahrenhiet?tab=repositories"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub Profile
            </a>
            .
            </h4>
          <h4>
            Check out my LinkedIn Profile:{" "}
            <a
              href="https://www.linkedin.com/in/shreyansh-gupta99/"
              rel="noopener noreferrer"
              target="_blank"
            >
               LinedIn Profile
            </a>
          </h4>
          <h4>For any issues or suggestion you can contact me at:{" "}
          <a href="mailto:shreyanshgupta_2k18ce112@dtu.ac.in"> Primary Email Address</a></h4>
          </p>
        </div>
      </>
    );
  }
}

export default Charts;
