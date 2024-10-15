// * TRACCIA

/*
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/

// * PROCEDURA

// ! PARTE DI ESERCIZIO COMPLETAMENTE INUTILE CHE HO SCRITTO SBAGLIANDO A LEGGERE LA CONSEGNA, LA LASCIO COMMENTATA AVENDOLA ORMAI GIA' SCRITTA

/*
// elenco variabili da inserire
const isValidNumber = (n) => Number.isInteger(n) && n > 0; // variabile per controllare se un numero è valido o meno

// inserire un numero compreso fra 1 a 100
let inputNumber = parseInt(
  prompt("Inserisci un numero intero compreso fra 1 e 100:")
);

console.log("Hai inserito:", inputNumber);

// controllo se il numero inserito è valido o meno
if (!isValidNumber(inputNumber)) {
  console.log(
    "Valore inserito non valido, per favore inserisci un numero compreso fra 1 e 100"
  );
} else {
  console.log("Valore inserito valido, procedo con l'esercizio");
*/

// ! ELABORAZIONE DATI + OUTPUT

// inserisco un ciclo da 1 a 100
for (let i = 1; i <= 100; i++) {
  // controllo se il numero è divisibile sia per 3 che per 5
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz"); // se il numero è divisibile per 3 e per 5
  }
  // Controllo se è divisibile solo per 3
  else if (i % 3 === 0) {
    console.log("Fizz"); // se il numero è divisibile solamente per 3
  }
  // controllo se è divisibile solo per 5
  else if (i % 5 === 0) {
    console.log("Buzz"); // se il numero è divisibile solamente per 5
  }
  // se non è divisibile né per 3 né per 5, stampo il numero
  else {
    console.log(i); // se il numero non è divisibile né per 3 né per 5
  }
}
