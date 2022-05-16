const fs = require('fs');
const chalk = require('chalk');

const addNote = (title,body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    debugger
    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New note added"))
    }
    else{
        console.log("Duplicate note -- Try Another name")
    }
    
}

const removeNote = (title) => {
    const notes = loadNotes()
    
    const notesToKeep = notes.filter((note) => note.title !== title)

    
    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse("Notes deleted"))
        saveNotes(notesToKeep);
    }
    else{
        console.log(chalk.red("No notes to remove"))
    }
    

}

const listNotes = () =>{
    const notes = loadNotes()
    console.log(chalk.inverse("Your notes"))
    
    notes.forEach(note => {
        console.log(note.title)
    });
}

const readNotes = (title) => {

    const notes = loadNotes()
    const selectedNote = notes.find((note) => note.title === title)
    if(selectedNote){
        console.log(chalk.blue.inverse(selectedNote.title))
        console.log(chalk.green.inverse(selectedNote.body))

    }
    else{
        console.log(chalk.red.inverse("No note was found"))

    }

}

const saveNotes = (notes) =>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json",dataJSON)
}


const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
        
    } catch(e) {
        return []
    }
    
    
}


module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}