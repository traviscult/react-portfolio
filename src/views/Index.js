// /*!

// =========================================================
// * Paper Kit React - v1.2.0
// =========================================================

// * Product Page: https://www.creative-tim.com/product/paper-kit-react

// * Copyright 2020 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

// * Coded by Creative Tim

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// */

/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main">
        <div 
        // style={{
        //   backgroundImage:
        //     "url(" + require("assets/img/watercolor.jpg") + ")",
        // }}
        className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">About</h2>
                <h5 className="description">
                My name is Travis. I am California born but was raised on Long Island NY.
							  I have a background working most aspects of the music and film industry.
							  I have a strong passion for filmmaking, photography, and information technology.                </h5>
                <br />
                {/* <Button
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  See Details
                </Button> */}
              </Col>
            </Row>
            <br />
            <br />
            {/* <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                  <img
                        alt="Travis_headshot"
                        class="img-responsive img-travis"
                        src={require("assets/img/faces/Travis.jpg")}
                      />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Beautiful Gallery</h4>
                    <p className="description">
                      Spend your time generating new ideas. You don't have to
                      think of implementing.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">New Ideas</h4>
                    <p>
                      Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Statistics</h4>
                    <p>
                      Choose from a veriety of many colors resembling sugar
                      paper pastels.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-sun-fog-29" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Delightful design</h4>
                    <p>
                      Find unique and handmade delightful designs related items
                      directly from our sellers.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
            </Row> */}
          </Container>
        </div>
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Selected Works</h2>
            <Row>
              <Col md="4">
                <Card className="card-plain">
                  <div className="card-avatar">
                    <a target= "_blank"  rel="noopener noreferrer" href="https://parks-and-weather.herokuapp.com/login_new.html">
                      <img
                        alt="..."
                        src={require("assets/img/projects/NPS.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="https://parks-and-weather.herokuapp.com/login_new.html" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">National Park Service</CardTitle>
                        <h6 className="card-category">Application</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                    This application allows you to create an account and search through the United States and Washington D.C. Once you have made a state selection you are presented with a list of historical locations, national parks, and interesting places to visit in that given state. You can also create blog posts about the things you have seen or done. When you login you will also get weather forecast for your current location.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/traviscult/Project-2"
                      // onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-github" 
                      />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-plain">
                  <div className="card-avatar">
                    <a target="_blank" rel="noopener noreferrer" href="https://traviscult.github.io/Date-Night/">
                      <img
                        alt="Date Night Application"
                        src={require("assets/img/projects/DateNight.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                      <div className="author">
                        <CardTitle tag="h4">Date Night</CardTitle>
                        <h6 className="card-category">Application</h6>
                      </div>
                    <p className="card-description text-center">
                    Have you ever asked your date what they wanted to eat and they respond back with the dreaded "I don't know, what do you want to eat?" Or do you just want to surprise your date and show them are sophisticated and culturally diverse you are? Or do you want to add culturally diversity to your recipe book? This is the website for you!
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                  <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/traviscult/Date-Night"
                      // onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-github" 
                      />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-plain">
                  <div className="card-avatar">
                    <a target="_blank" rel="noopener noreferrer" href="https://5f0b929efa9b8814d9b74472--react-img-directory-app.netlify.app/">
                      <img
                        alt="..."
                        src={require("assets/img/projects/employeeDirectory.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                      <div className="author">
                        <CardTitle tag="h4">Employee Directory</CardTitle>
                        <h6 className="card-category">Application</h6>
                      </div>
                    <p className="card-description text-center">
                    A react application that allows you to access your companies employees information. An employee or manager would benefit greatly from being able to view non-sensitive data about other employees. It would be particularly helpful to be able to filter employees by name.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                  <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/traviscult/employee-directory"
                      // onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-github" 
                      />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-plain">
                  <div className="card-avatar">
                    <a target= "_blank"  rel="noopener noreferrer" href="https://workout-tracker-nosql-hw.herokuapp.com/">
                      <img
                        alt="Fitness Tracker application"
                        src={require("assets/img/projects/fitnessTracker.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="https://workout-tracker-nosql-hw.herokuapp.com/" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Fitness Tracker</CardTitle>
                        <h6 className="card-category">Application</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                    A workout tracking application utilizing a Mongo database with a Mongoose schema and handling the routes with Express.                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/traviscult/Workout-Tracker"
                      // onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-github" 
                      />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-plain">
                  <div className="card-avatar">
                    <a target="_blank" rel="noopener noreferrer" href="https://whispering-earth-86802.herokuapp.com">
                      <img
                        alt="Date Night Application"
                        src={require("assets/img/projects/burger.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                      <div className="author">
                        <CardTitle tag="h4">Burger Tracker</CardTitle>
                        <h6 className="card-category">Application</h6>
                      </div>
                    <p className="card-description text-center">
                    A burger logger utilizing MySQL, Node, Express, Handlebars and a homemade ORM. The final application was deployed through Heroku.                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                  <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/traviscult/Node-Express-Handlebars"
                      // onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-github" 
                      />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-plain">
                  <div className="card-avatar">
                    <a target="_blank" rel="noopener noreferrer" href="https://notetaker050120.herokuapp.com/">
                      <img
                        alt="Note taker application"
                        src={require("assets/img/projects/notes.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                      <div className="author">
                        <CardTitle tag="h4">Notes</CardTitle>
                        <h6 className="card-category">Application</h6>
                      </div>
                    <p className="card-description text-center">
                    An application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                  <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/traviscult/Notes"
                      // onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-github" 
                      />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Get in touch?</h2>
                <Form className="contact-form" >
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <p>Travis Cultreri</p>
                    </Col>
                    </Row>
                    <Row>
                    <Col md="6">
                      <label>Email</label>
                      <p>traviscult@gmail.com</p>
                    </Col>
                  </Row>
                  <label>Phone Number</label>
                  <p>310.339.7695</p>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;

// import React from "react";

// // reactstrap components

// // core components
// import IndexNavbar from "components/Navbars/IndexNavbar.js";
// import IndexHeader from "components/Headers/IndexHeader.js";
// import DemoFooter from "components/Footers/DemoFooter.js";

// // index sections
// import SectionButtons from "views/index-sections/SectionButtons.js";
// import SectionNavbars from "views/index-sections/SectionNavbars.js";
// import SectionNavigation from "views/index-sections/SectionNavigation.js";
// import SectionProgress from "views/index-sections/SectionProgress.js";
// import SectionNotifications from "views/index-sections/SectionNotifications.js";
// import SectionTypography from "views/index-sections/SectionTypography.js";
// import SectionJavaScript from "views/index-sections/SectionJavaScript.js";
// import SectionCarousel from "views/index-sections/SectionCarousel.js";
// import SectionNucleoIcons from "views/index-sections/SectionNucleoIcons.js";
// import SectionDark from "views/index-sections/SectionDark.js";
// import SectionLogin from "views/index-sections/SectionLogin.js";
// import SectionExamples from "views/index-sections/SectionExamples.js";
// import SectionDownload from "views/index-sections/SectionDownload.js";

// function Index() {
//   document.documentElement.classList.remove("nav-open");
//   React.useEffect(() => {
//     document.body.classList.add("index");
//     return function cleanup() {
//       document.body.classList.remove("index");
//     };
//   });
//   return (
//     <>
//       <IndexNavbar />
//       <IndexHeader />
//       <div className="main">
//         <SectionButtons />
//         <SectionNavbars />
//         <SectionNavigation />
//         <SectionProgress />
//         <SectionNotifications />
//         <SectionTypography />
//         <SectionJavaScript />
//         <SectionCarousel />
//         <SectionNucleoIcons />
//         <SectionDark />
//         <SectionLogin />
//         <SectionExamples />
//         <SectionDownload />
//         <DemoFooter />
//       </div>
//     </>
//   );
// }

// export default Index;
