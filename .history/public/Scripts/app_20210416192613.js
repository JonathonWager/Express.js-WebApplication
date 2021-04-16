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

    core.User = User;
})(core || (core={}));