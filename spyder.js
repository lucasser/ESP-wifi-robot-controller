function formSubmit(event) {
    var url = "./cmd";
    var request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.onload = function() { // request successful
    // we can use server response to our request now
      console.log(request.responseText);
    };

    request.onerror = function() {
      // request failed
    };

    request.send(new FormData(event.target)); // create FormData from form that triggered event
    event.preventDefault();
  }

  // and you can attach form submit event like this for example
  function attachFormSubmitEvent(formId){
    document.getElementById(cmd).addEventListener("submit", formSubmit);
  }
  var curWin
  function select(n) {
    switch (n){
      case wifi:
        window.location.href = './_ac';
        break;
      case drive:
        doClass("sel", "remove");
        document.getElementById("drive").classList.add('sel');
        document.getElementById("drive").style.property = "";
        curWin = "drive";
        doClass("control", "hide");
        document.getElementById('drivePage').style.display = "block";
        break;
      case prog:
        doClass("sel", "remove");
        document.getElementById("prog").classList.add('sel');
        curWin = 'prog';
        doClass("control", "hide");
        document.getElementById('progPage').style.display = "block";
        break;
      default:
        break;
    }
  }
  function doClass(className, operation){
    var elements = document.getElementsByClassName(className);
    if (operation === "remove") {
      for(element of elements){
        element.classList.remove(className);
      }
    } else if (operation === "hide") {
      for(element of elements){
        element.style.display = "none";
      }
    } else if (operation === "show"){
      for(element of elements){
        element.style.display = "block";
      }
    }
  }