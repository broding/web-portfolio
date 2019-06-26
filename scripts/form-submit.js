function validateForm() {

    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var birthday = document.forms["contactForm"]["birthday"].value;
    var country = document.forms["contactForm"]["country"].value;
    var message = document.forms["contactForm"]["message"].value;

    if (name == "" || email == "" || birthday == "" || country == "None" || email == "" || message == "") {
        alert("All fields are mandatory");
        return false;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        alert("You have entered an invalid email address")
        return false;
    } 
        
    if (!/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(birthday)) {
        alert("Please enter a valid date in the format: dd-mm-yyyy or dd/mm/yyyy")
        return false;
    }

    document.getElementById("name").value=""
    document.getElementById("email").value=""
    document.getElementById("birthday").value=""
    document.getElementById("country").value="None"
    document.getElementById("message").value=""

    document.getElementById("name-label").innerText = "Name:";
    document.getElementById("email-label").innerText = "E-mail:";
    document.getElementById("date-label").innerText = "Date of birth:";
    document.getElementById("country-label").innerText = "Country:";
    document.getElementById("message-label").innerText = "Message:";
    
    document.getElementById("name-input").innerText = name;
    document.getElementById("email-input").innerText = email;
    document.getElementById("date-input").innerText = birthday;
    document.getElementById("country-input").innerText = country;
    document.getElementById("message-input").innerText = message;
    
    return false;
}













