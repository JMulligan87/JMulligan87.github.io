import React, { useState } from 'react';
import {
  Card,
  Container,
  Col,
  Row,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Button,
  Modal,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import projects from '../../projects.json';

const Portfolio = () => {
  const [modal, setModal] = useState(false);
  const toggle = project => setModal(project.id);

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
                    <CardText className='text-muted'>
                      {project.description}
                    </CardText>
                    <Row className='justify-content-center'>
                      <Button color='info' onClick={() => toggle(project)}>
                        More Info
                      </Button>
                      <Modal
                        isOpen={modal === project.id}
                        toggle={toggle}
                        size='xl'
                      >
                        <ModalBody size='lg'>
                          <CardImg
                            className='img-fluid'
                            size='xl'
                            style={{
                              width: '100%',
                              height: '100%'
                            }}
                            title='resume'
                            alt={project.title}
                            src={require('../../img' + project.image)}
                          />
                          <p className='mt-4'>{project.description}</p>
                        </ModalBody>
                        <ModalFooter>
                          <Button
                            color='info'
                            className='mr-2 d-flex '
                            href={project.href}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            Check it out
                          </Button>
                          <a
                            className='d-block mr-2'
                            href={project.github}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <i className='fab fa-github fa-3x text-muted'></i>
                          </a>
                          <Button
                            color='danger'
                            className='btn btn-primary btn-xl'
                            size='md'
                            onClick={toggle}
                          >
                            Close
                          </Button>
                        </ModalFooter>
                      </Modal>
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

// const ProjectModal = () => {
//   const [modal, setModal] = useState(project.id);
//   const toggle = () => setModal(!modal);

//   return (
//     <div>
//       <Button color='info' onClick={toggle}>
//         My Resume
//       </Button>
//       <Modal isOpen={modal} toggle={toggle} size='lg'>
//         <ModalBody size='lg'>
//           <img
//             className='img-fluid'
//             style={{
//               width: '100%',
//               height: '100%'
//             }}
//             title='resume'
//             alt={project.title}
//             src={require('../../img' + project.image)}
//           />
//           <p>{project.description}</p>
//         </ModalBody>
//         <ModalFooter>
//           <Button
//             color='info'
//             className='mr-2 d-flex align-items-center'
//             href={project.href}
//             target='_blank'
//             rel='noopener noreferrer'
//           >
//             Check it out
//           </Button>
//           <a
//             className='d-block'
//             href={project.github}
//             target='_blank'
//             rel='noopener noreferrer'
//           >
//             <i className='fab fa-github fa-3x text-muted'></i>
//           </a>
//           <Button
//             color='secondary'
//             className='btn btn-primary btn-xl bg-info'
//             size='sm'
//             onClick={toggle}
//           >
//             Close
//           </Button>
//         </ModalFooter>
//       </Modal>
//     </div>
//   );
// };

export default Portfolio;
