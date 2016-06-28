//buisness logic
function dimmension(height,width) {
  this.height = height;
  this.width = width;
  this.weight = weight;
}

dimmension.prototype.fullDimmension = function() {
  return this.height + " " + this.width + " " + this.weight;
}

//user interface logic
$(document).ready(function() {
  $("form#new-dimmension").submit(function(event) {
    event.preventDefault();

    var inputtedHeight = $("input#new-height").val();
    var inputtedWidth = $("input#new-width").val();
    var inputtedWeight = $("input#new-weight").val();

    var newDimmension = new Dimmension(inputtedHeight, inputtedWidth, inputtedWeight);

    $("ul#dimmension").append("<li><span class='dimmension'>" + newDimmension.fullDimmension() + "</span></li>");

    $(".dimmension").last().click(function() {
      $("#show-dimmension").show();
      $("#show-dimmension h2").text(newDimmension.height);
      $(".height").text(newContact.height);
      $(".width").text(newContact.width);
      $(".weight").text(newContact.weight);
    });

    $("input#new-height").val("");
    $("input#new-width").val("");
    $("input#new-weight").val("");
 });
});
