// ==UserScript==
// @name          Show Password onMouseOver
// @include       *

// ==/UserScript==

window.setTimeout(function() {
  var Field = document.querySelectorAll("input[type='password']");
  if (!Field.length) return;
  var len =Field.length;
  for (var i=0; i<len; i++) {
      Field[i].addEventListener("mouseover", function() {this.type = "text";}, false);
      Field[i].addEventListener("mouseout", function() {this.type = "password";}, false);
  }
}, 500)();
