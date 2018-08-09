function toggleLempute1() {
    $('.Light-bulb1').slideToggle()
}

$('.Light-bulb1').click(function () {
    /*  $('.Light-bulb1').slideToggle();*/
    toggleLempute1();
});

$('.cell').click(function () {
    $(this).toggleClass('juoda')
});



window.setInterval(function () {
    $('.sachmatai .cell').toggleClass('juoda')
}, 1000);

$.get("failas.html", function(data, status){
    $('#failo_turinys_cia').html(data);
});