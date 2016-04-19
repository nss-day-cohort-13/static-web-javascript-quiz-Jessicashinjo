
var treeHeight = document.getElementById("inputTextHeight");

function tree() {
  for (var i = 1; i < treeHeight.value; i+=2) {
    var treeList = [];
    for (var k = 0; k < (4 - i / 2); k++) {
      treeList.push(" ");
    }
    for (var j = 0; j < i; j++) {
      //Specifies character for the tree
      treeList.push(document.getElementById("inputTextCharacter").value);
    }
    console.log(treeList.join(""));
  }
}


//if enter is pressed the event lister will run this function to grow tree
function pressEnter(e) {
  var code = (e.keyCode ? e.keyCode : e.which);
  if (code === 13) {
    tree();
  }
  }

// function userInputValid () {
//   if (document.getElementById("inputTextHeight").value ||
//       document.getElementById("inputTextCharacter").value === undefined) {
//     alert("Please enter a value");
//   }
// }

//Button event listener to grow tree
document.getElementById("growTreeButton").addEventListener("click", tree);

//Enter event listener to grow tree
document.getElementById("inputTextHeight").addEventListener("keypress", pressEnter);
document.getElementById("inputTextCharacter").addEventListener("keypress", pressEnter);