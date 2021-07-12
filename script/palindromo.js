/*Palidroma
Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma */

/* STEP: 
1. Chiediamo con un prompt all'utente di inserire una parola;
2. Creiamo una funzione (isPalindrome)
3. con un valore booleano dobbiamo capire se la parola inserita dall'utente
risulta TRUE or FALSE;
4. Per fare questo dobbiamo capire se effettivamente la parola è leggibile al contrario;
5. Stampiamo in pagina;
 */


// Get HTML Element 
var palindromeElement = document.getElementById("palindrome") 

// Variable to collect data
var userWord = prompt("Inserisci una parola") 

// Function to estabilish if is true or false
function isPalindrome (word) {
   var reversed = word.split("").reverse().join("");
   if (word === reversed) {
       return true;
    } else {
       return false;
    } 
}

// Print in page
palindromeElement.innerHTML = userWord + ": " + isPalindrome(userWord);

