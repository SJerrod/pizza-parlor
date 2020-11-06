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

function Pizza(size, sauce, crust, veggies, meats) {
  this.size = size;
  this.sauce = sauce;
  this.crust = crust;
  this.veggies = veggies;
  this.meats = meats;
}

// User Logic
// function addClickEvent(){
//   $("#orderAdd").on('click', 'button.order', function(){
//     $('#order').append("<li>" + order + "</li>");
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
      let newPizza = new Pizza(size, sauce, crust, veggies, meats)
      order.addPizza(newPizza);
      $("#order").append(newPizza);
      console.log(order);
    });
  });
});