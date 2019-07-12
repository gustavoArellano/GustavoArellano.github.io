$(document).ready(function() {

    $('.aboutMe').hide(0).delay(300).fadeIn(2000)
    $('.pageH1').hide(0).delay(300).fadeIn(2000)
    $('.project').hide(0).delay(300).fadeIn(2000)
    
    $(window).scroll( function(){
      
        $('.fadeIn').each( function(i){
              
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
                        
            if( bottom_of_window > bottom_of_object ){
                  
                  $(this).animate({'opacity':'1'}, 1000);     
            }
              
        }); 
      
    });

    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){
        
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
            });
        } // End if
    });
      
});