import React, { Component } from 'react';
import {
  Card,
  Container,
  Col,
  Row,
  CardBody,
  CardTitle,
  CardText,
  CardImg
} from 'reactstrap';
import projects from '../../projects.json';

class Portfolio extends Component {
  state = {
    projects: [...projects]
  };
  render() {
    return (
      <section id='portfolio'>
        <Container>
          <Row>
            {this.state.projects.map(project => (
              <Col lg='4' sm='6'>
                <div>
                  <Card className='text-center'>
                    <CardImg
                      top
                      height='100%'
                      width='100%'
                      src={project.image}
                      alt={project.title}
                    />
                    <CardBody>
                      <CardTitle>{project.title}</CardTitle>
                      <CardText>{project.description}</CardText>
                    </CardBody>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    );
  }
}

export default Portfolio;
