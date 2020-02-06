import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const About = () => {
  return (
    <section className='page-section bg-info' id='about'>
      <Container>
        <Row>
          <Col className='text-center'>
            <h2 className='text-white mt-0'>About</h2>
            <hr className='divider bg-light my-4' />
            <p className='text-white-50 mb-4'>
              I am a full stack developer specializing in designing and building
              web applications. Proficient in JavaScript, jQuery, Node.js,
              Express, HTML5/CSS3, Bootstrap, Git, React JS, Responsive Design,
              API/JSON, RESTful API, Firebase, MySQL, MongoDB, Ajax, State
              Management, Active Record and Command Line.{' '}
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
