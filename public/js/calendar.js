(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/js/main.js":[function(require,module,exports){
function loadAdditionalCSS() {
    var css = document.createElement('link');
    css.setAttribute('href', 'css/calendar.css');
    css.setAttribute('rel', 'stylesheet');
    css.addEventListener('load', function(e) {
        console.log('Additional CSS has loaded.');
    }, false);
    document.head.appendChild(css);
}

loadAdditionalCSS();

},{}]},{},["./src/js/main.js"]);
