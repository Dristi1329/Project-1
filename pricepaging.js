document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".price-col button");
    const mobileMenuToggle = document.getElementById("mobile-menu");
    const navList = document.querySelector(".nav-list");

    // Add click event listener to each "Add to Cart" button
    addToCartButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            document.querySelectorAll(".price-col").forEach(function (col) {
                col.style.backgroundImage = "linear-gradient(white, cyan)";
            });

            this.closest(".price-col").style.backgroundImage = "linear-gradient(white, green)";

            // Add your desired action here
            // For example, show an alert
            alert("Item added to cart!");

            // Or navigate to another webpage
           
        });
    });

    // // Toggle mobile navigation menu
    // mobileMenuToggle.addEventListener("click", function () {
    //     navList.classList.toggle("show");
    // });

    // // Smooth scroll for navigation links
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();

    //         document.querySelector(this.getAttribute('href')).scrollIntoView({
    //             behavior: 'smooth'
    //         });
    //     });
    });
