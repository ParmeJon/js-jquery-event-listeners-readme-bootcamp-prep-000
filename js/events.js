//define functions here

function getIt() {
  $('p').on("click", function() {
    alert('Hey!');
    return;
  });
}

function frameIt() {
  $('img').on('load', function(){
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $('form').on()
}

$(document).ready(function(){

// call functions here

});
