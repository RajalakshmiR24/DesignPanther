// LandingPage.jsx
import React from 'react';
import { Navbar, Nav, Container, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      {/* Sticky Navbar */}
      <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
        <Container>
          <Navbar.Brand href="#home">My Landing Page</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section - Card instead of Jumbotron */}
      <Container className="py-5">
        <Card className="bg-primary text-white text-center py-5">
          <Card.Body>
            <h1>Welcome to My Landing Page</h1>
            <p>Discover amazing features and more.</p>
            <Link to="#about">
              <Button variant="light">Learn More</Button>
            </Link>
          </Card.Body>
        </Card>
      </Container>

      {/* About Section */}
      <section id="about" className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae eros erat. Aliquam erat volutpat. Curabitur vitae turpis in magna sollicitudin consequat.
          </p>
        </Container>
        <Container>
          <h2 className="text-center mb-4">About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae eros erat. Aliquam erat volutpat. Curabitur vitae turpis in magna sollicitudin consequat.
          </p>
        </Container>
        <Container>
          <h2 className="text-center mb-4">About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae eros erat. Aliquam erat volutpat. Curabitur vitae turpis in magna sollicitudin consequat.
          </p>
        </Container>
        <Container>
          <h2 className="text-center mb-4">About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae eros erat. Aliquam erat volutpat. Curabitur vitae turpis in magna sollicitudin consequat.
          </p>
        </Container>
        <Container>
          <h2 className="text-center mb-4">About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae eros erat. Aliquam erat volutpat. Curabitur vitae turpis in magna sollicitudin consequat.
          </p>
        </Container>
        <Container>
          <h2 className="text-center mb-4">About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae eros erat. Aliquam erat volutpat. Curabitur vitae turpis in magna sollicitudin consequat.
          </p>
        </Container>
        <Container>
          <h2 className="text-center mb-4">About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae eros erat. Aliquam erat volutpat. Curabitur vitae turpis in magna sollicitudin consequat.
          </p>
        </Container>
        <Container>
          <h2 className="text-center mb-4">About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae eros erat. Aliquam erat volutpat. Curabitur vitae turpis in magna sollicitudin consequat.
          </p>
        </Container>
        <Container>
          <h2 className="text-center mb-4">About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae eros erat. Aliquam erat volutpat. Curabitur vitae turpis in magna sollicitudin consequat.
          </p>
        </Container>
        <Container>
          <h2 className="text-center mb-4">About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae eros erat. Aliquam erat volutpat. Curabitur vitae turpis in magna sollicitudin consequat.
          </p>
        </Container>
        <Container>
          <h2 className="text-center mb-4">About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae eros erat. Aliquam erat volutpat. Curabitur vitae turpis in magna sollicitudin consequat.
          </p>
        </Container>
      </section>

      {/* Services Section */}
      <section id="services" className="py-5">
        <Container>
          <h2 className="text-center mb-4">Our Services</h2>
          <div className="row">
            <div className="col-md-4 text-center">
              <h4>Service 1</h4>
              <p>High quality services tailored to your needs.</p>
              <Link to="/price">
                <Button variant="primary">View Price</Button>
              </Link>
            </div>
            <div className="col-md-4 text-center">
              <h4>Service 2</h4>
              <p>Innovative solutions to accelerate your business.</p>
              <Link to="/price">
                <Button variant="primary">View Price</Button>
              </Link>
            </div>
            <div className="col-md-4 text-center">
              <h4>Service 3</h4>
              <p>Expert support and guidance for growth.</p>
              <Link to="/price">
                <Button variant="primary">View Price</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Contact Us</h2>
          <p className="text-center">Feel free to reach out for more information.</p>
          <div className="text-center">
            <Button variant="primary">Get in Touch</Button>
          </div>
        </Container>
        <Container>
          <h2 className="text-center mb-4">Contact Us</h2>
          <p className="text-center">Feel free to reach out for more information.</p>
          <div className="text-center">
            <Button variant="primary">Get in Touch</Button>
          </div>
        </Container>
        <Container>
          <h2 className="text-center mb-4">Contact Us</h2>
          <p className="text-center">Feel free to reach out for more information.</p>
          <div className="text-center">
            <Button variant="primary">Get in Touch</Button>
          </div>
        </Container>
        <Container>
          <h2 className="text-center mb-4">Contact Us</h2>
          <p className="text-center">Feel free to reach out for more information.</p>
          <div className="text-center">
            <Button variant="primary">Get in Touch</Button>
          </div>
        </Container>
        <Container>
          <h2 className="text-center mb-4">Contact Us</h2>
          <p className="text-center">Feel free to reach out for more information.</p>
          <div className="text-center">
            <Button variant="primary">Get in Touch</Button>
          </div>
        </Container>
        <Container>
          <h2 className="text-center mb-4">Contact Us</h2>
          <p className="text-center">Feel free to reach out for more information.</p>
          <div className="text-center">
            <Button variant="primary">Get in Touch</Button>
          </div>
        </Container>
        <Container>
          <h2 className="text-center mb-4">Contact Us</h2>
          <p className="text-center">Feel free to reach out for more information.</p>
          <div className="text-center">
            <Button variant="primary">Get in Touch</Button>
          </div>
        </Container>
        <Container>
          <h2 className="text-center mb-4">Contact Us</h2>
          <p className="text-center">Feel free to reach out for more information.</p>
          <div className="text-center">
            <Button variant="primary">Get in Touch</Button>
          </div>
        </Container>
        <Container>
          <h2 className="text-center mb-4">Contact Us</h2>
          <p className="text-center">Feel free to reach out for more information.</p>
          <div className="text-center">
            <Button variant="primary">Get in Touch</Button>
          </div>
        </Container>
        <Container>
          <h2 className="text-center mb-4">Contact Us</h2>
          <p className="text-center">Feel free to reach out for more information.</p>
          <div className="text-center">
            <Button variant="primary">Get in Touch</Button>
          </div>
        </Container>
        <Container>
          <h2 className="text-center mb-4">Contact Us</h2>
          <p className="text-center">Feel free to reach out for more information.</p>
          <div className="text-center">
            <Button variant="primary">Get in Touch</Button>
          </div>
        </Container>
        <Container>
          <h2 className="text-center mb-4">Contact Us</h2>
          <p className="text-center">Feel free to reach out for more information.</p>
          <div className="text-center">
            <Button variant="primary">Get in Touch</Button>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-dark text-white text-center">
        <p>&copy; 2024 My Landing Page. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
