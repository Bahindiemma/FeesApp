// Image color picker
var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');
var image = document.querySelector('img');
image.src = './assets/img/cover.jpg'
var x='',y='';

image.onload = function(e){
    image.width = canvas.width;
    image.height = canvas.height;
    context.drawImage(image,0,0,image.width,image.height);
    x= 180,y = 37;
   var imageData = context.getImageData(x,y,1,1);
   var pixel = imageData.data;
   var color = 'rgba('+pixel[0]+','+pixel[1]+','+pixel[2]+')';
//    document.querySelector('section').style.backgroundColor = color;
}
// toggle form
var signUp = document.querySelector('section');

var toggleForm = ()=>{
    signUp.classList.toggle("active");
    document.body.classList.toggle('active');
}


/* 
Login validation 
*/
jQuery(document).ready(function($){
var verify = false;
    var regx = /[a-z]@+/g;
    // email validation
    $('.signin-email').on('input',function(){
           var input = $(this).val();
        let atposition = input.indexOf("@");
        let dotposition = input.lastIndexOf(".");
        if (regx.test(input) == false) {
            $(this).addClass('input-error');
            $('.error-email').text('Email must be lowercase').addClass('fa fa-times w3-text-red');
        } else if (atposition < 1 || (dotposition - atposition < 2)) {
            $(this).addClass('input-error');
            $('.error-email').text('Email must contain `@` and `.`').addClass('fa fa-times w3-text-red');
        }else{
            $(this).removeClass('input-error').addClass('input-sucess')
            $('.error-email').text('').removeClass('fa fa-times w3-text-red');
        }
        //  $('.error-email').text('dotposition').addClass('fa fa-times w3-text-red');
    }).on('blur',function(){
        if($(this).val() == ''){
            $(this).addClass('input-error')
            $('.error-email').text('Email required').addClass('fa fa-times w3-text-red');
        } else{
            $('.error-email').text('').removeClass('fa fa-times');
            $(this).removeClass('input-error input-sucess');
        }
    });

    // password validation
    $('.signin-password').on('input',function(){
        var regx = /@+[a-zA-Z0-9]/g;
        let password = $(this).val();
        var check = regx.test(password);
        if(check == false){
            verify = false
        $(this).addClass('input-error');
            $('.error-password').text('Password must contain `@ letters[A-Z or a-z] numbers 0-9`').addClass('fa fa-times w3-text-red');
        }else if(password.length < 7){
            verify = false;
             $(this).addClass('input-error').removeClass('input-sucess');
            $('.error-password').text('Password must have more than 7 characters').addClass('fa fa-times w3-text-red');
        }else{
            verify = true;
            $(this).addClass('input-sucess');
            $('.error-password').text('').removeClass('fa fa-times w3-text-red').addClass('fa fa-check w3-text-green');
        }
    }).on('blur',function(){
       
        var input = $(this).val();
        if(input == ''){
            verify = false;
            $(".signin-password").removeClass('input-sucess').addClass('input-error');
            $('.error-password').text('Password field must be filled').addClass('fa fa-times w3-text-red');
        }else{
             verify = true;
            $(this).text('').removeClass('fa fa-check w3-text-green');
            $(this).removeClass('input-sucess').removeClass('input-error');
        }
      


    });
// sign in button
    $('.signin').on('click',function(){
        if(verify == false){
            /**
             * Error messages
             */ 
             $('.error-email').text('Email must be filled ').addClass('fa fa-times w3-text-red');
             $('.error-password').text('Password field must be filled').addClass('fa fa-times w3-text-red');
            /**
             * input boxes
             */  
            $(".signin-password").removeClass('input-sucess').addClass('input-error');
            $(".signin-email").removeClass('input-sucess').addClass('input-error');
        }else{
            window.location = './account/dashboard.html';
        }
    });

});


/**
 * Create account validation
 */ 

jQuery(document).ready(function($){
    var verify = false;
    // username validation
    $('.signup-username').on('input',function(){
        var regx = /[A-z]/g;
       var username = $(this).val();
    //    console.info(regx.test(username))
       if (regx.test(username) == false) {
        verify = false;
           $('.msg-user').text('Username must have atleast an uppercase or lowercase letter').addClass(' w3-text-red').removeClass('fa fa-check w3-text-green');
           $(this).addClass('input-error').removeClass('input-sucess');
       } else if(username.length < 5){
        verify = false;
        $('.msg-user').text('Username must have more than (5) characters').addClass('fa fa-times w3-text-red').removeClass('fa fa-check w3-text-green');
        $(this).addClass('input-error').removeClass('input-sucess');
       }else{
        verify = true;
        $(this).addClass('input-sucess').removeClass('input-error');
        $('.msg-user').text('').removeClass('fa fa-times w3-text-red').addClass('fa fa-check w3-text-green');
       }
    }).on('blur',function(){
        verify = false;
        var username = $(this).val();
        if (username == '') {
            $('.msg-user').text('This field is required').addClass('w3-text-red').removeClass('fa fa-check w3-text-green');
            $(this).addClass('input-error').removeClass('input-sucess');
        } else {
            verify = true;
            $('.msg-user').text('').addClass('w3-text-red').removeClass('fa fa-check w3-text-green');
            $(this).removeClass('input-sucess input-error');
            
        }
    });


    // address validation
    $('.signup-address').on('input',function(){
        var regx = /[A-Z]/;
        var addres = $(this).val();
        if(regx.test(addres) == false){
            verify = false;
            $('.msg-address').text('Home Address must start with uppercase').addClass('w3-text-red');
            $(this).addClass('input-error').removeClass('input-sucess');;
        }else if(addres.length < 6){
            verify = false;
            $('.msg-address').text('Address must have more that (5) characters ').addClass('w3-text-red');
            $(this).addClass('input-error').removeClass('input-sucess');;
        }else{
            verify = true;
            $('.msg-address').text('').removeClass('w3-text-red');
            $(this).removeClass('input-error').addClass('input-sucess');
        }
        
    }).on('blur',function(){
        var addres = $(this).val();
         if(addres == ''){
            verify = false;
            $('.msg-address').text('This field is required').addClass('w3-text-red');
            $(this).addClass('input-error').removeClass('input-sucess');;
        }else{
            verify = true;
            $('.msg-address').text('').removeClass('w3-text-red');
            $(this).removeClass('input-error input-sucess')
        }
        
    });

    // email validation
    $('.signup-email').on('input',function(){
        var dom = $(this).val();
        var regx = /[a-z]/g;
       var atposition = dom.indexOf("@");
       var dotposition = dom.lastIndexOf(".");

        if (regx.test(dom) == false) {
            verify = false;
            $('.msg-email').text('Email contains only lowercase letters!').addClass('fa fa-times w3-text-red');
            $(this).addClass('input-error').removeClass('input-sucess');
        } else if(atposition < 1 || (dotposition - atposition < 2) ){
            verify = false;
            $('.msg-email').text('Email must contain `@` and `.` eg example@gmail.com').addClass('fa fa-times w3-text-red');
            $(this).addClass('input-error').removeClass('input-sucess');
        }else{
            verify = true;
            $('.msg-email').text('').removeClass('fa fa-times w3-text-red');
            $(this).removeClass('input-error').addClass('input-sucess');
        }
        
    }).on('blur',function(){
        var dom = $(this).val();
        if (dom == '') {
            verify = false;
            $('.msg-email').text('This field is required').addClass('fa fa-times w3-text-red');
            $(this).addClass('input-error');
        } else {
            verify = true;
        $(this).removeClass('input-error input-sucess')
        }
    });
// password validation
    $('.signup-npass').on('input',function(){
        var regx = /@+[a-zA-Z0-9]/g; 
        /* returns true if the password
            contains @ ,starts with either uppercase or lowercase letter and also contains some numbers
                                             */
        var pass = $(this).val();
        if(regx.test(pass) == false){
            verify = false;
            $('.msg-new-password').text('Password must contain `@ A-Z a-z 0-9`').addClass('w3-text-red');
            $(this).addClass('input-error').removeClass('input-sucess');
        }else if (pass.length < 7) {
            verify = false;
            ('.msg-new-password').text('Password must have more than 6 characters`').addClass('w3-text-red');
            $(this).addClass('input-error').removeClass('input-sucess');
        }else{
            verify = true;
            $('.msg-new-password').text('').addClass('w3-text-red');
            $(this).removeClass('input-error').addClass('input-sucess');
        }
    }).on('blur',function(){
     
        var pass = $(this).val();
        if (pass == '') {
            verify = false;
            $('.msg-new-password').text('This field is required').addClass('w3-text-red');
            $(this).addClass('input-error').removeClass('input-sucess');
        } else {
            verify = true;
            $('.msg-new-password').text('').removeClass('w3-text-red');
            $(this).removeClass('input-sucess input-error');
        }
    });
// confirm password validation
    $('.signup-cpass').on('input',function(){
        var regx = /@+[a-zA-Z0-9]/g; 
        var cpass = $(this).val();
        var pass = $('.signup-npass').val();
        if (regx.test(cpass) == false || (cpass.length != pass.length)) {
            verify = false;
            $('.msg-confirm').text("The password didn't match the original one").addClass('w3-text-red');
            $(this).addClass('input-error').removeClass('input-sucess');
        } else {
            verify = true;
            $('.msg-confirm').text("").removeClass('w3-text-red');
            $(this).removeClass('input-error').addClass('input-sucess');
        }
    }).on('blur',function(){
        var cpass = $(this).val();       
        if (cpass == '') {
            verify = false;
            $('.msg-confirm').text('This field is required').addClass('w3-text-red');
            $(this).addClass('input-error').removeClass('input-sucess');
        } else   if (regx.test(cpass) == false || (cpass.length != pass.length)) {
            verify = false;
            $('.msg-confirm').text("The password didn't match the original one").addClass('w3-text-red');
            $(this).addClass('input-error').removeClass('input-sucess');
        } else {
            verify = true;
            $('.msg-confirm').text('').removeClass('w3-text-red');
            $(this).removeClass('input-error input-sucess');
        }
    });
    /*
    Create account button
    */ 
    $(".signup-btn").click(function(){
       if(verify == false){
        /*
        Error messages
        */    
        $('.msg-user').text('This field is required').addClass('w3-text-red').removeClass('fa fa-check w3-text-green');
        $('.msg-address').text('This field is required').addClass('w3-text-red');
        $('.msg-new-password').text('This field is required').addClass('w3-text-red');
        $('.msg-confirm').text('This field is required').addClass('w3-text-red');
        $('.msg-email').text('This field is required').addClass('fa fa-times w3-text-red');

        /**
         * Input boxes
         */
        
        $(".signup-cpass").addClass('input-error').removeClass('input-sucess');
        $('.signup-npass').addClass('input-error').removeClass('input-sucess');
        $('.signup-email').addClass('input-error').removeClass('input-sucess');
        $('.signup-address').addClass('input-error').removeClass('input-sucess');
        $('.signup-username').addClass('input-error').removeClass('input-sucess');
       }else{
           window.location = './account/dashboard.html';
       }
    })
});

// show or hide pass for sigin
jQuery(document).ready(function($){
    $('.pass-signin-show').show();
    $('.pass-signin-hide').hide();
// show password
$('.pass-signin-show').click(function(){
    $(this).hide();
    $('.pass-signin-hide').show();
    $('.signin-password').attr('type','text');
});
// hide password
$('.pass-signin-hide').click(function(){
    $(this).hide();
    $('.pass-signin-show').show();
    $('.signin-password').attr('type','password');

});
});
// show hide password for create account
jQuery(document).ready(function($){
    // for new password
    $('.npass-signup-show').show();
    $('.npass-signup-hide').hide();
    // show password
    $('.npass-signup-show').click(function(){
        $(this).hide();
        $('.npass-signup-hide').show();
        $('.signup-npass').attr('type','text');
    });
    // hide password
    $('.npass-signup-hide').click(function(){
        $(this).hide();
        $('.npass-signup-show').show();
        $('.signup-npass').attr('type','password');
    });

    // for confirming password
    $('.cpass-signup-show').show();
    $('.cpass-signup-hide').hide();
    $('.cpass-signup-show').click(function(){
        $(this).hide();
        $('.cpass-signup-hide').show();
        $('.signup-cpass').attr('type','text');
    });
    // hide password
    $('.cpass-signup-hide').click(function(){
        $(this).hide();
        $('.cpass-signup-show').show();
        $('.signup-cpass').attr('type','password');
    });
}); 