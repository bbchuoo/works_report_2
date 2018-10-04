$(document).ready(function() {
  
  /*gototop*/
  $(function() {

    $('#gotop').click(function(){
        $('html,body').animate({ scrollTop: 0 }, 'slow');  
        return false;
    });
    
    //scrollTop(相對滾動條頂部的偏移) 
     
    
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 500){
            $('#gotop').fadeIn();
        } else {
            $('#gotop').fadeOut();
        }
    });
});
  /*輪播插件*/



  $("#flexisel").flexisel({
    visibleItems: 5,
    itemsToScroll: 1,
    autoPlay: {
      enable: true,
      interval: 3000,
      pauseOnHover: true
    }
  });

  /*動態圖片*/

  let iImage = -1
  let iImage2 = 1;
  let iImage3 = 3;

  setImage();

  function setImage() {
    let img = new Array();
    let url = new Array();
    img[0] = "../img/array/arrayImg01.jpg";
    url[0] = "http://chicago.cubs.mlb.com/";
    img[1] = "../img//array/arrayImg02.jpg";
    url[1] = "http://oakland.athletics.mlb.com/";

    img[2] = "../img/array/arrayImg03.jpg";
    url[2] = "http://sandiego.padres.mlb.com/";
    img[3] = "../img//array/arrayImg04.jpg";
    url[3] = "http://washington.nationals.mlb.com/";

    img[4] = "../img/array/arrayImg05.jpg";
    url[4] = "http://sandiego.padres.mlb.com/";
    img[5] = "../img/array/arrayImg06.jpg";
    url[5] = "http://washington.nationals.mlb.com/";

    iImage += 1;
    if (iImage >= img.length - 4) {
      iImage = 0;
    }
    iImage2 += 1;
    if (iImage2 >= img.length - 2) {
      iImage2 = 2;
    }
    iImage3 += 1;
    if (iImage3 >= img.length) {
      iImage3 = 4;
    }
    document.getElementById("imgs").src = img[iImage];
    document.getElementById("imgshref").href = url[iImage];
    document.getElementById("imgs2").src = img[iImage2];
    document.getElementById("imgshref2").href = url[iImage2];
    document.getElementById("imgs3").src = img[iImage3];
    document.getElementById("imgshref3").href = url[iImage3];

    setTimeout(setImage, 1000);
  }

  /*滾輪滑動*/

  $(function() {

    window.sr = ScrollReveal({
      // 參數設定[註1]
      origin: "top", // 起始位置
      distance: "50px", // 距離
      duration: 1000, // 動畫時間
      delay: 10, // 動畫延遲時間
      mobile: true, // 支援行動裝置
      reset: true, // 每次都啟動動畫

    });
    sr.reveal(".do-scrollreveal", {
      // 參數設定[註1]
    });
    sr.reveal(".do-scrollreveal1", {
      duration: 2000,
    }, 50);
  })


  /*img-thumbnail with opacity*/

  $(function() {
    $(".ig").mouseenter(function() {

      $(this).removeClass("img-thumbnail");
      $(this).fadeTo("fast", 0.7);


    });

    $(".ig").mouseleave(function() {

      $(this).addClass("img-thumbnail");
      $(this).fadeTo("fast", 1);

    });
  })



  /*紫色廣告橫列*/

  $(function() {
    $("#Banner").mouseenter(function() {
      $("#Banner1").fadeTo("fast", 0.7);
    });

    $("#Banner").mouseleave(function() {
      $("#Banner1").fadeTo("fast", 1);

    });

    $("#Banner1").mouseenter(function() {
      $("#Banner").attr("src", "../img/banner/bannerImg01.jpg");

    });
    $("#Banner1").mouseleave(function() {
      $("#Banner").attr("src", "../img/banner/bannerImg00.jpg");

    });
  });



  /*固定背景*/

  $(function() {
    $('.jumbotron').paroller();
  });



  /*輪播圖片放大*/

  $("#flexisel").children("li").mouseenter(function() {

    $(this).addClass("img-transition");
  });

  /*偵測信箱欄位是否正確*/

  // bootstrap tooltip
  $('[data-toggle="tooltip"]').tooltip();


  $('#email-form').submit(function() {

    // Get the Login Name value and trim it
    var name = $.trim($('#email-name').val());
    var email = $.trim($('#email-youremail').val());
    var content = $.trim($('#email-content').val());

    // Check if empty of not
    if (name === '' && email === '' && content === '') {
      $("#email-name").tooltip('show');
      $("#email-youremail").tooltip('show');
      $("#email-content").tooltip('show');

      return false;
    }




  });



}); //end of ready
