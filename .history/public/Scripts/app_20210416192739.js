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
})(core || (core={}));