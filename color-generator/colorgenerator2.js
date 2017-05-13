/* Author: Courtney Cania
 * Random Color Generator
 * Create a loop that generates values to create a
 * hexidecimal color value and loads it as the 
 * background color. 
 */

/* 
// old script, decided not to use this because it seemed to not generate a hex code as random as it could be.

function colorChange () { 
        var set = "012345678910ABCDEF"; 
        var hex = "#";
        for (var v = 0; v < 6; v++) {
            //spit out a random character from string in set
            hex += set[Math.floor(Math.random() * set.length)]
        }
var color = hex;
  console.log(color);
document.getElementById("colorBlock").style.backgroundColor = color;   document.getElementById("colorBlock").innerHTML = "<h1>" + color + "</h1>";       
        }*/ 
      
  function colorChange () {   
    var hex = "";
     for (var i = 0; i < 6; i++) {   
         //repeats the inner loop six times to create a six character hex code 
        for (var v = 0; v < 1; v++) { 
             var set = "012345678910ABCDEF"; 
            //Hex is base 16
            hex += set[Math.floor(Math.random() * set.length)]
            //creates a random character from base
        }
         console.log(hex);
    }
        console.log(hex);
      var color = "#"+hex;
      document.body.style.backgroundColor = color;   document.getElementById("colorBlock").innerHTML = "<h1>" + color + "</h1>";       
  }
        