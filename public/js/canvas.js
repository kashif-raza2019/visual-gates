const canvas = document.getElementById('canvas');
const gate = document.querySelector('.gate');
let gates = [];
function injectGate(val){
    log(`Inserting Gate: ${val}`);
    gates.push(val);
    let gate = document.createElement('div');
    gate.classList.add('gate');
    gate.classList.add(`gate-${val}`);
    gate.setAttribute('data-gate', val);
    gate.setAttribute('id', gates.length);
    gate.innerHTML = `<img src='/public/assets/${val}_gate.png' alt='${val}-Gate' class='gateImage'>`;
    //gate.innerHTML = `<div class="gate-inner">${val}</div>`;
    // gate.draggable = true;
    canvas.appendChild(gate);
}
if(gate != null){
    gate.addEventListener('mousedown', function(e){
        log('Mouse Down');
        drag({clientX, clientY});
    });
    gate.addEventListener('mousemove', function(e){
        drag({clientX, clientY});
    });
    gate.addEventListener('mouseup', function(e){
        log('Mouse Up');
        drag({clientX, clientY});
    });
}

function drag({clientX, clientY}){
    let getStyle  = window.getComputedStyle(gate);
    let left = parseInt(getStyle.getPropertyValue('left'));
    let top = parseInt(getStyle.getPropertyValue('top'));
    gate.style.left = `${left + clientX}px`;
    gate.style.top = `${top + clientY}px`;

}