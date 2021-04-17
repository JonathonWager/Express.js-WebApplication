
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
    if (document.title == "Bussinesscontact") {
        authGuard();
      
    }
    function ActiveLinkCallBack(activeLink)
    {
      switch (activeLink) 
      {
        case "home": return displayHome;
        case "about": return displayAbout;
        case "projects": return displayProjects;
        case "services": return displayServices;
        case "contact": return displayContact;
        case "contact-list": return displayContactList;
        case "task-list": return DisplayTaskList;
        case "edit": return displayEdit;
        case "login": return displayLogin;
        case "register": return displayRegister;
        case "404": return display404;
        default:
          console.error("ERROR: callback does not exist: " + activeLink);
          break;
      }
    }
    window.addEventListener("load", Start);
  })();