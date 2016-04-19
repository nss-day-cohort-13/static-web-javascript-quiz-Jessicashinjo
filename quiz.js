var userInput = {
  height: 0,
  character: 0
}

//Specifies height of treee
function getUserInputHeight(){
  userInput.height = document.getElementById("inputTextHeight").value
 }

//Specifies character for the tree
function getUserInputCharacter(){
  userInput.character = document.getElementById("inputTextCharacter").value
}

function tree() {
  console.log("the Button works!");
  getUserInputHeight();
  getUserInputCharacter();
}

//if enter is pressed the event lister will run this function to grow tree
function pressEnter(e) {
  var code = (e.keyCode ? e.keyCode : e.which);
  if (code === 13) {
    tree();
  }
}

//Button event listener to grow tree
document.getElementById("growTreeButton").addEventListener("click", tree);

//Enter event listener to grow tree
document.getElementById("inputTextHeight").addEventListener("keypress", pressEnter);
document.getElementById("inputTextCharacter").addEventListener("keypress", pressEnter);