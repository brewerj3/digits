import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Contact } from '../../api/contact/Contact.js';
import AdminContactItems from '../components/AdminContactItems';
import LoadingSpinner from '../components/LoadingSpinner';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const ListStuff = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, contacts } = useTracker(() => {
    const subsription = Meteor.subscribe(Contact.adminPublicationName);
    const rdy = subsription.ready();
    const contactItems = Contact.collection.find({}).fetch();
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
            <h2>List Contacts(Admin)</h2>
          </Col>
          <Row xs={1} md={3}>
            {Array.from({ length: contacts.length }).map((_, idx) => (
              <Col key={idx}>
                <AdminContactItems contact={contacts[idx]} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListStuff;
