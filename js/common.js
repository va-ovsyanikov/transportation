$(document).ready(function(){

//    owlCarousel
    $("#owl-carousel").owlCarousel({
        navigation : true, 
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        items : 1,
        loop:true,
        autoplay:true,
        smartSpeed:1500,
        autoplayTimeout:6000,
        autoplayHoverPause: true,
        itemsMobile : true,
        margin:50,
        nav:true,
        navText:'',
        autoplayHoverPause: true
    });
    
//    magnificPopup
    $('.header_call_btn').magnificPopup({
        type:'inline',
        midClick: true,
        removalDelay: 300

    });

    
});



   $("#form_call").submit(function() {
        $.ajax({
            type: "POST",
            url: "../form_phone.php",
            data: $(this).serialize()
        }).done(function() {
            $('.thank_window').fadeIn();
            setTimeout(function() {
                // Done Functions
                $("#form_call").trigger("reset");
                $('.thank_window').fadeOut();
            }, 3000);
        });
        return false;
    });


   $("#form_question").submit(function() {
        $.ajax({
            type: "POST",
            url: "../form_question.php",
            data: $(this).serialize()
        }).done(function() {
            $('.thank_window').fadeIn();
            setTimeout(function() {
                // Done Functions
                $("#form_question").trigger("reset");
                $('.thank_window').fadeOut();
            }, 3000);
        });
        return false;
    });