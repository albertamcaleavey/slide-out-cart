$(document).ready(function() {
// var surveyShown = readCookie('postpurchase');

  if ($(".thank-you__additional-content").length) {

    $('.postpurchase').show().insertAfter('.thank-you__additional-content'); 
//     createCookie('postpurchase', 'true'); 
  }

})
