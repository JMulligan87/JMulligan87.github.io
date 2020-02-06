import React from 'react';
import { Button } from 'reactstrap';
import Footer from '../footer/Footer';

const Resume = () => {
  return (
    <div
      className='text-center'
      style={{ height: '100%', textAlign: 'center' }}
    >
      <iframe
        className='img-fluid'
        style={{
          width: '100%',
          height: '100%'
        }}
        title='resume'
        src='https://docs.google.com/document/d/e/2PACX-1vRw-RNI_JhjAUxYuiOAkyFJep5nSaxwwYPVsT-t1jdree58h2DuoEBhjcnd824mmf2Su-2R4Gvm7KKW/pub?embedded=true'
      ></iframe>
      <Button
        size='xl'
        className='btn btn-primary btn-xl bg-info mt-5 mb-5'
        href='/'
      >
        Go Back
      </Button>
      <Footer />
    </div>
  );
};

export default Resume;
