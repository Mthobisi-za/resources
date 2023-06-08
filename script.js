var Currentslider = 0;
$('.previous').click(() => {
    Currentslider--;
    $('.view').css({ "margin-left": '-400px' })
})