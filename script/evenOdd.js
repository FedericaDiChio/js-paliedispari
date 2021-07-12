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
var evenOdd = document.getElementById("even-odd");

// Variables to collect data 
var userChoice = prompt("Pari o dispari?");
var userNumber = parseInt(prompt("Scegli un numero da 1 a 5")); 
console.log(userChoice)
console.log(userNumber)


// function to get a random number 
function cpuRandom(number) {
    var number = Math.floor(Math.random() * 5) + 1;
    return number;
}

console.log(cpuRandom())

// var random = cpuRandom();

// get the sum 
var sum = userNumber + cpuRandom();
console.log("Questa è la somma: ", sum);



// // function to estabilish if is even or odd 
// function isEven(number) {
//     if (number % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }



// // Print in page 
// var result = isEven(sum);
// evenOdd.innerHTML = "Il tuo numero è pari:" + result;

// if (userChoice === result) {
//     console.log("Hai vinto")
// } else  {
//     console.log("Hai perso")
// }