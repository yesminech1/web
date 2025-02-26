/* 1ERE PARTIE :!!!!!!!!!!!!!
function validerFormulaire() {
  let title = document.querySelectorAll("input[type='text']")[0].value;
  let destination = document.querySelectorAll("input[type='text']")[1].value;
  let departureDate = document.querySelectorAll("input[type='date']")[0].value;
  let returnDate = document.querySelectorAll("input[type='date']")[1].value;
  let price = document.querySelectorAll("input[type='text']")[2].value;

  let errors = ""; 
  if (!title || !destination || !departureDate || !returnDate || !price) {
    errors += "- Tous les champs doivent être remplis.\n";
}

  if (title.length < 3) {
      errors += "- Titre doit contenir au moins 3 caractères.\n";
  }

  let destinationRegex = /^[A-Za-z\s]{3,}$/;
  if (!destinationRegex.test(destination)) {
      errors += "- Destination doit contenir seulement des lettres et des espaces, et au moins 3 caractères.\n";
  }

  if (departureDate >= returnDate) {
      errors += "- La date de retour doit être après la date de départ.\n";
  }

  if (isNaN(price) || price <= 0) {
      errors += "- Le prix doit être un nombre positif.\n";
  }

  if (errors) {
      alert(errors); 
      return false;
  }

  alert("Formulaire envoyé avec succès !");
  return true;
}*/





/* 2EME PARTIE:!!!!!!!!!!!!
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").addEventListener("submit", function (event) {
      event.preventDefault(); 

      document.querySelectorAll(".error").forEach(e => e.textContent = "");
      document.querySelectorAll(".success").forEach(e => e.textContent = "");

      let isValid = true;

      let title = document.getElementById("title").value;
      let destination = document.getElementById("destination").value;
      let departureDate = document.getElementById("departureDate").value;
      let returnDate = document.getElementById("returnDate").value;
      let price = document.getElementById("price").value;
      
      if (title.length < 3) {
          document.getElementById("titleError").textContent = "Le titre doit contenir au moins 3 caractères.";
          document.getElementById("titleError").classList.add("error");
          isValid = false;
      } else {
          document.getElementById("titleError").textContent = "";
          let correctMessage = document.createElement("div");
          correctMessage.classList.add("success");
          correctMessage.textContent = "Correct!";
          document.getElementById("title").after(correctMessage);
      }

      let destinationRegex = /^[A-Za-z\s]{3,}$/;
      if (!destinationRegex.test(destination)) {
          document.getElementById("destinationError").textContent = "La destination doit contenir au moins 3 lettres et des espaces.";
          document.getElementById("destinationError").classList.add("error");
          isValid = false;
      } else {
          document.getElementById("destinationError").textContent = "";
          let correctMessage = document.createElement("div");
          correctMessage.classList.add("success");
          correctMessage.textContent = "Correct!";
          document.getElementById("destination").after(correctMessage);
      }

      if (!departureDate) {
          document.getElementById("departureDateError").textContent = "La date de départ est requise.";
          document.getElementById("departureDateError").classList.add("error");
          isValid = false;
      } else if (!returnDate || returnDate <= departureDate) {
          document.getElementById("returnDateError").textContent = "La date de retour doit être après la date de départ.";
          document.getElementById("returnDateError").classList.add("error");
          isValid = false;
      } else {
          document.getElementById("departureDateError").textContent = "";
          document.getElementById("returnDateError").textContent = "";
          let correctMessage = document.createElement("div");
          correctMessage.classList.add("success");
          correctMessage.textContent = "Correct!";
          document.getElementById("returnDate").after(correctMessage);
      }

      if (isNaN(price) || price <= 0) {
          document.getElementById("priceError").textContent = "Le prix doit être un nombre positif.";
          document.getElementById("priceError").classList.add("error");
          isValid = false;
      } else {
          document.getElementById("priceError").textContent = "";
          let correctMessage = document.createElement("div");
          correctMessage.classList.add("success");
          correctMessage.textContent = "Correct!";
          document.getElementById("price").after(correctMessage);
      }

      // Validation de la disponibilité
      let availability = document.querySelector('input[name="availability"]:checked');
      if (!availability) {
          document.getElementById("availabilityError").textContent = "La disponibilité doit être sélectionnée.";
          document.getElementById("availabilityError").classList.add("error");
          isValid = false;
      } else {
          document.getElementById("availabilityError").textContent = "";
          let correctMessage = document.createElement("div");
          correctMessage.classList.add("success");
          correctMessage.textContent = "Correct!";
          document.getElementById("available").after(correctMessage); 
      }

      let category = document.querySelector("select").value;
      if (!category) {
          document.getElementById("categoryError").textContent = "La catégorie doit être sélectionnée.";
          document.getElementById("categoryError").classList.add("error");
          isValid = false;
      } else {
          document.getElementById("categoryError").textContent = "";
          let correctMessage = document.createElement("div");
          correctMessage.classList.add("success");
          correctMessage.textContent = "Correct!";
          document.querySelector("select").after(correctMessage); 
      }

      if (isValid) {
          alert("Formulaire validé avec succès !");
      }
  });
});*/
//3eme partie :!!!!!!!!!!
document.addEventListener("DOMContentLoaded", function () {
  
  document.getElementById("title").addEventListener('keyup', function() {
    let title = this.value;
    let titleError = document.getElementById("titleError");
    titleError.textContent = ''; 
    
    if (title.length < 3) {
      titleError.textContent = "Le titre doit contenir au moins 3 caractères.";
      titleError.classList.add("error");
      titleError.classList.remove("success");
    } else {
      titleError.textContent = "Correct!";
      titleError.classList.add("success");
      titleError.classList.remove("error");
    }
  });

  document.getElementById("destination").addEventListener('keyup', function() {
    let destination = this.value;
    let destinationError = document.getElementById("destinationError");
    destinationError.textContent = ''; 
    
    let destinationRegex = /^[A-Za-z\s]{3,}$/;
    if (!destinationRegex.test(destination)) {
      destinationError.textContent = "La destination doit contenir au moins 3 lettres et des espaces.";
      destinationError.classList.add("error");
      destinationError.classList.remove("success");
    } else {
      destinationError.textContent = "Correct!";
      destinationError.classList.add("success");
      destinationError.classList.remove("error");
    }
  });
  
});





