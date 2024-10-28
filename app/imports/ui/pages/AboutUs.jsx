import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AboutUs = () => (
  <Container className="trans-black-bg py-5" id="AboutUS-Page">
    <div className="d-flex justify-content-center">
      <Image src="/images/WRC.jpg" />
    </div>
    <Row className="mb-5">
      <Col xs={1} />
      <Col>
        <h1 className="pfpText">About Us</h1>
        <p className="pfpText">We are a group of ICS students hoping to help other college students feel more comfortable about fitness.
          We have developed an app for our campus gym that provides information about gym equipment, workouts, and connects individuals to workout buddies with similar interests. We would love for you to try our app!
        </p>
        <h1 className="pfpText">The problem</h1>
        <p className="pfpText">
          For many UHM students the gym can seem like an intimidating place and going alone can feel daunting.
          It’s not just about the lack of motivation but also the uncertainty about how to use the equipment effectively and the idea of taking on a new venture alone.
        </p>
        <h1 className="pfpText">Our Solution</h1>
        <p className="pfpText">
          On our app Manoa Fit Connect, we’re all about making fitness fun, accessible, and supportive for every student.
          We’ve created a platform that connects you with gym buddies and provides the knowledge you need to feel confident in the gym environment.
        </p>
        <h1 className="pfpText"> App Features</h1>
        <p>
          <ul className="pfpText">
            <li>Friends</li>
            <p>See who is online and working out and match people with similar interests</p>
            <li>Equipment</li>
            <p>See what equipment is available in the gym and get tips on how to use them</p>
            <li>Progress Tracker</li>
            <p>Track personal best and how your work outs have been going</p>
            <li>Workouts</li>
            <p>Choose from an array of workouts, perfectly organized by category and difficulty with option to randomly select a workout</p>
            <li>Events</li>
            <p>See what events are happening</p>
          </ul>
        </p>
      </Col>
    </Row>
  </Container>
);

export default AboutUs;
