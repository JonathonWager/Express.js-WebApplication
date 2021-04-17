/*
Jonathon Wager 100698641
Aaron Leblanc 100700122
4/16/2021
index.js
*/
//Sets the title to Home
module.exports.displayHome = (res) => {
    res.render("index", {
      title: "Home",
    });
  };
  //Sets the title to Home
  module.exports.displayAbout = (res) => {
    res.render("index", {
      title: "About",
    });
  };
  //Sets the title to Home
  module.exports.displayProjects = (res) => {
    res.render("index", {
      title: "Projects",
    });
  };
  //Sets the title to Home
  module.exports.displayServices = (res) => {
    res.render("index", {
      title: "Services",
    });
  };
  //Sets the title to Home
  module.exports.displayBusCon = (res) => {
    res.render("index", {
      title: "Bussinesscontact",
    });
  };
  //Sets the title to Login
  module.exports.displayLogin = (res) => {
    res.render("index", {
      title: "Login",
    });
  };
  //Sets the title to Register
  module.exports.displayRegister = (res) => {
    res.render("index", {
      title: "Register",
    });
  };
  //Sets the title to Contact
  module.exports.displayContact = (res) => {
    res.render("index", {
      title: "Contact",
    });
    
  
  
  };