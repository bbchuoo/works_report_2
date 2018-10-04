  $(document).ready(function() {

      $(".nav").children("a").click(function() {
        $(".active").removeClass("active");
        $(this).addClass("active");
      });


      $("#header").children("div").mouseenter(function() {
        $(this).fadeTo("fast", 0.8);

      });
      $("#header").children("div").mouseleave(function() {
        $(this).fadeTo("fast", 1);
      });

      

    });
    
    