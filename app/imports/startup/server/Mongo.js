import { Meteor } from 'meteor/meteor';
import { Contacts } from '../../api/contact/Contact.js';

/* eslint-disable no-console */

// Initialize the database with a default contact
const addContactData = (data) => {
  console.log(`  Adding: ${data.lastName} (${data.owner})`);
  Contacts.collection.insert(data);
};

// Initialize the ContactCollection if empty.
if (Contacts.collection.find().count() === 0) {
  if (Meteor.settings.defaultContact) {
    console.log('Creating default contacts.');
    Meteor.settings.defaultContact.forEach(data => addContactData(data));
  }
}
