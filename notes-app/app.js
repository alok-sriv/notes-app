const chalk = require('chalk');
const { demandOption } = require('yargs');
const yargs = require('yargs');
const {getNotes,addNote,removeNote,listNotes} = require('./notes.js');

//create add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true, //this will force to have --title property, but if we pass "node app.js add --title" o/p: we will get boolean true for title
            type: 'string' //this will force to have empty string '', inplace of boolean if we don't pass any value to --title.
        },
        body:{
            describe: 'Note Body',
            demandOption: true,
            type:'string'
        }
    },    
    handler: (argv) =>{
        addNote(argv.title,argv.body);
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder:{
        title:{
            describe: 'Remove Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv)=>{
        removeNote(argv.title)
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'read a  note',
    builder:{
        title:{
            describe: 'Read Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv)=> {
        getNotes(argv.title);
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'list a note',
    handler: (argv)=>{
        listNotes()
    }
})

yargs.parse();