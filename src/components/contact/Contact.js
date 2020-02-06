import React from 'react';
import { Container, Col, Row } from 'reactstrap';

const Contact = () => {
  return (
    <section id='contact'>
      <Container>
        <Row className='justify-content-center'>
          <Col lg='8' className='text-center'>
            <h2 className='mt-0'>Let's Get In Touch!</h2>
            <hr className='divider bg-info my-4' />
          </Col>
        </Row>
        <Row>
          <Col className='mr-auto text-center'>
            <a className='d-block' href='https://github.com/JMulligan87'>
              <i className='fab fa-github fa-3x mb-3 text-muted'></i>
            </a>
          </Col>
          <Col className='mr-auto text-center'>
            <a className='d-block' href='mailto:87JMulligan@google.com'>
              <i className='fas fa-envelope fa-3x mb-3 text-muted'></i>
            </a>
          </Col>
          <Col className='mr-auto text-center'>
            <a
              className='d-block'
              href='https://www.linkedin.com/in/james-mulligan-5625b1196/'
            >
              <i className='fab fa-linkedin-in fa-3x mb-3 text-muted'></i>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
