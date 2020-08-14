$(function(){
    $(window).scroll(function(){
        var sT = $(this).scrollTop();
        $(".cta-wrapper").css({transform: "rotate(" + sT/10 + "deg)"});
    });
    
    bubble();

    // $(".bubble").css({
    //     transform: "rotate(" + sT + "deg)", 
    //     top: sT%4
    // });
    
});
function bubble(){
    $(".bubble").animate({
        marginTop: '-=4px'
    },800).animate({
        marginTop: '+=4px'
    },800);
    $(".bubble2").animate({
        marginTop: '+=4px'
    },800).animate({
        marginTop: '-=4px'
    },800);
    setTimeout('bubble()', 1600);
}