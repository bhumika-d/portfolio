$(document).ready(function(){
    $(window).scroll(function(){
       
        if ($(this).scrollTop() > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
       
        $('html').css("scrollBehavior", "smooth");
    });

   
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

   
    var typed = new Typed(".typing", {
        strings: ["Front end developer" ,"Student", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-3", {
        strings: ["Connect with me on :)"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Front end developer" ,"Student"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

   
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
$(document).ready(function(){
    console.log("Document ready!"); 
    $(window).scroll(function(){
        console.log("Scroll event!"); 
        if(this.scrollY > 20){
            console.log("Add sticky class!"); 
            $('.navbar').addClass("sticky");
        }else{
            console.log("Remove sticky class!"); 
            $('.navbar').removeClass("sticky");
        }
    });
});
$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1, // Adjust the number of items as needed
        loop: true, // Enable looping
        margin: 10,
        nav: false // Hide default navigation buttons
    });
    // Custom navigation using pseudo-element
    $('#teams').on('click', function() {
        owl.trigger('next.owl.carousel');
    });
});


