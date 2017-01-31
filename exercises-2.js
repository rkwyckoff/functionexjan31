// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x, y){

    if(x > y) {
      return x;
    } else {
      return y
    }
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x, y, z){
    return Math.max(x, y, z);
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------
function vowel(char) {
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    return true;
}   else {
    return false;
    }
}

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

var rovarspraket = function(text) {
  var string = text.toLowerCase();
  var vowels = ["a", "e", "i", "o", "u", " "];
  var y = "";
  for (i = 0; i < string.length; i++) {
     var current = string.charAt(i);
    if (vowels.indexOf(current) != -1) {
        y = (y + (current));
    } else {
        y = (y + (current + "o" + current));
    }
  }
  return y;
}





// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(){
    //...
}
