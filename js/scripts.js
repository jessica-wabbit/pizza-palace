//Business Logic
var pizzaSubTotal = 0

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [];
}

//User Interface Logic

$(document).ready(function(){
  $("form#pizza_order").submit(function(event){
    event.preventDefault();
    //$("#work-responses").show();
    var pizzaSize = $(this).find("#pizza-size").val();
    var newPizza = new Pizza(pizzaSize);

    $("input:checkbox[name=topping]:checked").each(function(){
      var toppingsOrdered = $(this).val();
      pizzaSubTotal = pizzaSubTotal +=1
      newPizza.toppings.push(toppingsOrdered);
    });
    console.log(newPizza);

    if (newPizza.size === "Medium") {
      $("#order-total").text(5 + pizzaSubTotal)
    } else if (newPizza.size === "Large") {
      $("#order-total").text(7 + pizzaSubTotal)
    } else if (newPizza.size === "Family-Size") {
      $("#order-total").text(10 + pizzaSubTotal)
    };
    //$("#order-total").text(newPizza.orderTotal);

    //$('#transportation_survey').hide();
  });
});
