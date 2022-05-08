const saveNotes = document.querySelector("#saveNotes");
const notes = document.querySelector(".ql-editor");

let notesText = localStorage.getItem('notes');
if(notesText !== "" && notesText !== null){
    notes.innerHTML = notesText;
}else{
    notesText = "";
}

saveNotes.addEventListener("click", 
    function(){
        // log(notes.innerHTML);
        notesText = notes.innerHTML;
        localStorage.setItem('notes', notesText);
    }
);