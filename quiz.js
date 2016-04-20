var userInputFields = {
  height: document.getElementById("inputTextHeight"),
  character: document.getElementById("inputTextCharacter")
}



//makes a tree with character and height provided by user
function tree() {
  for (var i = 1; i < (userInputFields.height.value * 2); i+=2) {
    var treeList = [];
    for (var k = 0; k < (userInputFields.height.value - i / 2); k++) {
      treeList.push(" ");
    }
    for (var j = 0; j < i; j++) {
      //Specifies character for the tree
      treeList.push(userInputFields.character.value);
    }
    console.log(treeList.join(""));
  }
}


//if enter is pressed the event lister will run this function to grow tree
function pressEnter(e) {
  var code = (e.keyCode ? e.keyCode : e.which);
  if (code === 13) {
    validateTextField();
  }
}

//Gives alert if text field is not filled in. Otherwise it runs the tree program
function validateTextField() {
  if (userInputFields.character.value === "") {
    alert("Please enter a character");
  } else if (userInputFields.height.value === "") {
    alert("Please enter a height");
  } else {
    tree ();
  }
}


//Button event listener to grow tree
document.getElementById("growTreeButton").addEventListener("click", validateTextField);

//Enter event listener to grow tree
document.getElementById("inputTextHeight").addEventListener("keypress", pressEnter);
document.getElementById("inputTextCharacter").addEventListener("keypress", pressEnter);




