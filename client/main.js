import 'meteor/aldeed:autoform/static';
import { Template } from 'meteor/templating';
import SimpleSchema from 'simpl-schema';
import './main.html';
SimpleSchema.extendOptions(['autoform']);

export const mySchema = new SimpleSchema({
  myArray: {
    type: Array,
    autoform: {
      minCount: 1,
      maxCount: 3
    }
  },
  'myArray.$': {
    type: Object
  },
  'myArray.$.field1': {
    type: String,
  },
  'myArray.$.field2': {
    type: String,
  },
}, { tracker: Tracker });

Template.hello.helpers({
  mySchema() {
    return mySchema;
  }
});

