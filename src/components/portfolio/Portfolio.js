import React from 'react';
import {
  Card,
  Container,
  Col,
  Row,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Button
} from 'reactstrap';
import projects from '../../projects.json';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <Container>
        <Row>
          {projects.map(project => (
            <Col lg='4' sm='6' key={project.id}>
              <div>
                <Card className='text-center mb-2'>
                  <CardImg
                    top
                    height='100%'
                    width='100%'
                    src={require('../../img' + project.image)}
                    alt={project.title}
                  />
                  <CardBody>
                    <CardTitle>{project.title}</CardTitle>
                    <CardText>{project.description}</CardText>
                    <Row className='justify-content-center'>
                      <Button
                        color='info'
                        className='mr-2 d-flex align-items-center'
                        href={project.href}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Check it out
                      </Button>
                      <a
                        className='d-block'
                        href={project.github}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <i className='fab fa-github fa-3x text-muted'></i>
                      </a>
                    </Row>
                  </CardBody>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
