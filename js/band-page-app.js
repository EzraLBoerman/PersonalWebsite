// -- Content fade-in function -- //
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

// -- Owl Carousel and Page Scroll Script -- //
$(document).ready(function() {
    // Member Carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

    // Testimony Carousels
    $('.owl-carousel').each(function() {
        $(this).owlCarousel( {
            margin: 20,
            loop: true,
            autoplayTimeOut: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                }
            }
        });
    });



    // Scrolling
    $(window).scroll(function() {
        if (this.scrollY > 200) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Scroll-Up on ^ button
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 }, 1200);
    });

    // -- Smooth Scrolling -- //
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // -- Videos Scrolling -- //
    var slide_vid = document.querySelector('.video-item');
    var videos = ['Video_3.mov', 'Video_2.mov', 'Video.mov', 'Video_1.mov', 'Video_4.mov'];
    var i = 0; // Current index in video gallery

    // prev button being clicked
    document.querySelector('.band-videos .video-gallery-controls .prev').addEventListener('click', function() {
        if (i <= 0) i = videos.length;
        i--;
        return setVid();
    });

    // next button being clicked button being clicked
    document.querySelector('.band-videos .video-gallery-controls .next').addEventListener('click', function() {
        if (i >= videos.length - 1) i = -1;
        i++;
        return setVid();
    });

    // video ending and moving on to next video
    function vidEndOntoNext() {
        if (i >= videos.length - 1) i = -1;
        i++;
        return setVid();
    }

    function setVid() {
        return slide_vid.setAttribute('src', 'videos/' + videos[i])
    }
});