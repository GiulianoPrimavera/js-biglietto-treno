//creo i prompt e assegno le variabili n km da percorrere e età del passeggero
let nKmPercorso = prompt("Quanti kilometrti vuoi percorrere?");
let etaPasseggero = prompt("Quanti anni ha il passeggero?");

//trasformo gli input dati dall'utente da string a number
nKmPercorso = parseInt(nKmPercorso);
etaPasseggero = parseInt(etaPasseggero);

//calcolo il prezzo del bigletto base
let prezzoBiglietto = nKmPercorso * 0.21;


//modifico il prezzo sulla base dell'età del passeggero

if (isNaN(etaPasseggero)){
    alert("input non valido, per favore inserire un età scritta con valore numerico");
}else{
    if (etaPasseggero < 18) {
        prezzoBigliettoMinorenni = prezzoBiglietto - ((20 / 100) * prezzoBiglietto); //qui viene calcolato il 20% del prezzo del biglietto base da rimuovere per restituire un prezzo del biglietto ridotto
        alert("il prezzo del tuo biglietto è di " +  (Math.round(prezzoBigliettoMinorenni * 100) / 100) + "€");
    } else if (etaPasseggero > 65){
        prezzoBigliettoOver65 = prezzoBiglietto - ((40 / 100) * prezzoBiglietto);//qui viene calcolato il 40% del prezzo del biglietto base da rimuovere per restituire un prezzo del biglietto ridotto
        alert("il prezzo del tuo biglietto è di " + (Math.round(prezzoBigliettoOver65 * 100) / 100) + "€");
    } else{
        alert("il prezzo del tuo biglietto è di " + (Math.round(prezzoBiglietto * 100) / 100) + "€");
    }
}
