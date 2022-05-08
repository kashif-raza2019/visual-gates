const toggleBtn = document.querySelector(".toggleConsoleBtn");
let flag = true;
let darkFlag = true;
function toggleConsole(){
    consleContainer.classList.toggle('hide');
    document.querySelector('#consoleFunctionForm').classList.toggle('hide');
    if(flag){
        if(!darkFlag){
            toggleBtn.innerHTML = "<i class='fa fa-toggle-off toggleIcon' style='color: lavender'></i>";
        }else{
            toggleBtn.innerHTML = '<i class="fa fa-toggle-off toggleIcon" style="color: lavender"></i>';
        }
        flag = false;
    }else{
        if(!darkFlag){
            toggleBtn.innerHTML = '<i class="fa fa-toggle-on toggleIcon" style="color: lavender"></i>';
        }else{
            toggleBtn.innerHTML = '<i class="fa fa-toggle-on toggleIcon" style="color: lavender"></i>';
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
function darkModeToggle(){
    document.body.style.transition = 'all 0.5s ease-in-out';
    document.body.classList.toggle('dark');
    if(darkFlag){
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
        canvs.style.backgroundImage =  'url(/public/assets/canvas_dark.png)';
        darkFlag = false;
        localStorage.setItem('darkPreference', 'enabled');
        darkPreference = 'enabled';
    }else{
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
        canvs.style.backgroundImage =  'url(/public/assets/canvas.png)';
        darkFlag = true;
        darkPreference = null
        localStorage.setItem('darkPreference', null);
    }
}

let darkPreference = localStorage.getItem('darkPreference');
if(darkPreference == 'enabled'){
    darkModeToggle();
}