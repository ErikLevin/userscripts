// ==UserScript==
// @name         Show BBCode spoilers
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Display BBCode spoiler tags as expanded. Set @match to desired domain.
// @author       levine
// @match         *://www.example.com/*
// @grant        none
// ==/UserScript==

'use strict';

// Modify all the spoilers on the page to show their spoiler text
var showSpoilers = function() {
    var spoilers = document.getElementsByClassName("bbc_spoiler_content");
    for (var kk = 0; kk < spoilers.length; kk++) {
        spoilers[kk].style.display = "block";
    }
}


showSpoilers();
