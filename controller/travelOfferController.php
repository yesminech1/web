<?php
// TravelOfferController.php dans le dossier Controller
include_once(__DIR__ . '/../Model/TravelOffer.php');

class TravelOfferController {

    // Méthode pour afficher une offre de voyage
    public function showTravelOffer($offer) {
        // Appeler la méthode show() de la classe TravelOffer
        $offer->show();
    }
}
?>
