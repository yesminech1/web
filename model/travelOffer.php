<?php
// TravelOffer.php dans le dossier Model

class TravelOffer {
    // Attributs publics
    public $title;
    public $destination;
    public $departureDate;
    public $returnDate;
    public $price;
    public $availability;
    public $category;

    // Constructeur paramétré
    public function __construct($title, $destination, $departureDate, $returnDate, $price, $availability, $category) {
        $this->title = $title;
        $this->destination = $destination;
        $this->departureDate = $departureDate;
        $this->returnDate = $returnDate;
        $this->price = $price;
        $this->availability = $availability;
        $this->category = $category;
    }

    // Méthode pour afficher les informations de l'offre de voyage
    public function show() {
        echo "<table border='1' style='margin: 20px auto; border-collapse: collapse;'>";
        echo "<tr><th>Title</th><td>" . $this->title . "</td></tr>";
        echo "<tr><th>Destination</th><td>" . $this->destination . "</td></tr>";
        echo "<tr><th>Departure Date</th><td>" . $this->departureDate . "</td></tr>";
        echo "<tr><th>Return Date</th><td>" . $this->returnDate . "</td></tr>";
        echo "<tr><th>Price</th><td>" . $this->price . "</td></tr>";
        echo "<tr><th>Availability</th><td>" . $this->availability . "</td></tr>";
        echo "<tr><th>Category</th><td>" . $this->category . "</td></tr>";
        echo "</table>";
    }
}
?>
