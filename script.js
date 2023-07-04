var addToCartButtons = document.querySelectorAll(".add-to-cart");
var cartItems = [];
var total = 0;

addToCartButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    var menuItem = this.parentNode;
    var foodName = menuItem.querySelector("h3").innerText;
    var price = menuItem.querySelector("p").innerText;
    price = parseInt(price.replace("Harga: Rp ", ""));
    
    var quantity = parseInt(prompt("Berapa yang ingin anda pesan? :"));
    if (!isNaN(quantity) && quantity > 0) {
      cartItems.push({ name: foodName, price: price, quantity: quantity });
      updateCart();
    } else {
      alert("Jumlah tidak valid!");
    }
  });
});

function updateCart() {
  var cartItemsList = document.getElementById("cart-items");
  cartItemsList.innerHTML = "";
  
  total = 0;
  cartItems.forEach(function(item) {
    var li = document.createElement("li");
    li.innerText = item.name + " (" + item.quantity + "x) - Rp " + item.price;
    cartItemsList.appendChild(li);
    
    total += item.price * item.quantity;
  });
  
  var totalElement = document.getElementById("total");
  totalElement.innerText = "Total Tagihan: Rp " + total;
}

var checkoutButton = document.getElementById("checkout");
checkoutButton.addEventListener("click", function() {
  alert("Total Tagihan: Rp " + total + ". Silakan melakukan pembayaran.");
  resetCart();
});

function resetCart() {
    cartItems = [];
    updateCart();
  }