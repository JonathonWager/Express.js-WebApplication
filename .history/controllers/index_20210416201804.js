/*
Jonathon Wager 100698641
Aaron Leblanc 100700122
4/16/2021
style.css
*/
module.exports.displayHome = (res) => {
    res.render("index", {
      title: "Home",
    });
  };
  
  module.exports.displayAbout = (res) => {
    res.render("index", {
      title: "About",
    });
  };
  
  module.exports.displayProjects = (res) => {
    res.render("index", {
      title: "Projects",
    });
  };
  
  module.exports.displayServices = (res) => {
    res.render("index", {
      title: "Services",
    });
  };
  module.exports.displayBusCon = (res) => {
    res.render("index", {
      title: "Bussinesscontact",
    });
  };
  module.exports.displayLogin = (res) => {
    res.render("index", {
      title: "Login",
    });
  };
  module.exports.displayRegister = (res) => {
    res.render("index", {
      title: "Register",
    });
  };
  module.exports.displayContact = (res) => {
    res.render("index", {
      title: "Contact",
    });
    
  
  
  };