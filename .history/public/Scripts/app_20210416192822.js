"use strict";
((core) =>
{
    function authGuard()
    {
    if(!sessionStorage.getItem("user"))
    {
    // redirect back to login page
    location.href = "/login";
    }
    }
    function Start()
    {
        console.log("App Started...");

        loadHeader(router.ActiveLink);
      
        loadContent(router.ActiveLink, ActiveLinkCallBack(router.ActiveLink));

        loadFooter();
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
})(core || (core={}));