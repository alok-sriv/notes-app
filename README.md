# notes-app
Note App Using NodeJs

# How to Install 
npm init

# Available Options
$ node app.js  --help
Commands:
  app.js add     add a new note
  app.js remove  remove a note
  app.js read    read a  note
  app.js list    list a note
  
Help for specific command:
node app.js add --help

# Add a note
node app.js add --title="Title1" --body="Body1"

New Note added !!

# Read a note
node app.js read --title="Title1"

{ title: 'Title1', body: 'Body1' }

# List Notes
node app.js list

Notes List:

{ title: 'Note Title2', body: 'Note Body2' }

{ title: 'Note Title1', body: 'Note Body1' }

{ title: 'Note Title3', body: 'Note Body3' }

{ title: 'Note Title4', body: 'Note Body4' }

{ title: 'Title1', body: 'Body1' }

# Remove a Note
node app.js remove --title=Title1

Note removed with title: Title1
