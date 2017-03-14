

$(document).ready(function() {

// stop button from refershing the page
  $('#submit-btn').click(function(){
    event.preventDefault();
// Take user input in form of tex
  var background = $('#city-type').val();
// Take user input in form of text
// Match user input with stored tags
// Match tags to photos
// Change background photo to match the tag
   if(background == 'nyc') {
    $('body').attr('class','nyc');
  }

   else if (background == 'sf') {
    $('body').attr('class','sf');
  }

   else if (background == 'austin') {
    $('body').attr('class','austin');
  }

   else if (background == 'la') {
    $('body').attr('class','la');
  }

   else if (background == 'sydney') {
    $('body').attr('class','sydney');
    } 
  });
});


// Clear field? It seems to be doing this automatically




