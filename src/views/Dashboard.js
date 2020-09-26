import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar, Pie } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Progress,
  Table,
  Row,
  Col
} from "reactstrap";

// core components
import { 
  chart1,
  teams,
  chart2,
  chart3,
  chart4,
  chart5,
  chart6
} from "variables/data.js";



class Dashboard extends React.Component {
  state = {
    bigChartData: "dataSunrisers Hyderabad",
    team: "Sunrisers Hyderabad"
  };
  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };
  setBgTeam = name => {
    this.setState({
      team: name
    });
  };
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col xs="12">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <h5 className="card-category">Wins Per Season</h5>
                      <CardTitle tag="h2">{this.state.team}</CardTitle>
                    </Col>
                    <Col sm="6">
                      <ButtonGroup
                        className="btn-group-toggle float-right"
                        data-toggle="buttons"
                      >
                        {teams.map(x=>{
                          return (
                            <Button
                          color="info"
                          id="0"
                          size="sm"
                          tag="label"
                          key={x}
                          className={classNames("btn-simple", {
                            active: this.state.bigChartData === "data"+x
                          })}
                          onClick={() => {this.setBgChartData("data"+x); this.setBgTeam(x)}}
                        >
                          <input defaultChecked name="options" type="radio" />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            {x.split(' ')[0][0]+x.split(' ')[1][0]}
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-single-02" />
                          </span>
                        </Button>
                        )
                        })}
                      </ButtonGroup>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chart1[this.state.bigChartData]}
                      options={chart1.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col xs="5">
                      <div className="info-icon text-center icon-success">
                        <i className="tim-icons icon-shape-star" />
                      </div>
                    </Col>
                    <Col xs="7">
                      <div className="numbers">
                        <p className="card-category">Chances of wining after fielding first:</p>
                        <CardTitle tag="h3">62%</CardTitle>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col xs="5">
                      <div className="info-icon text-center icon-primary">
                        <i className="tim-icons icon-single-02" />
                      </div>
                    </Col>
                    <Col xs="7">
                      <div className="numbers">
                        <p className="card-category">Player To Win most number of MoM awards</p>
                        <CardTitle tag="h3">C. Gayle</CardTitle>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col xs="5">
                      <div className="info-icon text-center icon-success">
                        <i className="tim-icons icon-world" />
                      </div>
                    </Col>
                    <Col xs="7">
                      <div className="numbers">
                        <p className="card-category">The most successful team in IPL:</p>
                        <CardTitle tag="h4">Mumbai Indians</CardTitle>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                {/* <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="tim-icons icon-trophy" /> Customers feedback
                  </div>
                </CardFooter> */}
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col xs="5">
                      <div className="info-icon text-center icon-danger">
                        <i className="tim-icons icon-molecule-40" />
                      </div>
                    </Col>
                    <Col xs="7">
                      <div className="numbers">
                        <p className="card-category">Most Popular Stadium in IPL:</p>
                        <CardTitle tag="h4">M Chinnaswamy Stadium</CardTitle>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                {/* <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="tim-icons icon-watch-time" /> In the last
                    hours
                  </div>
                </CardFooter> */}
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h4">
                    <i className="tim-icons icon-chart-pie-36 text-primary" />{" "}
                    Matches Per Season
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Pie
                      data={chart4.data}
                      options={chart4.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="8">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h4">
                    <i className="tim-icons icon-bulb-63 text-info" />{" "}
                    Most successful IPL team of all times based on win percentages
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Bar
                      data={chart2.data}
                      options={chart2.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            </Row>
            <Row>
            <Col lg="8">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h4">
                    <i className="tim-icons icon-send text-success" /> Seasonwise Comparision of toss decisions
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Bar
                      data={chart3.data}
                      options={chart3.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
                <Card className="card-chart">
                  <CardHeader>
                    <CardTitle tag="h4">
                      <i className="tim-icons icon-send text-success" /> Number of times DLS method was applied
                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                  <div className="chart-area">
                    <Bar
                      data={chart6.data}
                      options={chart6.options}
                    />
                  </div>
                  </CardBody>
                </Card>
            </Col>
            </Row>
          <Row>
            {/* <Col lg="5">
              <Card className="card-tasks">
                <CardHeader>
                  <h6 className="title d-inline">Sample</h6>
                  <p className="card-category d-inline">Sample</p>
                </CardHeader>
                <CardBody>
                  <div className="table-full-width table-responsive">
                    <Table>
                      <tbody>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                            </FormGroup>
                          </td>
                          <td>
                            <p className="title">Update the Documentation</p>
                            <p className="text-muted">
                              Dwuamish Head, Seattle, WA 8:47 AM
                            </p>
                          </td>
                          <td className="td-actions text-right">
                            <Button
                              color="link"
                              id="tooltip786630859"
                              title=""
                              type="button"
                            >
                              <i className="tim-icons icon-pencil" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip786630859"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input
                                  defaultChecked
                                  defaultValue=""
                                  type="checkbox"
                                />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                            </FormGroup>
                          </td>
                          <td>
                            <p className="title">GDPR Compliance</p>
                            <p className="text-muted">
                              The GDPR is a regulation that requires businesses
                              to protect the personal data and privacy of Europe
                              citizens for transactions that occur within EU
                              member states.
                            </p>
                          </td>
                          <td className="td-actions text-right">
                            <Button
                              color="link"
                              id="tooltip155151810"
                              title=""
                              type="button"
                            >
                              <i className="tim-icons icon-pencil" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip155151810"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                            </FormGroup>
                          </td>
                          <td>
                            <p className="title">Solve the issues</p>
                            <p className="text-muted">
                              Fifty percent of all respondents said they would
                              be more likely to shop at a company
                            </p>
                          </td>
                          <td className="td-actions text-right">
                            <Button
                              color="link"
                              id="tooltip199559448"
                              title=""
                              type="button"
                            >
                              <i className="tim-icons icon-pencil" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip199559448"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                            </FormGroup>
                          </td>
                          <td>
                            <p className="title">Release v2.0.0</p>
                            <p className="text-muted">
                              Ra Ave SW, Seattle, WA 98116, SUA 11:19 AM
                            </p>
                          </td>
                          <td className="td-actions text-right">
                            <Button
                              color="link"
                              id="tooltip989676508"
                              title=""
                              type="button"
                            >
                              <i className="tim-icons icon-pencil" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip989676508"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                            </FormGroup>
                          </td>
                          <td>
                            <p className="title">Export the processed files</p>
                            <p className="text-muted">
                              The report also shows that consumers will not
                              easily forgive a company once a breach exposing
                              their personal data occurs.
                            </p>
                          </td>
                          <td className="td-actions text-right">
                            <Button
                              color="link"
                              id="tooltip557118868"
                              title=""
                              type="button"
                            >
                              <i className="tim-icons icon-pencil" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip557118868"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                            </FormGroup>
                          </td>
                          <td>
                            <p className="title">Arival at export process</p>
                            <p className="text-muted">
                              Capitol Hill, Seattle, WA 12:34 AM
                            </p>
                          </td>
                          <td className="td-actions text-right">
                            <Button
                              color="link"
                              id="tooltip143185858"
                              title=""
                              type="button"
                            >
                              <i className="tim-icons icon-pencil" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip143185858"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col> */}
            <Col lg="7">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4"><i className="tim-icons icon-bulb-63 text-primary" /> Top 6 Most Valuable Players</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Name</th>
                        <th>Role</th>
                        <th>MoMs</th>
                        <th>Total percentages of MoM</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>C. Gayle</td>
                        <td>Batsman</td>
                        <td>18</td>
                        <td className="text-center">
                          <div className="progress-container progress-sm">
                            <Progress multi>
                              <span className="progress-value">3%</span>
                              <Progress bar max="5" value="3" />
                            </Progress>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>YK Pathan</td>
                        <td>All Rounder</td>
                        <td>16</td>
                        <td className="text-center">
                          <div className="progress-container progress-sm">
                            <Progress multi>
                              <span className="progress-value">{((16/625)*100).toFixed(1)}%</span>
                              <Progress bar max="5" value="2" />
                            </Progress>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>DA Warner</td>
                        <td>Batsman</td>
                        <td>15</td>
                        <td className="text-center">
                          <div className="progress-container progress-sm">
                            <Progress multi>
                              <span className="progress-value">{((15/625)*100).toFixed(1)}%</span>
                              <Progress bar max="5" value="2" />
                            </Progress>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>AB de Villiers</td>
                        <td>Batsman</td>
                        <td>15</td>
                        <td className="text-center">
                          <div className="progress-container progress-sm">
                            <Progress multi>
                              <span className="progress-value">{((15/625)*100).toFixed(1)}%</span>
                              <Progress bar max="5" value="2" />
                            </Progress>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>SK Raina</td>
                        <td>Batsman</td>
                        <td>14</td>
                        <td className="text-center">
                          <div className="progress-container progress-sm">
                            <Progress multi>
                              <span className="progress-value">{((14/625)*100).toFixed(1)}%</span>
                              <Progress bar max="5" value="2" />
                            </Progress>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>RG Sharma</td>
                        <td>Batsman</td>
                        <td>14</td>
                        <td className="text-center">
                          <div className="progress-container progress-sm">
                          <Progress multi>
                              <span className="progress-value">{((14/625)*100).toFixed(1)}%</span>
                              <Progress bar max="5" value="2" />
                            </Progress>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col lg="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Probablity of winning after winning the toss</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                      <Bar
                        data={chart5.data}
                        options={chart5.options}
                      />
                    </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
