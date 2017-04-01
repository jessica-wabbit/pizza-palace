function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.price = function() {
  return this.size;
}

$(document).ready(function(){
  $("form#pizza_order").submit(function(event){
    event.preventDefault();
    //$("#work-responses").show();
    var pizzaSize = parseInt($(this).find("#pizza-size").val());
    var newPizza = new Pizza(pizzaSize);

    $("input:checkbox[name=topping]:checked").each(function(){
      var totalToppings = [];
      var toppingsOrdered = parseInt($(this).val());
      totalToppings.push(toppingsOrdered);
      newPizza.toppings.push(totalToppings);
    });

    $("#order-total").text(newPizza.price);

      console.log(newPizza);
    //$('#transportation_survey').hide();
  });
});
