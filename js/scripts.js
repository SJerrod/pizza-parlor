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
}

Order.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
}

Order.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
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
}

// Pizza.prototype.Cost = function(pizza) {
//   let total = 0;
//   for(let i = 0; i < this.pizza.length; i++){
//     if(this.pizzas.size = "Small") {
//       total += 12;
//       return total;
//       console.log(total);
//     }
//   }
// }

// User Logic
function addClickEvent(order){
  $("li").on('click', function(){
    console.log("its working");
  });
}

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
      let newPizza = new Pizza(size, sauce, crust, veggies, meats)
      order.addPizza(newPizza);
      $("ol#order").append("<li>" + newPizza.size + ", " + newPizza.crust + ", " + newPizza.sauce + "</li>");
      addClickEvent();
      console.log(order);
    });
  });
});