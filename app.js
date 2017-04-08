console.log('Starting app.js');

const fs = require('fs');

const _ = require('lodash');
const notes = require('./notes.js');
const yargs = require('yargs');

const argv = yargs.argv;
var command = process.argv[2];


console.log('Command: ', command);
console.log('Yargs:', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);


    //print title -- added
    if (note === undefined) {
      console.log("Note title already exists");
    } else {
      console.log(`Note created`);
      console.log("-------------")
      console.log(`Title: ${note.title}`);
      console.log(`Body: ${note.body}`);


    }

} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove'){
   notes.removeNote(argv.title)
} else {
    console.log('Command not recognized');
}
