let bbubble = require('./text/bbubble.js')
let big = require('./text/big.js')
let bsquare = require('./text/bsquare.js')
let bubble = require('./text/bubble.js')
let emoji = require('./text/emoji.js')
let fairy = require('./text/fairy.js')
let fancy = require('./text/fancy.js')
let fraktur = require('./text/fraktur.js')
let handwriting = require('./text/hand-writing.js')
let monospace = require('./text/monospace.js')
let square = require('./text/square.js')
let ud = require('./text/upside-down.js')

module.exports = function (str, options) {
  options = options.toLowerCase();
  if (options === "bbubble") {
  var newsentence = "";
  var length = str.length;
  var char = "";
  for (var i = 0; i <= length; i++) {
    char = str.charAt(i)
    newsentence += bbubble[char] || bbubble[char.toLowerCase()] || char
  }
  return newsentence
} else if (options === "big") {
  var newsentence = "";
  var length = str.length;
  var char = "";
  for (var i = 0; i <= length; i++) {
    char = str.charAt(i)
    newsentence += big[char] || big[char.toLowerCase()] || char
  }
  return newsentence
} else if (options === "black-square") {
  var newsentence = "";
  var length = str.length;
  var char = "";
  for (var i = 0; i <= length; i++) {
    char = str.charAt(i)
    newsentence += bsquare[char] || bsquare[char.toLowerCase()] || char
  }
  return newsentence
} else if (options === "bubble") {
  var newsentence = "";
  var length = str.length;
  var char = "";
  for (var i = 0; i <= length; i++) {
    char = str.charAt(i)
    newsentence += bubble[char] || bubble[char.toLowerCase()] || char
  }
  return newsentence
} else if (options === "emoji") {
  var newsentence = "";
  var length = str.length;
  var char = "";
  for (var i = 0; i <= length; i++) {
    char = str.charAt(i)
    newsentence += emoji[char] || emoji[char.toLowerCase()] || char
  }
  return newsentence
} else if (options === "fairy") {
  var newsentence = "";
  var length = str.length;
  var char = "";
  for (var i = 0; i <= length; i++) {
    char = str.charAt(i)
    newsentence += fairy[char] || fairy[char.toLowerCase()] || char
  }
  return newsentence
} else if (options === "fancy") {
  var newsentence = "";
  var length = str.length;
  var char = "";
  for (var i = 0; i <= length; i++) {
    char = str.charAt(i)
    newsentence += fancy[char] || fancy[char.toLowerCase()] || char
  }
  return newsentence
} else if (options === "fraktur") {
  var newsentence = "";
  var length = str.length;
  var char = "";
  for (; length >= 0; --length) {
    char = str.charAt(length)
    newsentence += fraktur[char] || fraktur[char.toLowerCase()] || char
  }
  return newsentence
} else if (options === "hand-writing") {
  var newsentence = "";
  var length = str.length;
  var char = "";
  for (var i = 0; i <= length; i++) {
    char = str.charAt(i)
    newsentence += handwriting[char] || handwriting[char.toLowerCase()] || char
  }
  return newsentence
} else if (options === "monospace") {
  var newsentence = "";
  var length = str.length;
  var char = "";
  for (var i = 0; i <= length; i++) {
    char = str.charAt(i)
    newsentence += monospace[char] monospace[char.toLowerCase()] || char
  }
  return newsentence
} else if (options === "square") {
  var newsentence = "";
  var length = str.length;
  var char = "";
  for (var i = 0; i <= length; i++) {
    char = str.charAt(i)
    newsentence += square[char] || square[char.toLowerCase()] || char
  }
  return newsentence
} else if (options === "upside-down") {
  var newsentence = "";
  var length = str.length;
  var char = "";
  for (var i = 0; i <= length; i++) {
    char = str.charAt(i)
    newsentence += ud[char] || ud[char.toLowerCase()] || char
  }
  return newsentence
}  else {
  return "Unknown Custom Type of Text"
}
}
