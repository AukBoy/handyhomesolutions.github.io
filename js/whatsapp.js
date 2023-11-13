function whatsapp(){

    let number = "+94781194995"

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    var whatsappurl="https://wa.me/" + number +"?text="
    +"Name of Customer:"+ name +"%0a"
    +"email:"+ mobile+"%0a"
    +"subject:"+ email + "%0a"
    +"Message:"+ message;

    window.open(whatsappurl,"_blank").focus();

  }