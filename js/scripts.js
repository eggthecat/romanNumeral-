var final = function (number) {
  if (input = 1000) {
    return "m"; //figure out remainder to push through if/else
  }  else if (i = 500) {
    return "D";
  }  else if (i = 100) {
    return "C";
  }  else if (i = 50) {
    return "L";
  }  else if (i = 10) {
    return "X";
  }  else if (i = 9) {
    return "IX";
  }  else if (i = 5) {
    return "V";
  }  else if (i = 4) {
    return "IV";
  }  else if (i = 1) {
    return "I";
  }
  console.log(newArray);
}

// user interface logic
$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    var input = parseInt($("input#number").val());
    var roman = ["I","IV","V","IX","X","L","C","D","M"]
    var numbers = ["1","4","5","9","10","50","100","500","1000"]
    // var inputSplit = input.split("");
    var newArray = [];
    var result = final(number);
    console.log(result);
  });
});
