$("a").click(function (e) {
  e.preventDefault();
  var aid = $(this).attr("href");
  var eid = $(aid);
  if(eid) {
    $('html,body').animate({
      scrollTop: eid.offset().top
    }, 'slow');
  }
});