document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById("sidebar");
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "☰";
    toggleButton.id = "toggle-button";
    sidebar.insertBefore(toggleButton, sidebar.firstChild);

    toggleButton.addEventListener("click", function() {
        if (sidebar.style.width === "60px") {
            sidebar.style.width = "250px";
        } else {
            sidebar.style.width = "60px";
        }
    });

    window.addEventListener("resize", function() {
        if (window.innerWidth <= 768) {
            sidebar.style.width = "60px";
        } else {
            sidebar.style.width = "250px";
        }
    });
});