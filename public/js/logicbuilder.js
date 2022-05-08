let logicArr = [];
let inputArr = [];
let outputArr = [];
function convertToLogic(equation, input, output){
    // Get all the equation into logic Array separated by commas
    for(let i = 0; i < equation.length; i++){
        logicArr.push(equation[i]);
    }
    // Get all the input into input Array separated by commas
    for(let i = 0; i < input.length; i++){
        if(input[i] === ','){
            inputArr.push(input.substring(0, i));
            input = input.substring(i + 1);
            i = 0;
        }
    }
    inputArr.push(input);
    // Get all the output into output Array separated by commas
    for(let i = 0; i < output.length; i++){
        if(output[i] === ','){
            outputArr.push(output.substring(0, i));
            output = output.substring(i + 1);
            i = 0;
        }
    }
    outputArr.push(output);
    console.log(logicArr);
    console.log(inputArr);
    console.log(outputArr);

}



module.exports = {
    convertToLogic
}