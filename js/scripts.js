document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.querySelector('.sidebar-toggle');

    toggleButton.addEventListener('click', function () {
        if (sidebar.style.transform === 'translateX(0px)') {
            sidebar.style.transform = 'translateX(-100%)';
        } else {
            sidebar.style.transform = 'translateX(0)';
        }
    });
});