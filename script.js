document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Simulate form submission
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    if (name && email && message) {
        document.getElementById("form-message").innerHTML = "Merci pour votre message ! Nous reviendrons vers vous sous peu.";
        document.getElementById("contact-form").reset();
    } else {
        document.getElementById("form-message").innerHTML = "Veuillez remplir tous les champs.";
        document.getElementById("form-message").style.color = "red";
    }
});
