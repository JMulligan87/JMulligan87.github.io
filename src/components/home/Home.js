import React from 'react';
import About from '../about/About';
import Service from '../service/Service';
import { Container, Col, Row, Button } from 'reactstrap';

const Home = () => {
  return (
    <div>
      <header className='masthead'>
        <Container className='h-100'>
          <Row className='h-100 align-items-center justify-content-center text-center '>
            <Col lg='10' className='align-self-end'>
              <h1 className='text-uppercase text-white font-weight-bold'>
                Full Stack Developer
              </h1>
              <img
                className='masthead-avatar img-thumbnail rounded mb-3 pic mt-4'
                src='../../img/me.jpg'
                alt='me'
              />
              <hr className='divider bg-info my-4'></hr>
            </Col>
            <Col lg='8' className='align-self-baseline'>
              <Button
                className='btn btn-primary btn-xl bg-info js-scroll-trigger'
                href='#about'
              >
                Find Out More
              </Button>
            </Col>
          </Row>
        </Container>
      </header>
      <About />
      <Service />
    </div>
  );
};

export default Home;
