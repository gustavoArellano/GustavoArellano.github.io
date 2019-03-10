$(document).ready(function() {

    $('.aboutMe').hide(0).delay(300).fadeIn(2000)
    
    $(window).scroll( function(){
      
        $('.fadeIn').each( function(i){
              
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
                        
            if( bottom_of_window > bottom_of_object ){
                  
                  $(this).animate({'opacity':'1'}, 1000);     
            }
              
        }); 
      
    });
      
});