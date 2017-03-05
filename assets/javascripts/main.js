(function($){
  // Immediately Invoked Fucntion Expresion invoked to create a new execution context therefore creating encapsulation any variables from the global object

  function animateOnHover(elm, animation) {
    $(elm).hover(
      function(){
        $(this).addClass('animated ' + animation);
      },
      function() {
        $(this).removeClass('animated ' + animation);
      }
    );
  }

  function addAnimation(elm, animation) {
    $(elm).addClass('animated ' + animation);
  }

  $(document).ready(function() {
    animateOnHover('h2.about', 'bounce');
  });

}(jQuery));
