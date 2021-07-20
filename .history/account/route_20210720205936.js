$(document).ready(function(){
    // load the dashboard body
    $.get('./pages/board.html',function(data){
        $('.content').html(data)
    });

    // load student profile
    $('.nav-item').eq().click(function(){
        $.get('./pages/profile.html',function(data){
            $('.content').html(data)
        });
    })
})