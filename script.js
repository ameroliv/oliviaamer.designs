
// Wait until the DOM is fully loaded
$(document).ready(function () {


    ////////////////////////////////////////////////

    // NAVIGATION STICKY CODE 

    ////////////////////////////////////////////////


    // Select the navbar with the class 'navbar-sticky'
    var my_nav = $('.navbar-sticky');

    // Check if the navbar exists in the DOM
    if (!my_nav.length) {
        console.error('Navbar-sticky not found in DOM.');
        return;
    }

    // Get the initial vertical position of the navbar
    var sticky_navigation_offset_top = my_nav.offset().top;

    // Function to decide if the navbar should stick
    var sticky_navigation = function () {
        // Get the current scroll position of the window
        var scroll_top = $(window).scrollTop();

        // Add or remove the 'stick' class based on the scroll position
        if (scroll_top > sticky_navigation_offset_top) {
            my_nav.addClass('stick');
        } else {
            my_nav.removeClass('stick');
        }
    };

    // Run the sticky_navigation function on scroll
    $(window).on('scroll', sticky_navigation);

    // Run it once on page load
    sticky_navigation();
});




////////////////////////////////////////////////

// BANNER PARALLAX 

////////////////////////////////////////////////


$(document).ready(function () {
    // Function for parallax background animation
    var initio_parallax_animation = function () {
        // Loop through all elements with the 'parallax' class
        $('.parallax').each(function () {
            // Get the speed value from the 'parallax-speed' attribute
            var speed = $(this).attr('parallax-speed');

            // Validate the speed attribute
            if (speed && !isNaN(speed)) {
                // Calculate the new background position based on scroll position and speed
                var offset = $(window).scrollTop();
                var backgroundPosY = -(offset / speed) + "px";

                // Apply the calculated background position
                $(this).css('background-position', 'center ' + backgroundPosY);
            }
        });
    };

    // Trigger the parallax animation on scroll
    $(window).on('scroll', function () {
        requestAnimationFrame(initio_parallax_animation);
    });
});


////////////////////////////////////////////////

// QUIZ IMAGE OPENING

////////////////////////////////////////////////



// Open the Modal with the clicked image
function openModal(event) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");

    // Get the image source of the clicked image and set it in the modal
    modal.style.display = "flex";
    modalImg.src = event.target.src;
}

// Close the Modal
function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Add event listener to all images with the 'thumbnail' class
document.querySelectorAll(".thumbnail").forEach(image => {
    image.addEventListener("click", openModal);
});



////////////////////////////////////////////////

// WORK CONTAINERS + TRANSITIONS

////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
    const rows = document.querySelectorAll(".row");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("slide-in-left");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    rows.forEach((row) => {
        observer.observe(row);
    });
});



////////////////////////////////////////////////

// PROJECT + IMAGE OPENING

////////////////////////////////////////////////


// Open the Modal with the clicked image
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".thumbnail1").forEach(image => {
        image.addEventListener("click", openModal);
    });
});

function openModal(event) {
    console.log("Opening modal...");
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");

    if (modal && modalImg) {
        modal.style.display = "flex";
        modalImg.src = event.target.src;
        console.log("Modal opened with image:", event.target.src);
    } else {
        console.error("Modal or Image element not found!");
    }
}

function closeModal() {
    console.log("Closing modal...");
    const modal = document.getElementById("myModal");
    if (modal) {
        modal.style.display = "none";
    }
}



////////////////////////////////////////////////

// PROJECT TWO OPENING

////////////////////////////////////////////////



// Open the Modal with the clicked image
function openModal(event) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");

    // Get the image source of the clicked image and set it in the modal
    modal.style.display = "flex";
    modalImg.src = event.target.src;
}

// Close the Modal
function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Add event listener to all images with the 'thumbnail' class
document.querySelectorAll(".thumbnail3").forEach(image => {
    image.addEventListener("click", openModal);
});





////////////////////////////////////////////////

// ABOUT PAGE + MY IMAGE GOING ACCROSS SCREEN

////////////////////////////////////////////////




document.addEventListener("DOMContentLoaded", function () {
    const image = document.getElementById("image");
    setTimeout(() => {
        image.style.opacity = "1";
        image.style.transform = "translateX(0)";
    }, 500); // Delays animation slightly for a smoother effect
});



////////////////////////////////////////////////

// INTERVIEW ARROWS 

////////////////////////////////////////////////


document.querySelectorAll('.user-interview-section-title').forEach(title => {
    title.addEventListener('click', () => {
        const content = title.nextElementSibling;
        const arrow = title.querySelector('.arrow');

        // Skip non-toggle sections
        if (title.classList.contains('no-toggle')) return;

        content.classList.toggle('active');
        arrow.classList.toggle('rotate');
    });
});


////////////////////////////////////////////////

// INTERVIEW ARROWS 

////////////////////////////////////////////////


document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("video");
    const playButton = document.getElementById("play-button");

    // Check if video and button are found
    if (!video || !playButton) {
        console.error("Error: Video or Button not found.");
        return;
    }



////////////////////////////////////////////////

// Progress page: accesssibility video 

////////////////////////////////////////////////



    // Add event listener to play the video when clicked
    playButton.addEventListener("click", function() {
        if (video.paused) {
            video.play(); // Play the video
            playButton.innerText = "Pause Video"; // Change button text
        } else {
            video.pause(); // Pause the video
            playButton.innerText = "Play Video"; // Change button text
        }
    });
});


////////////////////////////////////////////////

// Project Three page

////////////////////////////////////////////////



function togglePause(videoElement) {
    if (videoElement.paused) {
        videoElement.play(); // Play the video if it's paused
    } else {
        videoElement.pause(); // Pause the video if it's playing
    }
}