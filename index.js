var bubble = require('./text/bubble.js')
var fraktur = require('./text/fraktur.js')
var handwriting = require('./text/hand-writing.js')
var monospace = require('./text/monospace.js')
var big = require('./text/big')
var fairy = require('./text/fairy')
var square = require('./text/square')
var ud = require('./text/upside-down')
var fancy = require('./text/fancy')
var blacksquare = require('./text/bsquare')

module.exports = function (str, options) {
  options = options.toLowerCase();
  if (options === "bubble") {
  var newsentence = "";
  var length = str.length;
  var char = "";
  for (var i = 0; i <= length; i++) {
    char = str.charAt(i)
    newsentence += bubble[char.toLowerCase()] || char
  }
  return newsentence
} else if (options === "fraktur") {
  var newsentence = "";
  var length = str.length;
  var char = "";
  for (var i = 0; i <= length; i++) {
    char = str.charAt(i)
    newsentence += fraktur[char.toLowerCase()] || char
  }
  return newsentence
} else if (options === "hand-writing") {
  var newsentence = "";
  var length = str.length;
  var char = "";
  for (var i = 0; i <= length; i++) {
    char = str.charAt(i)
    newsentence += handwriting[char.toLowerCase()] || char
  }
  return newsentence
} else if (options === "monospace") {
  var newsentence = "";
  var length = str.length;
  var char = "";
  for (var i = 0; i <= length; i++) {
    char = str.charAt(i)
    newsentence += monospace[char.toLowerCase()] || char
  }
  return newsentence
} else if (options === "big") {
  var newsentence = "";
  var length = str.length;
  var char = "";
  for (var i = 0; i <= length; i++) {
    char = str.charAt(i)
    newsentence += big[char.toLowerCase()] || char
  }
  return newsentence
} else if (options === "fairy") {
  var newsentence = "";
  var length = str.length;
  var char = "";
  for (var i = 0; i <= length; i++) {
    char = str.charAt(i)
    newsentence += fairy[char.toLowerCase()] || char
  }
  return newsentence
} else if (options === "square") {
  var newsentence = "";
  var length = str.length;
  var char = "";
  for (var i = 0; i <= length; i++) {
    char = str.charAt(i)
    newsentence += square[char.toLowerCase()] || char
  }
  return newsentence
} else if (options === "upside-down") {
  var newsentence = "";
  var length = str.length;
  var char = "";
  for (; length >= 0; --length) {
    char = str.charAt(length)
    newsentence += ud[char] || ud[char.toLowerCase()] || char
  }
  return newsentence
} else if (options === "black-square") {
  var newsentence = "";
  var length = str.length;
  var char = "";
  for (var i = 0; i <= length; i++) {
    char = str.charAt(i)
    newsentence += blacksquare[char.toLowerCase()] || char
  }
  return newsentence
} else if (options === "fancy") {
  var newsentence = "";
  var length = str.length;
  var char = "";
  for (var i = 0; i <= length; i++) {
    char = str.charAt(i)
    newsentence += fancy[char.toLowerCase()] || char
  }
  return newsentence
}  else {
  console.log("Unknown Custom Type of Text")
}
}
