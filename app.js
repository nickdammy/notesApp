

const yargs = require("yargs")
const notes = require('./notes.js'); 

//Customize yargs version
yargs.version('1.1.0');
//create add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption:true,
            type: 'string'
        },
        body:{
            describe: "Body",
            demandOption: true,
            type: "string"
        }

    },
    handler(argv) {
        notes.addNote(argv.title,argv.body)
    }
})

//Create remove command
yargs.command({
    command: "remove",
    describe: "removing note",
    builder: {
        title:{
            describe: 'Note Title',
            demandOption:true,
            type: 'string'
        }
        
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
    
})

//Create List command
yargs.command({
    command: "list",
    describe: "create a list for the note",
    handler(){
        notes.listNotes()
    }
})

//Create a read command
yargs.command({
    command: "read",
    describe: "read from the notes",
    builder: {
        title:{
            describe: 'Note Title',
            demandOption:true,
            type: 'string'
        }
        
    },
    handler(argv) {
        notes.readNotes(argv.title)
    }
})



//add,remove, read, list
yargs.parse();
//console.log(yargs.argv);