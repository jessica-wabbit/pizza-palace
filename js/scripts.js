//Business Logic

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [];
}

// Pizza.prototype.tally = function() {
//   var totalToppings
// }

Pizza.prototype.price = function() {
  return this.size + this.toppings;
}


//User Interface Logic

$(document).ready(function(){
  $("form#pizza_order").submit(function(event){
    event.preventDefault();
    //$("#work-responses").show();
    var pizzaSize = parseInt($(this).find("#pizza-size").val());
    var newPizza = new Pizza(pizzaSize);

    $("input:checkbox[name=topping]:checked").each(function(){
      var toppingsOrdered = parseInt($(this).val());
      newPizza.toppings.push(toppingsOrdered);
    });

    $("#order-total").text(newPizza.price);

      console.log(newPizza);
    //$('#transportation_survey').hide();
  });
});
