import { getCartProductFromLS } from "./getCartProducts.js";
import { showToast } from "./showToast.js";
import { updateCartValue } from "./updateCartValue.js";

// Get cart data from localStorage
getCartProductFromLS();

// Add product to cart
export const addToCart = (event, id, stock) => {
  let arrLocalStorageProduct = getCartProductFromLS();

  const currentProdElem = document.querySelector(`#card${id}`);

  let quantity = currentProdElem
    .querySelector(".productQuantity")
    .innerText;

  let price = currentProdElem
    .querySelector(".productPrice")
    .innerText;

  // Remove ₹ symbol
  price = price.replace("₹", "");

  quantity = Number(quantity);
  price = Number(price);

  // Check if product already exists
  let existingProd = arrLocalStorageProduct.find(
    (curProd) => curProd.id === id
  );

  // If product already exists
  if (existingProd) {
    if (quantity > 1) {
      quantity = Number(existingProd.quantity) + quantity;

      const updatedCart = arrLocalStorageProduct.map((curProd) => {
        return curProd.id === id
          ? {
              id: id,
              quantity: quantity,
              price: price * quantity,
            }
          : curProd;
      });

      localStorage.setItem(
        "cartProductLS",
        JSON.stringify(updatedCart)
      );

      updateCartValue(updatedCart);
      showToast("add", id);

      return;
    }

    // Product already exists and quantity is 1
    return;
  }

  // New product
  const newProduct = {
    id: id,
    quantity: quantity,
    price: price * quantity,
  };

  arrLocalStorageProduct.push(newProduct);

  // Save to localStorage
  localStorage.setItem(
    "cartProductLS",
    JSON.stringify(arrLocalStorageProduct)
  );

  // Update cart count
  updateCartValue(arrLocalStorageProduct);

  // Show toast
  showToast("add", id);
};