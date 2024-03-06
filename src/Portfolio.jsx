import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/pentashi/repos');
        if (response.ok) {
          const data = await response.json();
          setProjects(data);
        } else {
          console.error(`Error: ${response.status} - ${response.statusText}`);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Navigation Bar */}
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">MBONGWE BRANDON EGBE's Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* About Section */}
      <section id="about" className="py-5" style={{ background: 'linear-gradient(to right, #8e2de2, #4a00e0)', color: '#fff' }}>
        <Container>
          <div className="text-center mb-4">
            {/* Placeholder for your picture */}
            <img
              src="https://yt3.googleusercontent.com/VqMx4czgRRGmeX3zkow9PC2A1S2eMLa_HlYqR0A927yTDKgvGyvErDse-nlJ66aV0cwuuizg=s176-c-k-c0x00ffffff-no-rj"
              alt="Mbongwe Brandon Egbe"
              className="rounded-circle img-thumbnail"
            />
          </div>
          <h2 className="text-center mb-4">About Me</h2>
          <p style={{fontFamily:'sans-serif,arial,monospace',fontSize:'large'}}>
            Hello! I'm Mbongwe Brandon Egbe, a passionate third-year Software Engineering student at IUC Douala Logbessou.
            I love transforming ideas into code and building innovative solutions. My journey in the world of software
            development has been exciting, and I'm constantly learning and exploring new technologies.
          </p>
          <p>
            Currently, I'm focused on honing my skills in web development, particularly with technologies like React.js
            and Node.js. I enjoy working on meaningful projects that have a positive impact on people's lives.
          </p>
        </Container>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5" style={{ background: 'linear-gradient(to right, #11998e, #38ef7d)', color: '#333' }}>
        <Container>
          <h2 className="text-center mb-4">Projects</h2>
          <Row>
            {projects.map((project) => (
              <Col key={project.id} md={4}>
                <Card className="mb-4">
                  <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                        View on GitHub
                      </a>
                    </small>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5" style={{ background: 'linear-gradient(to right, #4568dc, #b06ab3)', color: '#fff' }}>
        <Container>
          <h2 className="text-center mb-4">Contact Me</h2>
          {/* Add your contact form or details here */}
          <p>
            Let's connect! Whether you want to discuss a potential project, ask a question, or just say hi,
            feel free to reach out to me. You can find me on{' '}
            {/* <a href="https://linkedin.com/in/pentashi" target="_blank" rel="noopener noreferrer" className="text-light">
              LinkedIn
            </a>{' '} */}
            and{' '}
            <a href="https://github.com/pentashi" target="_blank" rel="noopener noreferrer" className="text-light">
              GitHub
            </a>
            or {''}
            <p>contact me through my gmail: achapipentashi@gmail.com</p>
            or {''}
            <p>directly through my contact: +237678947982</p>
            . Looking forward to hearing from you!
          </p>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-light text-center py-3">
        <Container>
          <p>&copy; 2024 Mbongwe Brandon Egbe. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
};

export default Portfolio;
