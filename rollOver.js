// ==UserScript==
// @name         rollover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @descri       You
// @match        https://greasyfork.org/en/scripts/2286-allow-password-remembering/code
// @include        *
// ==/UserScript==ption  try to take over the world!
// @author

window.setTimeout(function() {
    var passFields= document.querySelectorAll("input[type='password']");
    if (!passFields.length){return;}
    for(var i=0;i<passFields.length;i++){
        passFields[i].addEventListner("mouseover",function(){this.type="text";}, false);
        passFields[i].addEventListner("mouseout",function(){this.type="password";}, false);
    }
},500)();