<?php


$conn = new mysqli("localhost", "root", "", "5_sequenze");
if ($conn->connect_error) {
  die("Connessione al database fallita: " . $conn->connect_error);
}

$query = "SELECT * FROM temi";

$result = $conn->query($query);
if (!$result) {
  die("Errore nell'esecuzione della query: " . $conn->error);
}
else{
    $sequenze = array();
while ($row = $result->fetch_assoc()) {
  $sequenza = array(
    "codTema" => $row["codTema"],
    "descr" => $row["descr"]
    
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