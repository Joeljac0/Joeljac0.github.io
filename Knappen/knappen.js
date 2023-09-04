let siffra = 0;

/*
var variabel = "bryter block"

let variabel = "nyare = blockvariabel, det samma gäller const"
*/

function plusClick(){
    siffra = siffra + 1
    console.log(`${siffra}`);
    document.getElementById("svar").innerHTML = siffra;
}

//Minusknappen
const minusknapp = document.getElementById("minus");
minusknapp.addEventListener("click", minusClick)

function minusClick(){
    siffra--
    console.log(`${siffra}`)
    document.getElementById("svar").innerHTML = siffra;
}

//console.log("funkar!" + ett)
//console.log(`funkar 2! ${ett}`)