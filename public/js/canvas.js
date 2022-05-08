const canvas = document.getElementById('canvas');
const gate = document.querySelector('.gate');
let gates = [];
let selectedGate = null;
function injectGate(val){
    let component = val;
    if(val == null){
        return null;
    }
    if(val == 'wire'){
        component = 'Wire';
        log('Connecting Wire Added');
    }else{
        component = val + " Gate"; 
        log(`Inserting Gate: ${val}`);
    }
    gates.push(val);
    let gate = document.createElement('div');
    gate.classList.add('gate');
    gate.classList.add(`gate-${val}`);
    gate.setAttribute('id', 'g_'+gates.length);
    // gate.setAttribute('onclick', `selectGate(this.id)`);
    // gate.innerHTML = `<img src='/public/assets/${val}_gate.png' alt='${val}-Gate' class='gateImage' title='${component}'>`;
    //gate.innerHTML = `<div class="gate-inner">${val}</div>`;
    // gate.draggable = true;
    canvas.appendChild(gate);
}

function selectGate(id){
    if(selectedGate != null){
        document.querySelector("#"+id).remove('selectedGate');
    }
    selectedGate = id;
    document.querySelector("#"+selectedGate).classList.add('selectedGate');
    log(`Selected Gate: ${selectedGate}`);
}

//injectGate('wire');

// function moveLeft(){
//     // check if it is moving out of the canvas
//     if(selectedGate != null){
//             selectedGate.style.left = parseInt(selectedGate.style.left) - 10 + 'px';
//         }

// }

// function moveRight(){
//     // check if it is moving out of the canvas
//         movingGate = document.querySelector("#"+selectedGate);
//         if(movingGate != null){
//             log(movingGate.style.left);
//             movingGate.style.left = parseInt(movingGate.style.left) + 10 + 'px';
//             log(movingGate.style.left);

//         }
// }

// function moveUp(){
//     // check if it is moving out of the canvas
//     if(selectedGate != null){
//             selectedGate.style.top = parseInt(selectedGate.style.top) - 10 + 'px';
//         }
// }
// function moveDown(){
//     // check if it is moving out of the canvas
//     if(selectedGate != null){
//             selectedGate.style.top = parseInt(selectedGate.style.top) + 10 + 'px';
//         }
// }
    