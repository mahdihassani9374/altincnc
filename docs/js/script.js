$(function () {
  $('[data-toggle="tooltip"]').tooltip();

  toastr.options = {
    "closeButton": true,
    "debug": false,
    "progressBar": true,
    "positionClass": "toast-bottom-right",
    "preventDuplicates": false,
    "onclick": null,
    "timeOut": "5000",
  }

  setTimeout(function () {
   // toastr.success('سلام خوش آمدید ')
  }, 2000);

  $('.slick__item').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('[data-role="slick-left"]').on('click',function(){
    $('.slick__item').slick('slickPrev');
  })
  $('[data-role="slick-right"]').on('click',function(){
    $('.slick__item').slick('slickNext');
  })
})