// Elements
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");
const topButton = document.querySelector(".scrollToTop");
const registrationForm = document.querySelector(".registrationForm");

// JSON data (could be loaded from a separate file)
fetch('./products.json')
  .then((response) => response.json())
  .then((data) => {    
    const products = data;    
    console.log(products);
    let choosenProduct = products[0];
  })
  .catch((error) => {
    console.error('Error loading the products:', error);
  });


// Functionality for slider
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Change slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // Update chosen product
    choosenProduct = products[index];

    // Update product details
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    // Update product colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

// Change image on color click
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

// Change size on size click
currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

// Show payment form
productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

// Close payment form
close.addEventListener("click", () => {
  payment.style.display = "none";
});

// Automatic slider functionality
let currentIndex = 0;
const slideDuration = 5000;

function startSlider() {
  setInterval(() => {
    currentIndex = (currentIndex + 1) % products.length;
    wrapper.style.transform = `translateX(${-100 * currentIndex}vw)`;

    // Update chosen product
    choosenProduct = products[currentIndex];
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    // Update product colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  }, slideDuration);
}
startSlider();

// Scroll to top functionality
topButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registrationForm');
  const formErrors = document.getElementById('formErrors');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    formErrors.innerHTML = ''; // Clear previous errors

    const name = form.querySelector('#name').value;
    const email = form.querySelector('#email').value;
    const phone = form.querySelector('#phone').value;
    
    const errors = [];
    
    // Validate Name (assuming it shouldn't be empty)
    if (name.trim() === '') {
      errors.push('Name is required.');
    }

    // Validate Email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@iti\.com$/;
    if (!emailPattern.test(email)) {
      errors.push('Email must be in the format example@iti.com.');
    }

    // Validate Phone (assuming it should be Egyptian phone number format)
    const phonePattern = /^01[0-9]{9}$/;
    if (!phonePattern.test(phone)) {
      errors.push('Phone number must be a valid Egyptian phone number (01XXXXXXXXX).');
    }

    if (errors.length > 0) {
      formErrors.innerHTML = errors.join('<br>');
    } else {
      // Proceed with form submission or further processing
      form.submit();
    }
  });
});




// Simple functional cart
const cart = [];

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  const existingProduct = cart.find((item) => item.product.id === productId);

  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push({ product, quantity: 1 });
  }

  updateCartUI();
}

function updateCartUI() {
  const cartElement = document.querySelector(".cart");
  cartElement.innerHTML = ""; // Clear existing cart items

  cart.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cartItem");
    cartItem.innerHTML = `
      <span>${item.product.title} - $${item.product.price} x ${item.quantity}</span>
    `;
    cartElement.appendChild(cartItem);
  });
}

// Example of adding to cart using the "Air Force" product
addToCart(1);
addToCart(1);
