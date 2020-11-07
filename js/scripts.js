// Business Logic
function Customer(name, phone, address, email) {
  this.name = name;
  this.phone = phone;
  this.address = address;
  this.email = email;
}

function Order() {
  this.pizzas = [];
  this.currentId = 0;
  this.orderTotal = 0;
}

Order.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
}

Order.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Order.prototype.Cost = function() {
  for(let i = 0; i < this.pizzas.length; i++){
    this.orderTotal += this.pizzas[i].pizzaTotal;
    this.pizzas[i].pizzaTotal = 0;
  }
}

function Pizza(size, sauce, crust, veggies, meats) {
  this.size = size;
  this.sauce = sauce;
  this.crust = crust;
  this.veggies = veggies;
  this.meats = meats;
  this.pizzaTotal = 0;
}


Pizza.prototype.Cost = function() {
  switch (this.size) {
    case ("Small"):
      this.pizzaTotal += 12;
      break;
    case ("Medium"):
      this.pizzaTotal += 14;
      break;
    case ("Large"):
      this.pizzaTotal += 16;
      break;
    case ("X-Large"):
      this.pizzaTotal += 19;
      break;
  }
  let vegCount = 0;
  let meatCount = 0;
  for (let i=0; i < this.veggies.length; i ++) {
    vegCount += 1;
  }
  for (let i=0; i < this.meats.length; i ++) {
    meatCount += 2;
  }
  this.pizzaTotal += vegCount;
  this.pizzaTotal += meatCount;
}

// User Logic
$(document).ready(function() {
  $("#newUser").submit(function(event) {
    event.preventDefault();

    let name = $("input#name").val();
    let phone = $("input#phone").val();
    let address = $("input#address").val();
    let email = $("input#email").val();
    let customer = new Customer(name, phone, address, email);

    $(".name").text(name);
    $(".phone").text(phone);
    $(".address").text(address);
    $(".email").text(email);
    
    let order = new Order();
    $("#pizza").submit(function(event) {
      event.preventDefault();
      let size = $("option[name='size']:selected").val();
      let sauce = $("option[name='sauce']:selected").val();
      let crust = $("option[name='crust']:selected").val();
      let veggies = $("input[name='veggies']:checked").map(function(){
        return this.value;
      }).get();
      let meats = $("input[name='meats']:checked").map(function(){
        return this.value;
      }).get();
      let newPizza = new Pizza(size, sauce, crust, veggies, meats);

      order.addPizza(newPizza);
      newPizza.Cost();
      $("ul#order").append("<li>" + newPizza.size + ", " + newPizza.crust + ", " + newPizza.sauce + "| $" + newPizza.pizzaTotal + ".00 |" + "</li>");
      order.Cost();
      $("p#total").text("Total due today: | $" + order.orderTotal + ".00 |")
      console.log(order.pizzas[0]);
    });
  });
});