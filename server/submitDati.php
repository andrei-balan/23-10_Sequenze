<?php
$input = file_get_contents("php://input");
$data = json_decode($input);


if ($data === null) {

    die("Errore nella decodifica dei dati JSON.");
}
else{
  $titolo= $data->titolo;
$img1 = $data->img1;
$img2 = $data->img2;
$img3 = $data->img3;

$conn = new mysqli("localhost", "root", "", "5_sequenze");
if ($conn->connect_error) {
  die("Connessione al database fallita: " . $conn->connect_error);
}
// Preparo la query
$query = "INSERT INTO sequenze (img1, img2, img3) VALUES ('$img1', '$img2', '$img3')";

// Eseguo la query
$result = $conn->query($query);
if (!$result) {
  die("Errore nell'esecuzione della query: " . $conn->error);
}
$query = "INSERT INTO temi (descr) VALUES ('$titolo')";

// Eseguo la query
$result = $conn->query($query);
if (!$result) {
  die("Errore nell'esecuzione della query: " . $conn->error);
}



$conn->close();
  
}





?>