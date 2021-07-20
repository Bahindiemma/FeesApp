$(document).ready(function(){
    $.get('./pages/board.html',function(data){
        $('.content').html(data)
    })
})