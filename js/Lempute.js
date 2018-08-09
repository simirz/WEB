function toggleLempute() {
    elementas = document.getElementById('lempute');

    if (elementas.src.match('light-bulb-on.jpg')) {
        elementas.src = 'light-bulb-off.jpg';
    } else {
        elementas.src = 'light-bulb-on.jpg';
    }
}



