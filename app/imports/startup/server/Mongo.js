import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Contact } from '../../api/contact/Contact.js';

/* eslint-disable no-console */

// Initialize the database with a default data document.
const addStuffData = (data) => {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
};

const addContactData = (data) => {
  console.log(`  Adding: ${data.firstName} (${data.owner})`);
  Contact.collection.insert(data);
};

// Initialize the StuffsCollection if empty.
if (Stuffs.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.forEach(data => addStuffData(data));
  }
}

// Initialize the ContactsCollection if empty.
if (Contact.collection.find().count() === 0) {
  if (Meteor.settings.defaultContacts) {
    console.log('Creating default Contacts.');
    Meteor.settings.defaultContacts.forEach(data => addContactData(data));
  }
}
