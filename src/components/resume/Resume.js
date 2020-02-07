import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import resume from './Resume.jpg';
import resume2 from './Resume2.jpg';

const Resume = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div>
      <Button color='secondary' className='resume' onClick={toggle}>
        My Resume
      </Button>
      <Modal isOpen={modal} toggle={toggle} size='lg'>
        <ModalBody>
          <img
            className='img-fluid'
            style={{
              width: '100%',
              height: '100%'
            }}
            title='resume'
            alt='resume'
            src={resume}
          />
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
        </ModalBody>
        <ModalFooter>
          <Button color='secondary' size='sm' onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Resume;
