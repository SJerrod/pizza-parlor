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

// Order.prototype.Cost = function() {
//   for(let i = 0; i < this.pizzas.length; i++){
//     if (this.pizzas[i].size = "Small") {
//       this.total += 12;
//     } else if (this.pizzas[i].size = "Medium") {
//       this.total += 14;
//     } else if (this.pizzas[i].size = "Large") {
//       this.total += 16;
//     } else if (this.pizzas[i].size = "X-Large") {
//       this.total += 19;
//     }
//   }
// }

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

// Order.prototype.findPizza = function(pizzasClasslist){
//   for(let i =0; i < this.pizzas.length; i++){
//     if(this.pizzas.includes(this.pizzas[i].id)){
//       return this.pizzas[i];
//     }
//   }
// }


function Pizza(size, sauce, crust, veggies, meats) {
  this.size = size;
  this.sauce = sauce;
  this.crust = crust;
  this.veggies = veggies;
  this.meats = meats;
  this.pizzaTotal = 0;
}


// User Logic
// function addClickEvent(order){
//   $("li").on('click', function(){
//     console.log("its working");
//   });
// }

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
      $("ol#order").append("<li>" + newPizza.size + ", " + newPizza.crust + ", " + newPizza.sauce + "</li>");
      newPizza.Cost();
      console.log(order.pizzas[0]);
      console.log(newPizza.pizzaTotal);
      console.log(order.orderTotal);
    });
  });
});