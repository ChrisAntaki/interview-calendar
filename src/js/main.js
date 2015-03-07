function loadAdditionCSS() {
    var css = document.createElement('link');
    css.setAttribute('href', 'css/calendar.css');
    css.setAttribute('rel', 'stylesheet');
    css.addEventListener('load', function(e) {
        console.log('Additional CSS has loaded.');
    }, false);
    document.head.appendChild(css);
}

loadAdditionCSS();
