import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The NoteCollection. It encapsulates state and variable values for stuff.
 */
class NoteCollection {
  constructor() {
    // The name of this collection.
    this.name = 'NoteCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      note: String,
      contactId: String,
      owner: String,
      createdAt: Date,
    });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the NoteCollection.
 * @type {NoteCollection}
 */
export const Notes = new NoteCollection();
