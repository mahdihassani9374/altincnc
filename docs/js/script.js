$(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $('.dropdown-menu').on('click', function (event) {
    event.stopPropagation();
  });

  var customOptions = {
    placeholder: "روز / ماه / سال",
    twodigit: true,
    closeAfterSelect: true,
    nextButtonIcon: "fa fa-arrow-circle-right",
    previousButtonIcon: "fa fa-arrow-circle-left",
    buttonsColor: "blue",
    forceFarsiDigits: true,
    markToday: true,
    markHolidays: true,
    highlightSelectedDay: true,
    sync: true,
    gotoToday: true,
    pastYearsCount: 0,
    futureYearsCount: 3,
    startView: 'month',
    minView: 'month',
    startDate: "today"
  }

  $("[data-role='date-persian']").pDatepicker({
    autoClose: true,
    minDate: new Date(),
    format: "dddd D MMMM YYYY",
    selectedDate: null,
    initialValue: false,
  });

  $("[data-role='date-gregorian']").pDatepicker({
    autoClose: true,
    minDate: new Date(),
    format: "dddd D MMMM YYYY",
    calendarType: 'gregorian',
    selectedDate: null,
    initialValue: false
  });

  $('.form-control').val('')

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
    toastr.success('سلام خوش آمدید ')
  }, 2000);

  generateLadda()

  $(window).scroll(function(){
    scroll_menu()
  });
  scroll_menu();
})

var app = new Vue({
  el: '#app',
  data: {
    air: {
      name: 'Inside',
      type: 0
    }
  },
  methods: {
    changeAir: function (name) {
      this.air.name = name;
      this.air.type = 0;
      generateLadda()
    }
  },
})

function generateLadda() {
  $('.ladda-button').click(function (e) {
    e.preventDefault();
    var l = Ladda.create(this);
    l.start();
    setTimeout(function () {
      l.stop()
    }, 3000);
  });
}

function scroll_menu() {
  var scroll = $(this).scrollTop();
  if(scroll > 58) {
    $('.menu').addClass('navbar-scroll');
  }
  else {
    $('.menu').removeClass('navbar-scroll');
  }
}