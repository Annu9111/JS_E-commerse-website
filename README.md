# 🛒 Annu Store — E-Commerce Website

A modern and responsive **E-Commerce Website** built using **HTML, CSS, JavaScript, and Vite**.

Annu Store provides a clean shopping experience where users can browse products, manage quantities, add products to the cart, remove products, and view their order summary. Cart data is stored using **LocalStorage**, allowing the cart to persist across page refreshes.

🌐 **Live Demo:**  
(https://js-e-commerse-website-a4gszyohe-annu-sonis-projects.vercel.app/)

---

## 📸 Preview

![Annu Store Preview](https://js-e-commerce-website.vercel.app/images/

---

## ✨ Features

- 🛍️ Modern E-Commerce UI
- 📱 Fully Responsive Design
- 🔎 Product browsing
- 🛒 Add to Cart functionality
- ➕ Increase product quantity
- ➖ Decrease product quantity
- 🗑️ Remove products from cart
- 💾 Cart data stored using LocalStorage
- 💰 Automatic subtotal calculation
- 🧾 Tax and final total calculation
- 🔔 Add/Remove product toast notifications
- 📦 Dynamic product rendering from JSON
- ⚡ Built with Vite
- 🚀 Deployed on Vercel
- 🎨 Clean and modern UI
- 📄 Multiple pages

---

## 🛠️ Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript (ES6+)

### Tools & Libraries

- Vite
- Git
- GitHub
- Vercel
- Font Awesome

### Storage

- Browser LocalStorage

### Data

- JSON

---

## 📂 Project Structure

```text
JS-Ecommerce/
│
├── api/
│   └── products.json
│
├── public/
│   └── images/
│       ├── laptop.png
│       ├── mobile.png
│       ├── headphone.png
│       ├── watch.png
│       └── ...
│
├── src/
│   ├── assets/
│   │
│   ├── about.html
│   ├── addToCart.html
│   ├── contact.html
│   ├── products.html
│   │
│   ├── addToCart.js
│   ├── fetchQuantityFromCartLS.js
│   ├── getCartProducts.js
│   ├── homeProductCards.js
│   ├── homeQuantityToggle.js
│   ├── incrementDecrement.js
│   ├── main.js
│   ├── removeProdFromCart.js
│   ├── showAddToCartCards.js
│   ├── showToast.js
│   ├── style.css
│   ├── updateCartProductTotal.js
│   └── updateCartValue.js
│
├── index.html
├── vite.config.js
├── package.json
├── package-lock.json
└── .gitignore
