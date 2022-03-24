/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.*/

//Assegnazione variabili

let kilometers = parseInt(prompt("Benvenuto! Quanti km desidera percorrere?"));

let passengerAge = parseInt(prompt("Qual'è la sua età? (non barate)"));

let priceKm = 0.21;
let ticketPrice = kilometers * priceKm;

ticketPrice = Math.round((ticketPrice + Number.EPSILON) * 100) / 100;

let kilometersDiv = document.getElementById("kilometers");
let ageDiv = document.getElementById("age");
let output = document.getElementById("final");

//Outputs

output.innerHTML = "<h1>Prezzo Totale: " + ticketPrice + " &euro;</h1>";
kilometersDiv.innerHTML = "<h2>Chilometri inseriti: " + kilometers + " km</h2>";
ageDiv.innerHTML = "<h2>Età inserita: " + passengerAge + "</h2>";

// Outputs 18-

if (passengerAge < 18) {
  ticketPrice = ticketPrice - ticketPrice * 0.2;
  ticketPrice = Math.round((ticketPrice + Number.EPSILON) * 100) / 100;
  output.innerHTML =
    "<h1>Prezzo Totale con <b>Sconto Giovani</b>: " +
    ticketPrice +
    " &euro;</h1>";
  kilometersDiv.innerHTML =
    "<h2>Chilometri inseriti: " + kilometers + " km</h2>";
  ageDiv.innerHTML = "<h2>Età inserita: " + passengerAge + "</h2>";
}

//Outputs //65+

if (passengerAge > 65) {
  ticketPrice = ticketPrice - ticketPrice * 0.4;
  ticketPrice = Math.round((ticketPrice + Number.EPSILON) * 100) / 100;
  output.innerHTML =
    "<h1>Prezzo Totale con <b>Sconto Senior</b>: " +
    ticketPrice +
    " &euro;</h1>";
  kilometersDiv.innerHTML =
    "<h2>Chilometri inseriti: " + kilometers + " km</h2>";
  ageDiv.innerHTML = "<h2>Età inserita: " + passengerAge + "</h2>";
}

// Valori nulli

if (kilometers <= 0 || isNaN(kilometers)) {
  output.innerHTML =
    "<h2>Per favore premi <b>F5</b> e reinserisci i dati correttamente!</h2>";
  kilometersDiv.innerHTML = "";
  ageDiv.innerHTML = "";
}

if (kilometers <= 0 || isNaN(kilometers)) {
  alert("Bel Tentativo!");
}
