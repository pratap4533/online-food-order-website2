let cart = {};
let total = 0;

document.querySelectorAll(".food-card button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".food-card");
    const name = card.getAttribute("data-name");
    const price = parseInt(card.getAttribute("data-price"));

    if (cart[name]) {
      cart[name].qty += 1;
    } else {
      cart[name] = { price, qty: 1 };
    }

    total += price;
    updateCart();
  });
});

function updateCart() {
  const cartList = document.getElementById("cart-list");
  const totalDisplay = document.getElementById("total");

  cartList.innerHTML = "";

  for (let item in cart) {
    const li = document.createElement("li");
    const itemTotal = cart[item].price * cart[item].qty;

    li.innerHTML = `
      ${item} x ${cart[item].qty} - ₹${itemTotal}
      <button class="remove-btn" onclick="removeItem('${item}')">Remove</button>
    `;

    cartList.appendChild(li);
  }

  totalDisplay.textContent = `Total: ₹${total}`;
}

function removeItem(itemName) {
  if (cart[itemName]) {
    total -= cart[itemName].price * cart[itemName].qty;
    delete cart[itemName];
    updateCart();
  }
}
