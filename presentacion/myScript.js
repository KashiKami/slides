var slides = [];

function next() {
    $(".up").fadeOut("slow").slideUp("slow");
    var idUp =  Number($('.up').attr('id')) - 1;
    var newId = '#' + Number(idUp);
    if(idUp>0){
        console.log(idUp)
        $('.up').removeClass('up');
        $(newId).addClass('up');
    }

}
function back() {
    $(".up").fadeIn("slow").slideDown("slow");
    var idUp =  Number($('.up').attr('id')) + 1;
    var newId = '#' + Number(idUp);
    if(idUp<=4){
        $('.up').removeClass('up');
        $(newId).addClass('up');
    }
}