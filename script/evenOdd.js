/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */


/* STEP
1. chiedere all'utente se sceglie pari o dispari;
2. chiedere all'utente un numero da 1 a 5;
3. generare numero random da 1 a 5 con math.random;
4. sommare numero utente con numero random; 
5. funzione con valore booleano per pari o dispari;
6. stampiamo in pagina chi ha vinto;
*/

// Get HTML Element 
var evenOddElement = document.getElementById("even-odd");

// Variables to collect data 
var userChoice = prompt("pari o dispari?");
var userNumber; 
console.log(userChoice)

// Validation 
while (userChoice.toLowerCase().trim() !== "pari" && userChoice.toLowerCase().trim() !== "dispari") {
    userChoice = prompt("pari o dispari?")
}

while (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
    userNumber = parseInt(prompt("Scegli un numero da 1 a 5")); 
    console.log(userNumber)
}

// function to get a random number 
function cpuRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var random = cpuRandom(1,5);
console.log(random);



// get the sum 
var sum = userNumber + random;
console.log("Questa è la somma: ", sum);


// function to estabilish if is even or odd 
function isEven(number) {
    if (number % 2 === 0) {
        return "pari";
    } else {
        return "dispari";
    }
}


// Print in page 

var result = isEven(sum);
var message = "La scelta del pc è: " + random + ". ";

if (userChoice.toLowerCase() == result) {
    evenOddElement.innerHTML = message + "Hai vinto!"
  
} else  {
    evenOddElement.innerHTML =  message + "Hai perso!"
}