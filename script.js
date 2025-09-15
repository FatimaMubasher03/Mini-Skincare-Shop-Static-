// =============================
// MyShop – Skincare Script
// =============================

// Sample skincare products
const products = [
  // Serums
  {
    id: 1,
    name: "Vitamin C Brightening Serum",
    price: 1800,
    image: "images/vc.jpeg",
  },
  {
    id: 2,
    name: "Hyaluronic Acid Hydrating Serum",
    price: 2000,
    image: "images/ha.jpeg",
  },
  {
    id: 3,
    name: "Glycolic Acid Exfoliating Serum",
    price: 2200,
    image: "images/gc.jpeg",
  },
  {
    id: 4,
    name: "Niacinamide Pore-Refining Serum",
    price: 2100,
    image: "images/n.jpeg",
  },

  // Moisturizers
  {
    id: 5,
    name: "Ceramide Repair Moisturizer",
    price: 2500,
    image: "images/m.jpeg",
  },
  {
    id: 6,
    name: "Aloe Vera Soothing Gel",
    price: 1200,
    image: "images/ag.jpeg",
  },

  // Face Wash
  {
    id: 7,
    name: "Green Tea Foaming Cleanser",
    price: 1400,
    image: "images/grc.jpeg",
  },
  {
    id: 8,
    name: "Charcoal Deep Clean Face Wash",
    price: 1600,
    image: "images/char.jpeg",
  },

  // Lip Care
  {
    id: 9,
    name: "Shea Butter Lip Balm",
    price: 800,
    image: "images/lip2.jpeg",
  },
  {
    id: 10,
    name: "Tinted Lip Balm with Charm",
    price: 1000,
    image: "images/ch.jpeg",
  },

  // Accessories
  {
    id: 11,
    name: "Jade Roller (Face Massage)",
    price: 1500,
    image: "images/pj.jpeg",
  },
  {
    id: 12,
    name: "Silk Hairband (Skincare Routine)",
    price: 900,
    image: "images/h.jpeg",
  },
];

// =============================
// Render Products
// =============================
const productsGrid = document.getElementById("products-grid");

if (productsGrid) {
  products.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product-card");
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="price">PKR ${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productsGrid.appendChild(div);
  });
}

// =============================
// Cart Functions
// =============================
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();

  alert(`🛒 ${product.name} has been added to your cart!`);
}


function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    cartCount.textContent = cart.length;
  }
}

updateCartCount();

// =============================
// Year Auto Update
// =============================
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}


// =============================
// Render Cart Page
// =============================
const cartItemsContainer = document.getElementById("cart-items");
const cartSummary = document.getElementById("cart-summary");
const cartEmpty = document.getElementById("cart-empty");

function renderCart() {
  if (!cartItemsContainer) return; // only run on cart.html

  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartEmpty.hidden = false;
    cartSummary.hidden = true;
    return;
  }

  cartEmpty.hidden = true;
  cartSummary.hidden = false;

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const div = document.createElement("div");
    div.classList.add("cart-item");

    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div>
        <h3>${item.name}</h3>
        <p class="price">PKR ${item.price}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
      </div>
    `;

    cartItemsContainer.appendChild(div);
  });

  document.getElementById("cart-total").textContent = `PKR ${total}`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  renderCart();
}

// Call renderCart if on cart.html
renderCart();


// =============================
// Login Form Validation
// =============================
const loginForm = document.getElementById("login-form");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // stop form from refreshing the page

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
      alert("⚠️ Please enter both username and password.");
      return;
    }

    alert("✅ Login successful! Welcome, " + username + " 🌸");
  });
}
