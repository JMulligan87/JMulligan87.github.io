import React from 'react';
import { Container, Col, Row } from 'reactstrap';

const Service = () => {
  return (
    <section className='page-section' id='services'>
      <Container>
        <h2 className='text-center'>At Your Service</h2>
        <hr className='divider bg-info my-4' />
        <Row>
          <Col lg='3' md='6' className='text-center'>
            <div className='mt-5'>
              <i className='fas fa-4x fa-gem text-info mb-4'></i>
              <h3 className='h4 mb-2'>Sturdy Themes</h3>
              <p className='text-muted mb-0'>
                Themes are updated regularly to keep them bug free!
              </p>
            </div>
          </Col>
          <Col lg='3' md='6' className='text-center'>
            <div className='mt-5'>
              <i className='fas fa-4x fa-laptop-code text-info mb-4'></i>
              <h3 className='h4 mb-2'>Up to Date</h3>
              <p className='text-muted mb-0'>
                All dependencies are kept current to keep things fresh.
              </p>
            </div>
          </Col>
          <Col lg='3' md='6' className='text-center'>
            <div className='mt-5'>
              <i className='fas fa-4x fa-globe text-info mb-4'></i>
              <h3 className='h4 mb-2'>Ready to Publish</h3>
              <p className='text-muted mb-0'>
                Designs are custom for every client.
              </p>
            </div>
          </Col>
          <Col lg='3' md='6' className='text-center'>
            <div className='mt-5'>
              <i className='fas fa-4x fa-mobile-alt text-info mb-4'></i>
              <h3 className='h4 mb-2'>Responsive Design</h3>
              <p className='text-muted mb-0'>
                Designed to be responsive on all screen sizes.{' '}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Service;
