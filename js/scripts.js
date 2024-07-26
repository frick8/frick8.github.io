document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add("fade-in");

    let lastScrollTop = 0;
    const header = document.querySelector("header");

    window.addEventListener("scroll", function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            header.classList.add("hidden");
        } else {
            header.classList.remove("hidden");
        }
        lastScrollTop = scrollTop;
    });
});
