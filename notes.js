const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => note.title === title);

    //0 === false, means no duplicate notes
    if (duplicateNotes.length === 0) {
      notes.push(note);
      saveNotes(notes);
      return note;
    }
};

var getAll = () => {
    return fetchNotes();
};

var removeNote = (title) => {
    var notes = fetchNotes();
    //filter notes, remove note with title argument
    var filteredNotes = notes.filter((note) => note.title !== title);
    //save new notes array
    saveNotes(filteredNotes);

    //check if the original notes array has one note less.
    return filteredNotes.length !== notes.length;
};
var getNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];

};


var logNote = (note) => {
  debugger;
  console.log("-------------")
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote

}
