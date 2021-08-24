const fs = require('fs');
const chalk = require('chalk');

const getNotes = (title) => {
   notes = loadNotes();
   const noteToPrint = notes.find((element)=>{
      if (element.title ===title){
         return element;
         
      }
   })
   if(noteToPrint !== undefined){
      console.log(noteToPrint);
   }else{
      console.log(chalk.bold.red("Note with specified title does not exist, please search with another title!!!"))
   }
  
}

const addNote = (title, body) => {
   const notes = loadNotes();
   // const duplicateNotes = notes.filter((note) => {
   //    return note.title === title
   // })
   
   //find mehthod is efficient when we will have lot many notes
   const duplicateNote = notes.find((element)=>{
      return element.title ===title
   })
   
   // if (duplicateNotes.length === 0) {
   //    notes.push({
   //       title: title,
   //       body: body
   //    })
   if (!duplicateNote) { //(duplicateNote === undefined)
      notes.push({
         title: title,
         body: body
      })
      saveNotes(notes);
      console.log('New Note added !!')
   } else {
      console.log(chalk.bold.red('Note Title Already exists!!!'));
   }

}

const saveNotes = (notes) => {
   const dataJSON = JSON.stringify(notes);
   fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = ()=>{
   try {
      const dataBuffer = fs.readFileSync('notes.json');
      const dataJSON = dataBuffer.toString();
      return JSON.parse(dataJSON);
   } catch (e) {
      return []
   }
}

const removeNote = (title)=> {
   const notes = loadNotes();
   const notesToKeep = notes.filter((note)=> {
      return note.title != title
   })

   if (notes.length > notesToKeep.length) {
      saveNotes(notesToKeep);
      console.log('Note removed with title: '+ title )
   }else{
      console.log(chalk.bold.red('Note Title \"'+ title +'\" doesn\'t exist!!!'));
   }

}

const listNotes = ()=>{
   notes = loadNotes();
   console.log(chalk.red("Notes List: "));
   notes.forEach(element => {
      console.log(element);      
   });
}
module.exports = {
   getNotes: getNotes,
   addNote: addNote,
   removeNote: removeNote,
   listNotes: listNotes
}















