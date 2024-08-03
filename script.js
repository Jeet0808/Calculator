const display = document.getElementById("display");

function calc(input){
    display.value += input;

}

function cleardisplay(){
    display.value = "";

}

function result(){
    try {
        display.value = eval(display.value).toFixed(3);
    } catch (error) {
        display.value = "Error";
    }
   

}