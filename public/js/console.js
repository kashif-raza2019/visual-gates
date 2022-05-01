
const console = document.querySelector("#console");

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

const toggleBtn = document.querySelector(".toggleConsoleBtn");
let flag = true;
let darkFlag = true;
function toggleConsole(){
    console.classList.toggle('hide');
    if(flag){
        if(!darkFlag){
            toggleBtn.innerHTML = "<i class='fa fa-toggle-off toggleIcon' style='color: lavender'></i>";
        }else{
            toggleBtn.innerHTML = '<i class="fa fa-toggle-off toggleIcon" style="color: #12273B"></i>';
        }
        flag = false;
    }else{
        if(!darkFlag){
            toggleBtn.innerHTML = '<i class="fa fa-toggle-on toggleIcon" style="color: lavender"></i>';
        }else{
            toggleBtn.innerHTML = '<i class="fa fa-toggle-on toggleIcon" style="color: #12273B"></i>';
        }
        flag = true;
    }
}

let nav = document.querySelector("#nav");
const toggleDarkMode = document.querySelector(".darkmode");
const canvs = document.querySelector("#canvas");
const inpsgn = document.querySelector("#inputSignal");
const sltgate = document.querySelector("#sltgate");
const termlIcon = document.querySelector("#termlIcon");
const toggleIconS = document.querySelector(".toggleIcon");
function darkModeToggle(){
    document.body.style.transition = 'all 0.5s ease-in-out';
    document.body.classList.toggle('dark');
    if(darkFlag){
        toggleIconS.style.color = 'lavender';
        nav.classList.remove('navbar-light');
        nav.classList.remove('bg-light');
        nav.classList.add('navbar-dark');
        nav.classList.add('bg-dark');
        inpsgn.classList.add('select-dark');
        sltgate.classList.add('select-dark');
        canvs.classList.remove('canvas-light');
        canvs.classList.add('canvas-dark');
        termlIcon.classList.add('lvndr');
        toggleDarkMode.innerHTML = '<i class="fa fa-toggle-on darkModeToggleIcon"></i>';
        darkFlag = false;
    }else{
        toggleIconS.style.color = '#12273B';
        nav.classList.remove('navbar-dark');
        nav.classList.remove('bg-dark');
        nav.classList.add('navbar-light');
        nav.classList.add('bg-light');
        inpsgn.classList.remove('select-dark');
        sltgate.classList.remove('select-dark');
        canvs.classList.remove('canvas-dark');
        canvs.classList.add('canvas-light');
        termlIcon.classList.remove('lvndr');
        toggleDarkMode.innerHTML = '<i class="fa fa-toggle-off darkModeToggleIcon"></i>';
        darkFlag = true;
    }
}