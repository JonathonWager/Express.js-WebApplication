/**
 * File: app.js
 * Author: Josh Bakos
 * Student ID: 100652490
 * Date: 2020-04-04
 */

 class Contact {
    constructor(
      contactName = "",
      emailAddress = "",
      contactNumber = "",
      contactMessage = ""
    ) {
      this.contactName = contactName;
      this.emailAddress = emailAddress;
      this.contactNumber = contactNumber;
      this.contactMessage = contactMessage;
    }
  }
  
  // IIFE
  (function () {
    console.log("%cDeclaring Variables", "color: red;");
    let contactObject = new Contact();
    let success = false;
  
    function Start() {
      console.log("App started!");
    }
  
    // When the user clicks the About Me button on the home page
    if (document.title == "Home") {
      document.getElementById("aboutButton").onclick = function () {
        location.href = "about";
      };
    }
  
    // Display the contact page content 
    if (document.title == "Contact" && contactObject.contactName == "") {
      DisplayContactContent();
    }
  
    // Scripts for contact form & page
    function DisplayContactContent() {
      function clearForm() {
        //document.getElementById("contactForm").reset();
        $("#contactForm")[0].reset();
        $("#errorMessage").hide();
      }
  
      function validateInput(selector, condition, errorMessage) {
        if (condition) {
          $("#errorMessage").show();
          $("#errorMessage").text(errorMessage);
          $(selector).select();
          $(selector).css("border", "2px solid red");
        } else {
          $("#errorMessage").hide();
          $(selector).css("border", "1px solid #ced4da");
        }
      }
  
      $("#errorMessage").hide();
      $("#contactName").select();
  
      // Contact Name Events
      $("#contactName").blur((e) => {
        validateInput(
          "#contactName",
          $("#contactName").val().length < 2,
          "Contact Name is Too Short"
        );
      });
  
      $("#contactName").focus((e) => {
        $("#contactName").select();
      });
  
      // Email Events
      $("#emailAddress").blur((e) => {
        validateInput(
          "#emailAddress",
          $("#emailAddress").val().length < 8 ||
            !$("#emailAddress").val().includes("@"),
          "Invalid Email Address"
        );
      });
  
      $("#emailAddress").focus((e) => {
        $("#emailAddress").select();
      });
  
      // Contact Number Events
      $("#contactNumber").blur((e) => {
        let phonePattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
        let phoneNumber = $("#contactNumber").val();
  
        validateInput(
          "#contactNumber",
          !phonePattern.test(phoneNumber),
          "Invalid Contact Number"
        );
      });
  
      $("#contactNumber").focus((e) => {
        $("#contactNumber").select();
      });
  
      // Contact Message Events
      $("#contactMessage").blur((e) => {
        validateInput(
          "#contactMessage",
          $("#contactMessage").val().length < 2,
          "Contact Message Too Short"
        );
      });
  
      $("#contactMessage").focus((e) => {
        $("#contactMessage").select();
      });
  
      $("#contactForm").submit((e) => {
        console.log("FORM SUBMITTED!");
  
        if (document.getElementById("contactForm").checkValidity() == false) {
          e.preventDefault();
          e.stopPropagation();
          console.log("form not valid");
        } else {
          let contactName = $("#contactName").val();
          let emailAddress = $("#emailAddress").val();
          let contactNumber = $("#contactNumber").val();
          let contactMessage = $("#contactMessage").val();
  
          console.log(`Contact Name: ${contactName}`);
          console.log(`Email Address: ${emailAddress}`);
          console.log(`Contact Number: ${contactNumber}`);
          console.log(`Contact Message: ${contactMessage}`);
  
          contactObject.contactName = contactName;
          contactObject.emailAddress = emailAddress;
          contactObject.contactNumber = contactNumber;
          contactObject.contactMessage = contactMessage;
  
          console.log(contactObject);
  
          clearForm();
        }
      });
  
      $("#resetButton").click((e) => {
        e.preventDefault();
        if (confirm("Are You Sure?")) {
          clearForm();
        }
      });
    }
  
    window.addEventListener("load", Start);
  })();
  