/*
    PER TUTTE LE PAGINE:
    1.1) Gestire l'aside come menù in maniera corretta, evidenziando la pagina 
        attualmente visualizzata
    1.2) Mettere il proprio cognome e nome nel footer

    PER QUESTA PAGINA (Il punto 5 inizia già in index.js -> punti totali 2.5)
    5.2) Salvare nella prima pagina i progressi dell'UTENTE LOCALE
        (Non si ha la necessità di salvarli su db)

    5.3) Mostrare in modo dinamico i progressi come da esempio
        
*/
window.onload = async function (){
    let div = document.getElementById("stat");
    let datiP = await fetch("http://localhost:8080/5a/EsSequenze/server/getDati2.php", { method: 'GET' });
    let puzzleDati = await datiP.json();

    for(let el of puzzleDati)
    {
        let html = `<div>
        <div>${el.descr}</div>
        <div>Tempo: ....</div>
        <div>Mosse: ....</div>
        <div>Giorno: ../../....</div>
    </div>
    `
    div.innerHTML += html
    }
}