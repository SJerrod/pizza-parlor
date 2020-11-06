// Business Logic
function Customer(name, phone, address, email) {
  this.name = name;
  this.phone = phone;
  this.address = address;
  this.email = email;
}

function Pizza(size, sauce, crust, veggies, meats) {
  this.size = size;
  this.sauce = sauce;
  this.crust = crust;
  this.veggies = [];
  this.meats = [];
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
    console.log(customer);

    $(".name").text(name);
    $(".phone").text(phone);
    $(".address").text(address);
    $(".email").text(email);
    
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
      let order = new Pizza(size, sauce, crust, veggies, meats)
      console.log(veggies);
      console.log(meats);
      console.log(order);
    });
  });
});