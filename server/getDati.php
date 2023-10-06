<?php


$conn = new mysqli("localhost", "root", "", "5_sequenze");
if ($conn->connect_error) {
  die("Connessione al database fallita: " . $conn->connect_error);
}

$query = "SELECT * FROM sequenze";

$result = $conn->query($query);
if (!$result) {
  die("Errore nell'esecuzione della query: " . $conn->error);
}
else{
    $sequenze = array();
while ($row = $result->fetch_assoc()) {
  $sequenza = array(
    "codSeq" => $row["codSeq"],
    "tema" => $row["tema"],
    "img1" => $row["img1"],
    "img2" => $row["img2"],
    "img3" => $row["img3"]
  );
  array_push($sequenze, $sequenza);
}
}
// Chiudo la connessione al database
$conn->close();

// Ritorno i dati in formato JSON
header('Content-Type: application/json');
echo json_encode($sequenze);


?>