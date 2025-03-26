let displayValue = '';

function appendToDisplay(value) {

  displayValue += value;

  document.getElementById('display').value = displayValue;

}

function clearDisplay() {

  displayValue = '';

  document.getElementById('display').value = displayValue;

}


function calculate() {


    displayValue = eval(displayValue);

    document.getElementById('display').value = displayValue;


}
function displayEvenNumbers() {

    const tableau = [{
        "Table": "7*1=7",
    },{
        "Table": " 7*2=14",
    },{
        "Table": " 7*3=21",
    },{
        "Table": " 7*4=28",
    },{
        "Table": " 7*5=35",
    },{
        "Table": " 7*6=42",
    },{
        "Table": " 7*7=49",
    },{
        "Table": " 7*8=56",
    },{
        "Table": " 7*9=63",
    },{
        "Table" : " 7*10=70",
    }];

    let list = document.getElementById("evenNumbers");
    for (let i = 0; i < tableau.length ; i++) {
            let p = document.createElement("p");	
            p.textContent = tableau[i].Table;
            list.appendChild(p);
    }
}

displayEvenNumbers();