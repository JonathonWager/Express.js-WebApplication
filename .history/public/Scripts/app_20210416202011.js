
//Jonathon Wager 100698641
  //Aaron Leblanc 100700122
  //4/16/2021
  //app.js
//
(function () {
  //auth gaurd function to check if a user is logged in
    function authGuard()
    {
    if(!sessionStorage.getItem("user"))
    {
    // redirect back to login page
    location.href = "/login";
    }
    //on app.js start
    }
    function Start()
    {
        console.log("App Started...");
    }

    //if the user clicks on the Bussiness contact page run the authGuard
    if (document.title == "Bussinesscontact") {
        authGuard();
      
    }
    window.addEventListener("load", Start);
  })();