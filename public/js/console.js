
const console = document.querySelector("#console");
const consleContainer = document.querySelector('#consoleContainer');
let lineCount = 1;

function log(message) {
    console.innerHTML += `<div class='terminal-line'><span class='yellow backDrop'>${lineCount} </span><span class='darkgreen'>User@Kashif_Machine </span> <span class='purple'>VisualGates ~</span> <span class='green'> $ </span> ${message}</div>`;
    console.scrollTop = console.scrollHeight;
    lineCount++;
}

function clearWindow(){
    let conf = confirm('Are you sure you want to clear the window?');
    if(conf){
        lineCount = 1;
        console.innerHTML = `<div class='terminal-line'><span class='yellow backDrop'> ${lineCount} </span><span class='darkgreen'>User@Kashif_Machine </span> <span class='purple'>VisualGates ~</span> <span class='green'> $ </span> <span class='grey'>#The Activity will be shown here ~ Kashif Raza</span></div>`;
    }
}

const cnsoleFuncForm = document.querySelector("#consoleFunctionForm");
const cnsoleFuncText = document.querySelector("#consoleFunction");
cnsoleFuncForm.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();
    let input = cnsoleFuncText.value;
    cnsoleFuncText.value = "";
    performFunction(input);
});

function performFunction(val){
    log("<span class='text-warning'>"+val+"</span>");
    if(val == "clear" || val == "cls" || val == "clearWindow" || val == "clc"){
        clearWindow();
    }else if(val == "--help"){
        log("Help Center for Visual Gates -- ");
        log("clear - Clears the window");
        log("--help - Shows this message");
        log("--version - Shows the version of the program");
        log("--about - Shows the about message");
        log("--contact - Shows the contact information");
        log("--license - Shows the license information");
        log("--credits - Shows the credits");
        log("--source - Shows the source code");
        log("--refresh - Reloads the page");
        log("--print - Prints the console data");
        log("--save - Saves the console data");
        log("--delete - Deletes the console data");
        log("--notes - Print the saved notes");
        log("--clearNotes - Clears the saved notes");
    }else if(val == "--about"){
        log("This is a simple console for visualizing logic circuits and it's evaluation.");
    }else if(val == "--contact"){
        log("You can contact me at: <span class='yellow'> kashifraza08012001@gmail.com</span>");
        log("You can also find me on: <span class='yellow'> github.com/kashif-raza2019</span>");
        log("You can also find me at: <span class='yellow'> kashifraza.tech</span>");
    }else if(val == "--version"){
        log("Version: <span class='yellow'> 1.0.0</span>");
    }else if(val == "--license"){
        log("This program is licensed under the ISC License.");
    }else if(val == "--credits"){
        log("This program was created by: <span class='yellow'> Kashif Raza</span>");
    }else if(val == "--source"){
        log("The source code can be found at: <span class='yellow'> github.com/kashif-raza2019/visual-gates</span>");
    }else if(val == "--refresh"){
        window.location.reload();
    }else if(val == "--print"){
        if(localStorage.getItem('console')){
            log("Printing the data...");
            log("<span class='text-warning'>Data:</span>");
            log("<span class='text-warning'>"+localStorage.getItem('console')+"</span>");
        }else if(localStorage.getItem('console') == "" || localStorage.getItem('console') == null){ 
            log("<span class='text-danger'>No data to print.</span>");
        }
    }else if(val == "--save"){
        log("Saving the data...");
        localStorage.setItem('console', console.innerHTML);
        log("<span class='text-success'>Data saved successfully!</span>");
    }else if(val == "--delete"){
        log("Deleting the data...");
        localStorage.removeItem('console');
        log("<span class='text-success'>Data deleted successfully!</span>");
    }else if(val == "--exit"){
        window.close();
    }else if(val == "--notes"){
        if(localStorage.getItem('notes') != " " && localStorage.getItem('notes') != null){
            log("<span class='text-secondary'>"+localStorage.getItem('notes')+"</span>");
        }else{
            log("<span class='text-danger'>No data to print.</span>");
        }
    }else if(val == "--clearNotes"){
        log("Clearing the notes...");
        localStorage.removeItem('notes');
        log("<span class='text-success'>Notes cleared successfully!</span>");
    }else{
        log("<span class='text-danger'>Error: Command not found try '--help' for checking the commands</span>");
    }
}