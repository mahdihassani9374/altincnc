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
    toastr.success('سلام خوش آمدید ')
  }, 2000);
})