$( document ).ready(function() {
    $( ".navigation__link--1" ).on( "click", function( event ) {
        $(".navigation__nav").hide();
        $(".navigation__background").hide();
        $( "#section-about" ).show();  
    });
    $( ".navigation__link--2" ).on( "click", function( event ) {
        $(".navigation__nav").hide();
        $(".navigation__background").hide();
        $( "#section-features" ).show();
    });
    $( ".navigation__link--3" ).on( "click", function( event ) {
        $(".navigation__nav").hide();
        $(".navigation__background").hide();
        $( "#section-tours" ).show();
    });
    $( ".navigation__link--4" ).on( "click", function( event ) {
        $(".navigation__nav").hide();
        $(".navigation__background").hide();
        $( "#section-stories" ).show();
    });
    $( ".navigation__link--5" ).on( "click", function( event ) {
        $(".navigation__nav").hide();
        $(".navigation__background").hide();
        $( "#section-book" ).show();
        
        // $( ".navigation__button" ).on( "click", function( event ) {
        //     // $( ".header" ).hide();
        //     // $(".main").hide();
        //     // $(".footer").hide();
        //     $(".section-book").hide();
        //     $(".footer").hide();
        //     $(".navigation__nav, .navigation__background").show();
        //     // $(".navigation__background").show();
            
        // });
    });
    $(".navigation__button").click(function(){
        $(".navigation__background, .navigation__nav").show();
    });
    
  });
  
