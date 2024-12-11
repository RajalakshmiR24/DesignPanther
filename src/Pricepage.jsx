// PricePage.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';

const PricePage = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Pricing Information</h2>
      <p>
        Here is the detailed pricing information for our services. Choose the plan
        that best suits your needs.
      </p>
      <div className="text-center">
        <Button variant="primary" href="/">Back to Home</Button>
      </div>
    </Container>
  );
};

export default PricePage;
