//creo variabile dei km da percorrere e chiedo all'utente di riempirla
let nKmPercorso = prompt("Quanti kilometrti vuoi percorrere?");
//trasformo la variabile dei kilometri da string a number
nKmPercorso = parseInt(nKmPercorso);

//verifico che i kilometri inseriti dall'utente siano numeri e non parole
if (isNaN(nKmPercorso)){
    alert("input non valido, per favore inserire un valore numerico per indicare i kilometri");
}else{
    //creo la variabile dell'età e chiedo all'utente di riempirla
    let etaPasseggero = prompt("Quanti anni ha il passeggero?");    
    //trasformo la variabile dell'età da string a number
    etaPasseggero = parseInt(etaPasseggero);


    //calcolo il prezzo del bigletto base
    let prezzoBiglietto = nKmPercorso * 0.21;

    //verifico che l'età indicata dall'utente sia un numero e non parole
    if (isNaN(etaPasseggero)){
        alert("input non valido, per favore inserire un età scritta con valore numerico");
    }else{
        //modifico il prezzo sulla base dell'età del passeggero
        if (etaPasseggero < 18) {
            prezzoBigliettoMinorenni = prezzoBiglietto - ((20 / 100) * prezzoBiglietto); //qui viene calcolato il 20% del prezzo del biglietto base da rimuovere per restituire un prezzo del biglietto ridotto
            prezzoBigliettoMinorenni = prezzoBigliettoMinorenni.toFixed(2);
            alert("il prezzo del tuo biglietto è di " +  prezzoBigliettoMinorenni + "€");
        } else if (etaPasseggero > 65){
            prezzoBigliettoOver65 = prezzoBiglietto - ((40 / 100) * prezzoBiglietto);//qui viene calcolato il 40% del prezzo del biglietto base da rimuovere per restituire un prezzo del biglietto ridotto
            prezzoBigliettoOver65 =  prezzoBigliettoOver65.toFixed(2);
            alert("il prezzo del tuo biglietto è di " + prezzoBigliettoOver65 + "€");
        } else{
            prezzoBiglietto = prezzoBiglietto.toFixed(2);
            alert("il prezzo del tuo biglietto è di " + (Math.round(prezzoBiglietto * 100) / 100) + "€");
        }
    }
}

