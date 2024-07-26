document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById("sidebar");
    const toggleButton = document.getElementById("toggle-button");

    toggleButton.addEventListener("click", function() {
        sidebar.classList.toggle("collapsed");
        document.getElementById("content").classList.toggle("collapsed");
    });

    window.addEventListener("resize", function() {
        if (window.innerWidth <= 768) {
            sidebar.classList.add("collapsed");
            document.getElementById("content").classList.add("collapsed");
        } else {
            sidebar.classList.remove("collapsed");
            document.getElementById("content").classList.remove("collapsed");
        }
    });
});