(function ($) {
    'use strict';


    // 1. counterup
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // 2. project tab filter
    activePostFilter();
    function activePostFilter() {
        var postFilter = $('.cat-filter-init');
        $.each(postFilter, function (index, value) {
            var el = $(this);
            var parentClass = $(this).parent().attr('class');
            var $selector = $('#' + el.attr('id'));
            $($selector).imagesLoaded(function () {
                var festivarMasonry = $($selector).isotope({
                    itemSelector: '.cat-filter-item',
                    percentPosition: true,
                    masonry: {
                        columnWidth: 0,
                        gutter: 0
                    }
                });
                $('.collapse').on('shown.bs.collapse hidden.bs.collapse', function () {
                    festivarMasonry.isotope('layout');
                });
                $(document).on('click', '.' + parentClass + ' .cat-tab-filter a', function () {
                    var filterValue = $(this).attr('data-filter');
                    festivarMasonry.isotope({
                        filter: filterValue,
                        animationOptions: {
                            duration: 450,
                            easing: "linear",
                            queue: false,
                        }
                    });
                    return false;
                });
                $('.cat-filter-wrapper-2 .cat-tab-filter a:first-child').click();
            });
        });
    }
    $(document).on('click', '.cat-tab-filter a', function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });


    // 3. info
    $('.info-slide').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            424: {
                items: 2,
                autoplay: true,
                autoplayHoverPause: true,
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });




    // 4. testimonial
    $('.testimonial-slide').owlCarousel({
        loop: true,
        margin: 25,
        dots: true,
        nav: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2

            },
            992: {
                items: 3
            }
        }
    });


    // 5. scroll top scrollingup
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 200) {
            $('.scroll_top').addClass('is-active');
        } else {
            $('.scroll_top').removeClass('is-active');
        }
    });
    $('.scroll_top').on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });


    // 6. JavaScript
    function setHeaderInnerStyles(visibility, opacity, translateX) {
        $(".header_inner").css({
            "visibility": visibility,
            "opacity": opacity,
            "transform": "translateX(" + translateX + ")"
        });
    }

    $(".toggle_btn").click(function () {
        setHeaderInnerStyles("visible", "1", "0");
    });

    $(".close_style").click(function () {
        setHeaderInnerStyles("hidden", "0", "-100%");
    });



    // 7. darkmode
    const switcher = $('#dark-mode-switch');
    const dhtml = $("html");

    // Check the user's preference from localStorage
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';
    if (isDarkMode) {
        switcher.prop('checked', true);
        dhtml.addClass('dark-mode');
    }

    // Add a change event listener to the switcher
    switcher.on('change', function () {
        // Toggle the dark mode class on the body
        dhtml.toggleClass('dark-mode');

        // Store the user's preference in localStorage
        const isDarkMode = dhtml.hasClass('dark-mode');
        localStorage.setItem('dark-mode', isDarkMode);
    });
    // end DarkMode


    // 8.  main btn animation
    document
        .querySelectorAll(".main-btn")
        .forEach(
            (button) =>
            (button.innerHTML =
                "<div><span>" +
                button.textContent.trim().split("").join("</span><span>") +
                "</span></div>")
        );



    // 9. blog view
    $('.blogtrigger').on('click', function (e) {
        e.preventDefault();
        if (!$('.overlay-blog').hasClass("active")) {
            $('.overlay-blog').addClass('active');
            $('body').addClass('blog-preview'); // Add class 'blog-preview' to the body
            $('.remove-style').focus();
            var e, t, i, n = document.querySelector(".overlay-blog");
            let a = document.querySelector(".remove-style"),
                s = n.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),
                o = s[s.length - 1];
            if (!n) return !1;
            for (t = 0, i = (e = n.getElementsByTagName("a")).length; t < i; t++) e[t].addEventListener("focus", c, !0), e[t].addEventListener("blur", c, !0);

            function c() {
                for (var e = this; -1 === e.className.indexOf("blog-model");) "li" === e.tagName.toLowerCase() && (-1 !== e.className.indexOf("focus") ? e.className = e.className.replace(" focus", "") : e.className += " focus"), e = e.parentElement
            }

            document.addEventListener("keydown", function (e) {
                ("Tab" === e.key || 9 === e.keyCode) && (e.shiftKey ? document.activeElement === a && (o.focus(), e.preventDefault()) : document.activeElement === o && (a.focus(), e.preventDefault()))
            })
        } else {
            $('.blogtrigger').focus();
            $('.overlay-blog').removeClass('active');
            $('body').removeClass('blog-preview'); // Remove class 'blog-preview' from the body
        }
    });

    $('.remove-style').on('click', function (e) {
        e.preventDefault();
        $('.blogtrigger').focus();
        $('.overlay-blog').removeClass('active');
        $('body').removeClass('blog-preview'); // Remove class 'blog-preview' from the body
    });



    // 10. scroll top scrollingup
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 200) {
            $('.scrollingUp').addClass('is-active');
        } else {
            $('.scrollingUp').removeClass('is-active');
        }
    });
    $('.scrollingUp').on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });


    // 11. main-menu animation
    document.addEventListener("DOMContentLoaded", function () {
        const sections = document.querySelectorAll(".section-scroll");
        const menuLinks = document.querySelectorAll("nav .nav-link");

        function setActiveLink() {
            let fromTop = window.scrollY;

            sections.forEach((section, index) => {
                if (
                    section.offsetTop <= fromTop + 50 &&
                    section.offsetTop + section.offsetHeight > fromTop + 50
                ) {
                    menuLinks.forEach((link) => {
                        link.classList.remove("active");
                    });
                    menuLinks[index].classList.add("active");
                }
            });
        }

        document.addEventListener("scroll", setActiveLink);
    });


    // 12. Preloader
    window.onload = function () {
    const preloader = document.querySelector(".preloader");
    const skipButton = document.getElementById("skipButton");
    
    // Function to hide the preloader
    function hidePreloader() {
        preloader.style.display = "none";
    }
    
    // Hide the preloader after a certain delay
    setTimeout(hidePreloader, 3000); // Adjust the duration (in milliseconds) as needed
    
    // Add click event listener to the skip button
    skipButton.addEventListener("click", hidePreloader);
    };




})(jQuery);