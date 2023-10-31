import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Contact from '../components/Contact';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const ListContacts = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const contacts = [{
    firstName: 'Philip', lastName: 'Johnson', address: 'POST 307, University of Hawaii',
    image: 'https://github.com/philipmjohnson.png',
    description: 'I am a Professor of Information and Computer Sciences at the University of Hawaii, Director ' +
      'of the Collaborative Software Development Laboratory, and the CEO of OpenPowerQuality.com.',
  },
  {
    firstName: 'Henri', lastName: 'Casanova', address: 'POST 307, University of Hawaii',
    image: 'https://avatars0.githubusercontent.com/u/7494478?s=460&v=4',
    description: 'I am originally from France. I maintain a list of reports from my surf sessions. I have proof ' +
        'that I ran the Hana relay with an actual Team.',
  },
  { firstName: 'Kim', lastName: 'Binsted', address: 'POST 307, University of Hawaii',
    image: 'https://www.ics.hawaii.edu/wp-content/uploads/2013/08/kim_binsted-square-300x300.jpg',
    description: 'Kim Binsted received her BSc in Physics at McGill (1991), and her PhD in Artificial Intelligence' +
        'from the University of Edinburgh (1996). Her thesis topic was the computational modeling and generation of ' +
        'punning riddles, and her program, JAPE (Joke Analysis and Production Engine), generated puns such as ' +
        '"What do you call a Martian who drinks beer? An ale-ien!".',
  },
  ];
  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col md={10}>
          <Col className="text-center">
            <h2>List contacts</h2>
            <Row xs={2} md={3}>
              {Array.from({ length: 3 }).map((_, idx) => (
                <Col key={idx}>
                  <Contact key={contacts[idx]} contact={contacts[idx]} />
                </Col>
              ))}
            </Row>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default ListContacts;
