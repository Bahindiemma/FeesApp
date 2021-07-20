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

      // load staff performance
      $('.nav-item').eq(2).click(function(){
        $.get('./pages/perfomance.html',function(data){
            $('.content').html(data)
        });
    })

      // load reports
      $('.nav-item').eq(3).click(function(){
        $.get('./pages/reports.html',function(data){
            $('.content').html(data)
        });
    })

      // load registration
      $('.nav-item').eq(4).click(function(){
        $.get('./pages/registration.html',function(data){
            $('.content').html(data)
        });
    })
})