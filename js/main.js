/* Bright Batch Coffee — preview interactions (hamburger, mock cart) */

(function () {
  "use strict";

  const DEMO_UNIT_PRICE = 20; // midpoint of $18–$22 demo range
  const PRODUCT_NAME = "12 oz Whole Bean";

  const navToggle = document.getElementById("nav-toggle");
  const navMobile = document.getElementById("nav-mobile");
  const cartToggle = document.getElementById("cart-toggle");
  const cartClose = document.getElementById("cart-close");
  const cartOverlay = document.getElementById("cart-overlay");
  const cartDrawer = document.getElementById("cart-drawer");
  const cartCount = document.getElementById("cart-count");
  const cartEmpty = document.getElementById("cart-empty");
  const cartItems = document.getElementById("cart-items");
  const cartFooter = document.getElementById("cart-footer");
  const cartSubtotal = document.getElementById("cart-subtotal");
  const cartHint = document.getElementById("cart-hint");
  const addBtn = document.getElementById("add-to-cart");
  const qtyInput = document.getElementById("qty");
  const qtyMinus = document.getElementById("qty-minus");
  const qtyPlus = document.getElementById("qty-plus");
  const checkoutDemo = document.getElementById("checkout-demo");
  const toast = document.getElementById("toast");
  const yearEl = document.getElementById("year");

  let cartQty = 0;
  let toastTimer = null;

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  /* Mobile nav */
  function setNavOpen(open) {
    if (!navToggle || !navMobile) return;
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    navMobile.hidden = !open;
  }

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      const open = navToggle.getAttribute("aria-expanded") !== "true";
      setNavOpen(open);
    });
  }

  if (navMobile) {
    navMobile.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setNavOpen(false);
      });
    });
  }

  /* Quantity */
  function clampQty(n) {
    n = parseInt(n, 10);
    if (isNaN(n) || n < 1) return 1;
    if (n > 12) return 12;
    return n;
  }

  function syncQty() {
    if (qtyInput) qtyInput.value = clampQty(qtyInput.value);
  }

  if (qtyMinus) {
    qtyMinus.addEventListener("click", function () {
      if (!qtyInput) return;
      qtyInput.value = clampQty(parseInt(qtyInput.value, 10) - 1);
    });
  }

  if (qtyPlus) {
    qtyPlus.addEventListener("click", function () {
      if (!qtyInput) return;
      qtyInput.value = clampQty(parseInt(qtyInput.value, 10) + 1);
    });
  }

  if (qtyInput) {
    qtyInput.addEventListener("change", syncQty);
  }

  /* Cart drawer */
  function openCart() {
    if (!cartDrawer || !cartOverlay) return;
    cartOverlay.hidden = false;
    cartDrawer.classList.add("is-open");
    cartDrawer.setAttribute("aria-hidden", "false");
    if (cartToggle) cartToggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeCart() {
    if (!cartDrawer || !cartOverlay) return;
    cartDrawer.classList.remove("is-open");
    cartDrawer.setAttribute("aria-hidden", "true");
    cartOverlay.hidden = true;
    if (cartToggle) cartToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  if (cartToggle) cartToggle.addEventListener("click", openCart);
  if (cartClose) cartClose.addEventListener("click", closeCart);
  if (cartOverlay) cartOverlay.addEventListener("click", closeCart);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeCart();
      setNavOpen(false);
    }
  });

  function formatMoney(n) {
    return "$" + n.toFixed(2);
  }

  function renderCart() {
    if (cartQty <= 0) {
      cartQty = 0;
      if (cartCount) {
        cartCount.hidden = true;
        cartCount.textContent = "0";
      }
      if (cartEmpty) cartEmpty.hidden = false;
      if (cartItems) {
        cartItems.hidden = true;
        cartItems.innerHTML = "";
      }
      if (cartFooter) cartFooter.hidden = true;
      return;
    }

    if (cartCount) {
      cartCount.hidden = false;
      cartCount.textContent = String(cartQty);
    }
    if (cartEmpty) cartEmpty.hidden = true;
    if (cartFooter) cartFooter.hidden = false;
    if (cartSubtotal) {
      cartSubtotal.textContent = formatMoney(cartQty * DEMO_UNIT_PRICE);
    }

    if (cartItems) {
      cartItems.hidden = false;
      cartItems.innerHTML =
        '<li class="cart-item">' +
        '<div class="cart-item-thumb" aria-hidden="true"></div>' +
        '<div>' +
        "<h3>" +
        PRODUCT_NAME +
        "</h3>" +
        "<p>Qty " +
        cartQty +
        " · Demo @" +
        formatMoney(DEMO_UNIT_PRICE) +
        " each</p>" +
        '<button type="button" class="cart-item-remove" id="cart-remove">Remove</button>' +
        "</div>" +
        '<div class="cart-item-price">' +
        formatMoney(cartQty * DEMO_UNIT_PRICE) +
        "</div>" +
        "</li>";

      var removeBtn = document.getElementById("cart-remove");
      if (removeBtn) {
        removeBtn.addEventListener("click", function () {
          cartQty = 0;
          renderCart();
          showToast("Cart cleared");
        });
      }
    }
  }

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.hidden = false;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.classList.remove("is-visible");
      setTimeout(function () {
        toast.hidden = true;
      }, 300);
    }, 2400);
  }

  if (addBtn) {
    addBtn.addEventListener("click", function () {
      syncQty();
      var add = clampQty(qtyInput ? qtyInput.value : 1);
      cartQty += add;
      renderCart();
      if (cartHint) {
        cartHint.textContent =
          "Added " + add + " × " + PRODUCT_NAME + " (demo cart).";
      }
      showToast("Added to cart — demo only");
      openCart();
    });
  }

  if (checkoutDemo) {
    checkoutDemo.addEventListener("click", function () {
      showToast("Checkout connects when this moves to Shopify");
    });
  }

  renderCart();
})();
