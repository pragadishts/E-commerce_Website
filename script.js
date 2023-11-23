function addToCart(productNumber) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    cart.push({ productNumber });
    
    localStorage.setItem('cart', JSON.stringify(cart));
    
    alert(`Product ${productNumber} added to cart!`);
}


document.addEventListener("DOMContentLoaded", function() {
    var footer = document.querySelector("footer");
  
    window.addEventListener("scroll", function() {
      // Calculate the scroll position
      var scrollPosition = window.scrollY + window.innerHeight;
      // Calculate the height of the document
      var documentHeight = document.body.offsetHeight;
  
      // If the scroll position is at the bottom of the document, show the footer
      if (scrollPosition >= documentHeight) {
        footer.style.display = "block";
      } else {
        footer.style.display = "none";
      }
    });
  });
  