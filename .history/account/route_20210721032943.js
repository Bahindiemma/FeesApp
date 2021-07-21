$(document).ready(function(){
    $('.ajax-container').hide();
    $.get('./pages/board.html',function(data){
        $(".navbar-brand").text('Dashboard')
        $(document).ajaxStart(function(){
           $('.ajax-container').show();
        });
        $(document).ajaxComplete(function(){
            $('.ajax-container').hide();
            $('.content').html(data)
        })
       

     });
    $('.nav-item').eq(0).addClass('active')
    // load dashboard
    $(".navbar-brand").text('Dashboard')
    $('title').text('Dashboard')
    $('.nav-item').eq(0).click(function(){
        $.get('./pages/board.html',function(data){
            $(document).ajaxStart(function(){
                $('.ajax-container').show();
             });
             $(document).ajaxComplete(function(){
                 $('.ajax-container').hide();
             })
            $('.content').html(data)
        });
         // maniplate dom
         $('html').removeClass('nav-open')
         $('.navbar-toggler').removeClass('toggled')
         $('.close-layer').hide()
         $('.nav-item').eq(0).addClass('active');
        $('.nav-item').eq(1).removeClass('active');
        $('.nav-item').eq(2).removeClass('active');
        $('.nav-item').eq(3).removeClass('active');
        $('.nav-item').eq(4).removeClass('active');
        $('.nav-item').eq(5).removeClass('active');
        $('.nav-item').eq(6).removeClass('active');
        $('.nav-item').eq(7).removeClass('active');
    })
    // load student profile
    $('.nav-item').eq(1).click(function(){
        $(".navbar-brand").text('Students Profile')
         $('title').text('Students-Profile')

        $.get('./pages/profile.html',function(data){
            $('.content').html(data)
        });
            // maniplate dom
            $('html').removeClass('nav-open')
            $('.navbar-toggler').removeClass('toggled')
            $('.close-layer').hide()
            $('.nav-item').eq(1).addClass('active');
           $('.nav-item').eq(0).removeClass('active');
           $('.nav-item').eq(2).removeClass('active');
           $('.nav-item').eq(3).removeClass('active');
           $('.nav-item').eq(4).removeClass('active');
           $('.nav-item').eq(5).removeClass('active');
           $('.nav-item').eq(6).removeClass('active');
           $('.nav-item').eq(7).removeClass('active');
    })

      // load staff performance
      $('.nav-item').eq(2).click(function(){
        $(".navbar-brand").text('Staff Perfomance')
        $('title').text('Staff');

        $.get('./pages/perfomance.html',function(data){
            $('.content').html(data);
        });
            // maniplate dom
            $('html').removeClass('nav-open')
            $('.navbar-toggler').removeClass('toggled')
            $('.close-layer').hide()
            $('.nav-item').eq(2).addClass('active');
           $('.nav-item').eq(1).removeClass('active');
           $('.nav-item').eq(0).removeClass('active');
           $('.nav-item').eq(3).removeClass('active');
           $('.nav-item').eq(4).removeClass('active');
           $('.nav-item').eq(5).removeClass('active');
           $('.nav-item').eq(6).removeClass('active');
           $('.nav-item').eq(7).removeClass('active');
    })

      // load reports
      $('.nav-item').eq(3).click(function(){
        $(".navbar-brand").text('Reports')
        $('title').text('Reports')
        $.get('./pages/reports.html',function(data){
            $('.content').html(data)
        });
            // maniplate dom
            $('html').removeClass('nav-open')
            $('.navbar-toggler').removeClass('toggled')
            $('.close-layer').hide()
           $(this).addClass('active');
           $('.nav-item').eq(1).removeClass('active');
           $('.nav-item').eq(2).removeClass('active');
           $('.nav-item').eq(0).removeClass('active');
           $('.nav-item').eq(4).removeClass('active');
           $('.nav-item').eq(5).removeClass('active');
           $('.nav-item').eq(6).removeClass('active');
           $('.nav-item').eq(7).removeClass('active');
    })

      // load registration
      $('.nav-item').eq(4).click(function(){
        $(".navbar-brand").text('Registration')
        $('title').text('Registration')

        $.get('./pages/registration.html',function(data){
            $('.content').html(data)
        });
            // maniplate dom
            $('html').removeClass('nav-open')
            $('.navbar-toggler').removeClass('toggled')
            $('.close-layer').hide()
            $('.nav-item').eq(4).addClass('active');
           $('.nav-item').eq(1).removeClass('active');
           $('.nav-item').eq(2).removeClass('active');
           $('.nav-item').eq(3).removeClass('active');
           $('.nav-item').eq(0).removeClass('active');
           $('.nav-item').eq(5).removeClass('active');
           $('.nav-item').eq(6).removeClass('active');
           $('.nav-item').eq(7).removeClass('active');
    });

     // load location
     $('.nav-item').eq(5).click(function(){
        $(".navbar-brand").text('Location')
        $('title').text('Location')

        $.get('./pages/location.html',function(data){
            $('.content').html(data)
        });
            // maniplate dom
            $('html').removeClass('nav-open')
            $('.navbar-toggler').removeClass('toggled')
            $('.close-layer').hide()
            $('.nav-item').eq(5).addClass('active');
           $('.nav-item').eq(1).removeClass('active');
           $('.nav-item').eq(2).removeClass('active');
           $('.nav-item').eq(3).removeClass('active');
           $('.nav-item').eq(4).removeClass('active');
           $('.nav-item').eq(0).removeClass('active');
           $('.nav-item').eq(7).removeClass('active');
           $('.nav-item').eq(6).removeClass('active');
    });
    
     // load notifications
     $('.nav-item').eq(6).click(function(){
        $(".navbar-brand").text('Notifications')
        $('title').text('Notifications')
        $.get('./pages/notifications.html',function(data){
            $('.content').html(data)
        });
            // maniplate dom
            $('html').removeClass('nav-open')
            $('.navbar-toggler').removeClass('toggled')
            $('.close-layer').hide()
            $('.nav-item').eq(6).addClass('active');
           $('.nav-item').eq(1).removeClass('active');
           $('.nav-item').eq(2).removeClass('active');
           $('.nav-item').eq(3).removeClass('active');
           $('.nav-item').eq(4).removeClass('active');
           $('.nav-item').eq(5).removeClass('active');
           $('.nav-item').eq(7).removeClass('active');
           $('.nav-item').eq(0).removeClass('active');
    });
    
     // load settings
     $('.nav-item').eq(7).click(function(){
        $.get('./pages/settings.html',function(data){
            $(".navbar-brand").text('Settings')
            $('title').text('Settings')

            $('.content').html(data)
        });
            // maniplate dom
            $('html').removeClass('nav-open')
            $('.navbar-toggler').removeClass('toggled')
            $('.close-layer').hide()
            $('.nav-item').eq(7).addClass('active');
           $('.nav-item').eq(1).removeClass('active');
           $('.nav-item').eq(2).removeClass('active');
           $('.nav-item').eq(3).removeClass('active');
           $('.nav-item').eq(0).removeClass('active');
           $('.nav-item').eq(5).removeClass('active');
           $('.nav-item').eq(6).removeClass('active');
    });
    
})