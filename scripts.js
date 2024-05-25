$(document).ready(function() {
    // Smooth scrolling for anchor links
    $("a").on('click', function(event) {
        if (this.hash !== "" && $(this).attr('href').charAt(0) === '#') {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    // Scroll to target div when button is clicked
    $(".scroll-btn").on('click', function(event) {
        var targetOffset = $("#aboutside").offset().top;

        $('html, body').animate({
            scrollTop: targetOffset
        }, 800);
    });

        // Scroll to target div when button is clicked
        $(".projects-btn").on('click', function(event) {
            var targetOffset = $("#projectside").offset().top;
    
            $('html, body').animate({
                scrollTop: targetOffset
            }, 800);
        });
});

var backToTopButton = document.getElementById("backToTopBtn");

window.addEventListener("scroll", function() {
    // Check if user has scrolled beyond a certain point
    if (window.scrollY > 50) {
        backToTopButton.style.display = "block"; // Show the button
    } else {
        backToTopButton.style.display = "none"; // Hide the button
    }
});

// Scroll to top when button is clicked
backToTopButton.addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Use smooth scrolling behavior
    });
});