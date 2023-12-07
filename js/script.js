// sidebar functionality
function init() {
    const hamburger = document.querySelector(".hamburger");
    const sidebarCloseButton = document.querySelector(".close-button");
    const sidebarContainer = document.querySelector(".sidebar-container");
  
    const updateAccessiblityChecks = function (sidebarOpening) {
      const sidebarLinks = [
        ...document.querySelectorAll(".sidebar-links .nav-link"),
      ];
      sidebarLinks.forEach((eachLink) => {
        eachLink.setAttribute("tabIndex", sidebarOpening ? 0 : -1);
      });
      document
        .querySelector(".sidebar-container .logo-section a")
        .setAttribute("tabIndex", sidebarOpening ? 0 : -1);
    };
    const openSidebar = function () {
      sidebarContainer.classList.add("show-sidebar");
      updateAccessiblityChecks(true);
    };
    const closeSidebar = function () {
      sidebarContainer.classList.remove("show-sidebar");
      updateAccessiblityChecks(false);
    };
    hamburger.addEventListener("click", openSidebar);
    sidebarCloseButton.addEventListener("click", closeSidebar);
    updateAccessiblityChecks(false);
  }
  init();
  
  // sticky navbar
  function navbar() {
    const navbarContainer = document.querySelector(".nav-container");
    window.addEventListener("scroll", function () {
      let targetNumber = this.innerWidth >= 992 ? 70 : 50;
      if (this.scrollY >= targetNumber) {
        navbarContainer.classList.add("sticky-nav");
      } else {
        navbarContainer.classList.remove("sticky-nav");
      }
    });
  }
  navbar();

  // function for sumbit
  function submitBtn(){
    let errorMessage = "";
    let name = document.getElementsByClassName("primary-input");
    let email = document.getElementsByClassName("primary-input");
    let text = document.getElementsByClassName("primary-textarea");
  }
      if (name.value === "") {
        errorMessage += "Please enter yourname, ";
    }

    if (email.value === "") {
        errorMessage += "Please enter your email, ";
    }

    if (text.value === "") {
        errorMessage += "Please enter some text, ";
    }
    // printing error message if contain
    if (errorMessage !== "") {
      document.getElementsByClassName("Final_div").innerHTML = "<h4>" + errorMessage + "</h4>";
      document.getElementsByClassName("Final_div").style.color = "red";
   } 
    // printing the Final message if there is no error
    else {
        let FinalMessage = "Hi " + name.value + "  welcome to my website. Thank you for visiting us. ";
        document.getElementsByClassName("Final_div").innerHTML = "<h4>" + FinalMessage + "</h4>";
        document.getElementsByClassName("Final_div").style.color = "black";
    }

      