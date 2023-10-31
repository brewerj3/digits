import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import Contact from '../components/Contact';
import { Contacts } from '../../api/contact/Contact';
import LoadingSpinner from '../components/LoadingSpinner';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const ListStuff = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, contacts } = useTracker(() => {
    const subscription = Meteor.subscribe(Contacts.userPublicationName);
    const rdy = subscription.ready();
    const contactItems = Contacts.collection.find({}).fetch();
    return {
      contacts: contactItems,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col md={10}>
          <Col className="text-center">
            <h2>List Contacts</h2>
          </Col>
          <Row xs={1} md={3}>
            {Array.from({ length: contacts.length }).map((_, idx) => (
              <Col key={idx}>
                <Contact contact={contacts[idx]} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListStuff;
