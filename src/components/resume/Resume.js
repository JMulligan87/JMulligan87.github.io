import React from 'react';

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
    </div>
  );
};

export default Resume;
