const url = "http://127.0.0.1:8000/";
const risultato = document.getElementById("risultato");

async function caricaProdotti() {

    try {
        
        const risposta = await fetch(url + "elencoProdotti");

        const dati = await risposta.json();

        dati.prodotti.forEach((prodotto) => {
            const scheda = document.createElement("div");
            scheda.className = "prodotto";

            scheda.innerHTML =
                "<span class='prodotto_nome'>" + prodotto.nome + "</span>" +
                "<span class='prodotto_categoria'>" + prodotto.categoria + "</span>" +
                "<span class='prodotto_prezzo'>" + prodotto.prezzo.toFixed(2) + " &euro;</span>";

            risultato.appendChild(scheda);
        });

    } catch (errore) {
        console.error("Errore: ", errore);
        risultato.textContent = "Errore nella comunicazione con il server";
    }
}

caricaProdotti();