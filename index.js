const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const arrays=[letters,symbols,numbers]

let passwordLength = 15
let pass1 = document.getElementById("firstPass")
let pass2 = document.getElementById("secondPass")


function chooseArray(){
    let indexArray = Math.floor(Math.random() * arrays.length)
    return arrays[indexArray]
}

function message(){
    alert("copied")
}

function generatePassword(){ 
    let password = ""
    for (let i=0; i<passwordLength; i++) {
        let arrayName = chooseArray()
        let index = Math.floor(Math.random() * arrayName.length)
        let passwordItem = arrayName[index]
        password += passwordItem
    }
    return password
}

function generatePasswords(){
    pass1.textContent = generatePassword()
    pass2.textContent = generatePassword()
}

var clipboard1 = new ClipboardJS('.passButton1');
var clipboard2 = new ClipboardJS('.passButton2');



