var navlinks = document.getElementById("navlinks");


    function showmenu(){
        navlinks.style.right = "0";
    }
    
    function hidemenu(){
        navlinks.style.right = "-200px";
    }


    
    function sendEmail(){
        Email.send({
    Host : "smtp.gmail.com",
    Username : "mailforranaji@gmail.com",
    Password : "Private",
    To : 'pranawat2002@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New Contact Form Response",
    Body : "Name :" + document.getElementById("name").value
     + "<br> Email :" + document.getElementById("email").value
     + "<br> Message :" + document.getElementById("message").value
}).then(
  message => alert("Response has been sucessfully sent")
);

    }