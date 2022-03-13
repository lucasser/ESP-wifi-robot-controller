function ajax(){
  var cmd = document.getElementById("command").value;
  var input = JSON.stringify({cmd: cmd});
  console.log(input);
  fetch("./cmd", {
    method: 'POST',
    body: input,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=UTF-8'
    }
  }).then(function(response){
    return response.json();
  }).then(function(data){
    console.log(data);
  }).then((res) => {
    if (res.status === 201) {
      console.log("Post successfully created!")
    }
  }).catch((error) => {
    console.log(error)
  })
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
