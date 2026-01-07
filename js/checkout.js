document.getElementById("checkoutForm").addEventListener("submit", function (e) {
  e.preventDefault();

  alert("🎉 Pesanan Akan Di Antar!\nTerima kasih sudah belanja di BookNest");

  localStorage.removeItem("cart");
  window.location.href = "index.html";
});
