import React from 'react';
import { Container } from 'reactstrap';

const Footer = () => {
  return (
    <footer className='bg-light py-5'>
      <Container>
        <div className='small text-center text-muted'>
          Copyright &copy; 2020 James Mulligan
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
