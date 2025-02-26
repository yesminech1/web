<?php
// Verification.php

// Inclure les fichiers nécessaires
include_once(__DIR__ . '/../../Model/travelOffer.php');
include_once(__DIR__ . '/../../Controller/travelOfferController.php');


// Vérifier si le formulaire a été soumis avec la méthode POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les valeurs envoyées par le formulaire
    $title = $_POST['title'];
    $destination = $_POST['destination'];
    $departureDate = $_POST['departureDate'];
    $returnDate = $_POST['returnDate'];
    $price = $_POST['price'];
    $availability = $_POST['availability'];
    $category = $_POST['category'];

    // Créer une instance de TravelOffer avec les valeurs récupérées
    $offer = new TravelOffer($title, $destination, $departureDate, $returnDate, $price, $availability, $category);

    // Créer une instance du contrôleur TravelOfferController
    $controller = new TravelOfferController();

    // Afficher les informations de l'offre en utilisant la méthode du contrôleur
    $controller->showTravelOffer($offer);
} else {
    echo "No data received.";
}
?>
