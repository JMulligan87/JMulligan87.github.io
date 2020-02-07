import React from 'react';
import { Button, Col, Row, Container } from 'reactstrap';
import Footer from '../footer/Footer';
import resume from './Resume.jpg';
import resume2 from './Resume2.jpg';

const Resume = () => {
  return (
    <div
      className='text-center'
      // style={{
      //   textAlign: 'center',
      //   height: '100%'
      // }}
    >
      <Container>
        <Row>
          <Col>
            <img
              className='img-fluid resume'
              style={{
                width: '100%',
                height: '100%'
              }}
              title='resume'
              alt='resume'
              src={resume}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              className='img-fluid'
              style={{
                width: '100%',
                height: '100%'
              }}
              title='resume'
              alt='resume'
              src={resume2}
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Button
          size='xl'
          className='btn btn-primary btn-xl bg-info mt-5 mb-5'
          href='/'
        >
          Go Back
        </Button>
      </Container>
      <Footer />
    </div>
  );
};

export default Resume;
