import React from 'react';
import Desk from '../../img/bg-masthead.jpg';

const Home = () => {
  return (
    <div>
      <img
        src={Desk}
        alt='desk'
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%'
        }}
      />
    </div>
  );
};

export default Home;
