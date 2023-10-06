/*
    PER TUTTE LE PAGINE:
    1.1) Gestire l'aside come menù in maniera corretta, evidenziando la pagina 
        attualmente visualizzata
    1.2) Mettere il proprio cognome e nome nel footer

    PER QUESTA PAGINA
    6.1) Ogni volta che viene incollato un indirizzo nelle caselle di testo è necessario
        mostrare nell'immagine corrispondente (sopra la casella) l'immagine di cui si è dato il link
        PUNTI:1.5
    
    6.2) Cliccando sul bottone inserisci è necessario inserire la nuova sequenza su db

*/
window.onload = function (){
    let inserisci = document.getElementById("btnInserisci").addEventListener("click",submit);
}
function submit(){
    
    let txtTitolo = document.getElementById("txtTitolo")
    let txtImg1 = document.getElementById("txtImg1")
    let txtImg2 = document.getElementById("txtImg2")
    let txtImg3 = document.getElementById("txtImg3")
    let txtImg4 = document.getElementById("txtImg4")

    if(txtTitolo.value && txtImg1.value && txtImg3.value && txtImg2.value)
    {
        let obj = {"titolo" : txtTitolo.value,
                    "img1" :txtImg1.value,
                    "img2": txtImg2.value,
                    "img3":txtImg3.value
    }
    console.log(obj)
       fetch("http://localhost:8080/5a/EsSequenze/server/submitDati.php", {method: 'post', body:JSON.stringify(obj)})
    }
    else{
        alert("dati mancanti")
    }
}

