let iS = document.querySelector("#inputSignal");
let iV = document.querySelector("#inputVoltage");

let xCordinates = [];
let yCordinates = [];

var url_string = window.location.href;
var url = new URL(url_string);
var inputSignal = url.searchParams.get("inputSignal");
var inputVolt = url.searchParams.get("inputVoltage");



waveGenerator(inputSignal, inputVolt);

iS.value = inputSignal;
iV.value = inputVolt;



function waveGenerator(inputSignal, inputVoltage) {
    let x = 0;
    let y = 0;
    let xCordinates = [];
    let yCordinates = [];
    if(inputSignal == null){
        inputSignal = "Sine";
        iS.value = inputSignal;
    }
    if(inputVoltage == null){
        inputVoltage = 5;
        iV.value = inputVoltage;
    }
    for(let i = 0; i < 8; i+= 0.001){
        x = i;
        if(inputSignal == "Sine"){
            y = Math.sin(x)*inputVoltage;
        }
        else if(inputSignal == "Step"){
            y = Math.sign(Math.sin(x))*inputVoltage;
        }
        else if(inputSignal == "sawtooth"){
            y = x*inputVoltage;
        }
        xCordinates.push(x);
        yCordinates.push(y);
    }
    Plotly.newPlot("signalInput", {
        "data" : [{
            y: yCordinates,
            x: xCordinates,
            type: "scatter",
        }],
        "layout": {
            "title": "Input Signal",
            "xaxis": {
                "title": "Time"
            },
            "yaxis": {
                title: "Amplitude",
                range: [-8, 8]
            },
            "width": 300,
            "height": 300
        }
    });
    log(`Input Signal Generated Type: ${inputSignal} Voltage: ${inputVoltage} Volts`);
}

const inputVoltage = document.querySelector("#inputVoltage");
inputVoltage.addEventListener("input", (e) => {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var c = url.searchParams.get("inputSignal");
    waveGenerator(c, e.target.value);
});

function changeSignal() {
    const value = document.querySelector("#inputSignal").value;
    const voltage = document.querySelector("#inputVoltage").value; 
    location.href = "?inputSignal=" + value + "&inputVoltage=" + voltage;
}