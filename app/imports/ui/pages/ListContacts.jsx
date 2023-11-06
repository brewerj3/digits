import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import Contact from '../components/Contact';
import { Contacts } from '../../api/contact/Contact';
import { Notes } from '../../api/note/Note';
import LoadingSpinner from '../components/LoadingSpinner';

/* Renders a table containing all of the Contact documents. Use <ListContacts> to render each row. */
const ListContacts = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, contacts, notes } = useTracker(() => {
    const subscription = Meteor.subscribe(Contacts.userPublicationName);
    const subscription2 = Meteor.subscribe(Notes.userPublicationName);
    const rdy = subscription.ready() && subscription2.ready();
    const contactItems = Contacts.collection.find({}).fetch();
    const noteItems = Notes.collection.find({}).fetch();
    return {
      contacts: contactItems,
      notes: noteItems,
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
            {contacts.map((contact) => (
              <Col key={contact._id}>
                <Contact contact={contact} notes={notes.filter(note => (note.contactId === contact._id))} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListContacts;
