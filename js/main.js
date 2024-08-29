$( document ).ready(function() {
  /*chat-lists*/
  var bodyWidth = $(window).width();
  if ( $(window).width() <= 575) {
    $(".gp-list").click(function(){
      $(this).addClass("active");
      $("#gs-right").addClass("active");
    });
    $("#inbox-lists .item").click(function(){
      $(this).addClass("active");
      $("#ibs-chat-bx").addClass("active");
    });
    /*file management*/
    $("#group-lists-sec .gp-list").click(function(){
      $(this).addClass("active");
      $("#gsr-file").addClass("active");
    });
  } else if ( $(window).width() <= 1199) {
      $("#inbox-lists .item").click(function(){
        $(this).addClass("active");
        $("#ibs-chat-bx").addClass("active");
      });

      /*file management*/
      $("#group-lists-sec .gp-list").click(function(){
        $(this).addClass("active");
        $("#gsr-file").addClass("active");
      });

      /*file management*/
      $("#f-inbox-lists .item").click(function(){
        $(this).addClass("active");
        $("#gsr-file").addClass("active");
      });

  } else  if ( $(window).width() <= 1440) {
      $(".gp-list").click(function(){
        $(this).addClass("active");
        $("#gs-right").addClass("active");
      });
  } 

  
  /*slider*/
  $('.carousel').carousel({
    interval: false,
  });

  $('.cpf-teacher').slick({
    dots: false,
    infinite: false,
    speed: 300,
    variableWidth: true
  });

  $('#reminders-lists').slick({
    dots: false,
    infinite: false,
    speed: 300,
    variableWidth: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 999,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('#months-list').slick({
    dots: false,
    infinite: false,
    speed: 300,
    variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // responsive: [
    //   {
    //     breakpoint: 1199,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //     }
    //   },
    //   {
    //     breakpoint: 999,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1
    //     }
    //   },
    //   {
    //     breakpoint: 575,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
  });

  /*dropdown*/
  $('.dropdown-toggle').dropdown();
  
  /*start chat panel*/
  $("#btnChat").click(function(){
    $("#sidebar-right").toggleClass("active");
    $("#content").toggleClass("toggle-right");
  });

  $("#iconChat").click(function(){
    $("#sidebar-right").toggleClass("active");
    $("#content").toggleClass("toggle-right");
  });

  $("#icon-cancel").click(function(){
    $("#sidebar-right").removeClass("active");
    $("#content").removeClass("toggle-right");
  });
  /*end chat panel*/


  /*start left sidebar*/
  $("#icon-menu").click(function(){
    $("#sidebar").toggleClass("sm");
    $("#content").toggleClass("sm");
  });
  /*end left sidebar*/

  
  /*signup start step*/
  $("#btnStep1Next").click(function(){
      $("#step1").addClass("d-none");
      $("#step2").removeClass("d-none");
      $("#step3").addClass("d-none");
      
      $("#lblStep1").addClass("prev");
      $("#lblStep2").addClass("active current");
    });

  $("#btnStep2Next").click(function(){
    $("#step1").addClass("d-none");
    $("#step2").addClass("d-none");
    $("#step3").removeClass("d-none");
    
    $("#lblStep2").removeClass("current");
    $("#lblStep2").addClass("prev");
    $("#lblStep3").addClass("active current");
  });

  /*student*/
  $("#btnsStep1Next").click(function(){
      $("#step1").addClass("d-none");
      $("#step2").removeClass("d-none");
      $("#step3").addClass("d-none");
      
      $("#lblStep1").addClass("prev");
      $("#lblStep2").addClass("active current");
    });

  // $("#btnsStep2Next").click(function(){
  //   $("#step1").addClass("d-none");
  //   $("#step2").addClass("d-none");
  //   $("#step3").removeClass("d-none");
    
  //   $("#lblStep2").removeClass("current");
  //   $("#lblStep2").addClass("prev");
  //   $("#lblStep3").addClass("active current");
  // });
  /*end step*/
	
  $("#cb-cancel").click(function(){
    $("#ibs-chat-bx").removeClass("active");
    $("#inbox-lists .item").removeClass("active");
    $("#cas-right").removeClass("active");
  })

  $("#gs-cancel").click(function(){
    $("#gs-right").removeClass("active");
    $("#gsr-file").removeClass("active");
    $("#group-lists-sec .gp-list").removeClass("active");
  });
  
  /*btn-group*/
  $("#btnGroup").click(function(){
    $("#group-sec").toggleClass("active");
    $(this).addClass("d-none");
    $("#sc-icon-add").addClass("d-none");
  });

  /*iconCalander*/
  $("#iconCalander").click(function(){
    $("#cas-right").toggleClass("active");
  });

});


/*upload-file*/
function readURL(input) {
  if (input.files && input.files[0]) {
   var reader = new FileReader();

   reader.onload = function (e) {
       $('#up-img')
           .attr('src', e.target.result);
   };

   reader.readAsDataURL(input.files[0]);
  }
}