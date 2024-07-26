document.addEventListener("DOMContentLoaded", function() {
    let lastScrollTop = 0;
    let scrollTimeout;
    const header = document.querySelector("header");

    window.addEventListener("scroll", function() {
        clearTimeout(scrollTimeout);

        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Debounce the scroll event handling
        scrollTimeout = setTimeout(function() {
            if (scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {
                header.classList.add("hidden");
            } else if (scrollTop < lastScrollTop) {
                header.classList.remove("hidden");
            }
            lastScrollTop = scrollTop;
        }, 100);
    });
});