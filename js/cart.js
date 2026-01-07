function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(judul, harga) {
  let cart = getCart();
  const item = cart.find(i => i.judul === judul);

  if (item) {
    item.qty++;
  } else {
    cart.push({ judul, harga, qty: 1 });
  }

  saveCart(cart);
  alert(judul + " berhasil ditambahkan ke keranjang");
}


function updateQty(judul, change) {
  let cart = getCart();
  const item = cart.find(i => i.judul === judul);

  if (!item) return;

  item.qty += change;

  if (item.qty <= 0) {
    cart = cart.filter(i => i.judul !== judul);
  }

  saveCart(cart);
  renderCart();
}

function removeItem(judul) {
  let cart = getCart();
  cart = cart.filter(i => i.judul !== judul);
  saveCart(cart);
  renderCart();
}
const toastEl = document.getElementById("cartToast");
if (toastEl) {
  new bootstrap.Toast(toastEl).show();
}
function renderCart() {
  const cart = getCart();
  const tbody = document.getElementById("cartBody");
  const totalEl = document.getElementById("cartTotal");

  if (!tbody) return;

  tbody.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const subtotal = item.harga * item.qty;
    total += subtotal;

    tbody.innerHTML += `
      <tr>
        <td>${item.judul}</td>
        <td class="text-center">
          <button class="btn btn-sm btn-outline-secondary"
            onclick="updateQty('${item.judul}', -1)">−</button>
          <span class="mx-2">${item.qty}</span>
          <button class="btn btn-sm btn-outline-secondary"
            onclick="updateQty('${item.judul}', 1)">+</button>
        </td>
        <td>Rp${item.harga.toLocaleString()}</td>
        <td>Rp${subtotal.toLocaleString()}</td>
        <td>
          <button class="btn btn-sm btn-danger"
            onclick="removeItem('${item.judul}')">❌</button>
        </td>
      </tr>
    `;
  });

  totalEl.innerText = "Rp" + total.toLocaleString();
}

function updateCartBadge() {
  const cart = getCart();
  const badge = document.getElementById("cartBadge");
  if (!badge) return;

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  badge.innerText = totalQty;
  badge.style.display = totalQty > 0 ? "inline-block" : "none";
}

document.addEventListener("DOMContentLoaded", () => {
  renderCart();
  updateCartBadge();
});
