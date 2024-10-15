// * TRACCIA

/*
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/

// * PROCEDURA

// ! RACCOLTA DATI

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

  // ! ELABORAZIONE DATI

  // inserisco un loop da 1 a 100

  // output finale
}
