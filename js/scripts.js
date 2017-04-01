//Business Logic
var pizzaSubTotal = 0

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.yourOrder = function () {
 return "<p>Based off of the information you've given us, you've ordered a " + this.size + "  Pizza with the following toppings: <br><br> " + this.toppings + "</p>" ;
 }



//User Interface Logic

$(document).ready(function(){
  $("form#pizza_order").submit(function(event){
    event.preventDefault();
    $(".your-total").show();
    var pizzaSize = $(this).find("#pizza-size").val();
    //$("#pizzaSize").text(pizzaSize);
    var newPizza = new Pizza(pizzaSize);

    $("input:checkbox[name=topping]:checked").each(function(){
      var toppingsOrdered = $(this).val();
      pizzaSubTotal = pizzaSubTotal +=1
      newPizza.toppings.push(toppingsOrdered);
      //$("#your-toppings").append(toppingsOrdered + "<br>");
    });

    $("input:checkbox[name=meatTopping]:checked").each(function(){
      var toppingsOrdered = $(this).val();
      pizzaSubTotal = pizzaSubTotal +=2
      newPizza.toppings.push(toppingsOrdered);
      $("#your-toppings").append(toppingsOrdered + "<br>");
    });
    console.log(newPizza);

    if (newPizza.size === "Medium") {
      $("#order-total").text(5 + pizzaSubTotal)
    } else if (newPizza.size === "Large") {
      $("#order-total").text(7 + pizzaSubTotal)
    } else if (newPizza.size === "Family-Size") {
      $("#order-total").text(10 + pizzaSubTotal)
    };

    newPizza.yourOrder();
    $(".trial-order").append(newPizza.yourOrder());

    $(".order-form").hide();
  });
});
