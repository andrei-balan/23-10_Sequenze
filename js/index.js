/*
    PER TUTTE LE PAGINE:
    1.1) Gestire l'aside come menù in maniera corretta, evidenziando la pagina 
        attualmente visualizzata
    1.2) Mettere il proprio cognome e nome nel footer

    PER QUESTA PAGINA
    2) Caricare il puzzle: immagini e titolo prendendone uno a caso da quelli sul db
        Le immagini su db sono ordinate, quindi è NECESSARIO disordinarle. 
        PUNTI: 2


    3) Cercare di presentare sempre puzzle diversi 
        (quando sono stati tutti presentati avvertire l'utente)
        PUNTI: 0.5

    4.1)  Una mossa è definita da un click su una delle immagini,
        effettuato un click l'immagine selezionata viene spostata nella cella vuota
        (il click sulla cella vuota non ha conseguenze)
        PUNTI: 1.5
        
    4.2) Cambiare puzzle dopo tre mosse o quando si è indovinata la sequenza


    5.1) Gestire il tempo di risoluzione, il numero di sequenze/puzzle risolvi,
        il numero di mosse effettuate
        PUNTI: 2.5

*/

window.onload = async function () {
    let divGioco = document.getElementById("gioco");
    let nMosse = document.getElementById("nMosse")
    
    let mosse = 0;
    let i = 1;
    let puzzle = []; 
    let puzzleI = 0;
    let immaginiCorrette = []
  
    
    function mescolaImmagini(vet) {
      for (let i = vet.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [vet[i], vet[j]] = [vet[j], vet[i]];
      }
    }
  
    
    function caricaPuzzleCasuale() {
      let puzzleCorrente = puzzles[puzzleI];
      mescolaImmagini(puzzleCorrente); 
      for (let el of puzzleCorrente) {
         
        const img = document.createElement('img');
        img.id = 'img' + i;
        img.className = 'img';
        img.src = el;
        divGioco.appendChild(img);      
        
        immaginiCorrette = [
            el, 
            el, 
            el, 
          ];
        console.log(immaginiCorrette)
        img.addEventListener("click",  () => {
          gestisciMossa(img);
        });
        
        i++;
      }
  
      puzzleI++; 
    }
  
    
    function gestisciMossa(imgCliccata) {
      
  
      
      const cellaVuota = document.querySelector('.img[src=""]');
      nMosse.innerHTML = mosse++; 
      const srcTemp = imgCliccata.src;
      imgCliccata.src = "";
      cellaVuota.src = srcTemp;

      if (puzzleRisolto()) {
        alert("Hai risolto il puzzle!");
      }
    }
    
      
    function puzzleRisolto() {
        const immaginiPuzzle = document.querySelectorAll('.img');
        
        // Estrai gli attributi src delle prime tre immagini
        const srcImmaginiPuzzle = [
          immaginiPuzzle[0].src,
          immaginiPuzzle[1].src,
          immaginiPuzzle[2].src,
        ];
      
        // Confronta gli attributi src delle immagini con gli URL corretti
        for (let i = 0; i < 3; i++) {
          if (srcImmaginiPuzzle[i] !== immaginiCorrette[i]) {
            return false; 
          }
        }
      
        return true; // Il puzzle è risolto correttamente
      }
    
    
  
   
    let datiP = await fetch("http://localhost:8080/5a/EsSequenze/server/getDati.php", { method: 'GET' });
    let puzzleDati = await datiP.json();
    const puzzles = [];
    for (let puzzle of puzzleDati) {
    puzzles.push([puzzle.img1, puzzle.img2, "", puzzle.img3]);
    ;
    }
  
    
    caricaPuzzleCasuale();
  };
  