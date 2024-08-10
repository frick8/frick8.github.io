document.addEventListener("DOMContentLoaded", function() {
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

document.addEventListener("DOMContentLoaded", function() {
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach(carousel => {
        const images = carousel.querySelector('.carousel-images');
        const items = images.children; // Get all children (images and videos)
        const prevButton = carousel.querySelector('.carousel-prev');
        const nextButton = carousel.querySelector('.carousel-next');
        let index = 0;
        
        // Set the width of the carousel images container
        images.style.width = `${100 * items.length}%`;

        function updateCarousel() {
            const totalItems = items.length;
            const percentage = -((100 * items.length) / totalItems) * index;
            images.style.transform = `translateX(${percentage}%)`;
            images.style.transition = 'transform 0.5s ease'; // Ensure smooth scrolling
            
            // Pause all videos that are not in view
            Array.from(items).forEach(item => {
                const video = item.querySelector('video');
                if (video) {
                    video.pause();
                }
            });
        
            // Ensure the video and images occupy the same space
            Array.from(items).forEach(item => {
                if (item.querySelector('video') || item.querySelector('img')) {
                    item.style.flex = '0 0 100%'; // Ensure it occupies full width
                }
            });
        }
        
        prevButton.addEventListener('click', () => {
            index = (index > 0) ? index - 1 : items.length - 1;
            updateCarousel();
        });
        
        nextButton.addEventListener('click', () => {
            index = (index < items.length - 1) ? index + 1 : 0;
            updateCarousel();
        });
        
        // Initial update to ensure carousel displays correctly
        updateCarousel();
    });
});

document.querySelectorAll('.video-container video').forEach(video => {
    video.controls = false; // Ensure default controls are hidden

    const controls = video.parentElement.querySelector('.custom-video-controls');
    const playPauseBtn = controls.querySelector('.play-pause');
    const progressBar = controls.querySelector('.progress-bar');
    const timeIndicator = controls.querySelector('.time');
    const volumeBtn = controls.querySelector('.volume');
    const fullscreenBtn = controls.querySelector('.fullscreen');

    // Play/Pause functionality with corrected icons
    playPauseBtn.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            // playPauseBtn.classList.add('paused');
        } else {
            video.pause();
            // playPauseBtn.classList.remove('paused');
        }
    });

    video.addEventListener('play', () => {
        console.log('The video is playing.');
        playPauseBtn.classList.add('paused');
    });

    video.addEventListener('pause', () => {
        console.log('The video is paused.');
        playPauseBtn.classList.remove('paused');
    });

    // Update time and progress bar as the video plays
    video.addEventListener('timeupdate', () => {
        console.log("hehehe", video.currentTime)
        const currentTime = video.currentTime;
        const duration = video.duration;

        progressBar.value = (100 / duration) * currentTime;

        const currentMinutes = Math.floor(currentTime / 60);
        const currentSeconds = Math.floor(currentTime % 60);
        const durationMinutes = Math.floor(duration / 60);
        const durationSeconds = Math.floor(duration % 60);

        timeIndicator.textContent = `${currentMinutes}:${currentSeconds.toString().padStart(2, '0')} / ${durationMinutes}:${durationSeconds.toString().padStart(2, '0')}`;
    });

    video.addEventListener('loadedmetadata', () => {
        progressBar.max = video.duration;
    });

    progressBar.addEventListener('input', () => {
        const seekTime = (progressBar.value / 100) * video.duration;
        video.currentTime = seekTime;
    });

    // Volume control toggle
    volumeBtn.addEventListener('click', () => {
        video.muted = !video.muted;
        volumeBtn.classList.toggle('muted');
    });

    // Fullscreen toggle
    fullscreenBtn.addEventListener('click', () => {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) { /* Firefox */
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { /* IE/Edge */
            video.msRequestFullscreen();
        }
    });
});