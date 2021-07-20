$(document).ready(function(){
    // load the dashboard body
    $.get('./pages/board.html',function(data){
        $('.content').html(data)
    });

    // load dashboard
    $('.nav-item').eq(0).click(function(){
        $.get('./pages/board.html',function(data){
            $('.content').html(data)
        });
    })
    // load student profile
    $('.nav-item').eq(1).click(function(){
        $.get('./pages/profile.html',function(data){
            $('.content').html(data)
        });
    })

      // load st
      $('.nav-item').eq(2).click(function(){
        $.get('./pages/profile.html',function(data){
            $('.content').html(data)
        });
    })
})