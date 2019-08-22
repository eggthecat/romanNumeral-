


function converter(number) {
  var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  var converted = '';
  for (var i = 0; i < number.length; i++){
    while(numbers[i] <= number){
    converted += roman[i];
    number -= numbers[i];
    console.log(converted);
  }
}
return converted;
console.log(converted);
}

$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    var input = $("input#number").val();
    var functionCaller = converter(input);

    // $("#result").text(converted)
// $("#result").text(converted);
  });
});




//   if ((input = 1000) && (input % 1000 === 0)) {
  //     return "m"; //figure out remainder to push through if/else
  //   }
  //   }  else if (i = 500) {
    //     return "D";
    //   }  else if (i = 100) {
      //     return "C";
      //   }  else if (i = 50) {
        //     return "L";
        //   }  else if (i = 10) {
          //     return "X";
          //   }  else if (i = 9) {
            //     return "IX";
            //   }  else if (i = 5) {
              //     return "V";
              //   }  else if (i = 4) {
                //     return "IV";
                //   }  else if (i = 1) {
                  //     return "I";
                  //   }
                  // }

                  //
                  // user interface logic
