// Navigation functionality
const images = document.querySelectorAll('#gallery img');
let currentIndex = 0;

function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
}

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

showImage(currentIndex); // Show the first image initially

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('#gallery img').forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = img.src;
        captionText.innerHTML = img.alt;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = 'none';
    }
});

// Background music functionality
const music = document.getElementById('background-music');
const musicToggle = document.getElementById('music-toggle');

musicToggle.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        musicToggle.textContent = 'Pause Music';
    } else {
        music.pause();
        musicToggle.textContent = 'Play Music';
    }
});
const searchBar = document.getElementById('search-bar');

searchBar.addEventListener('input', () => {
    const searchTerm = searchBar.value.toLowerCase();
    images.forEach(img => {
        const altText = img.alt.toLowerCase();
        if (altText.includes(searchTerm)) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    });
});
let slideshowInterval;

document.getElementById('slideshow-toggle').addEventListener('click', () => {
    const button = document.getElementById('slideshow-toggle');
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
        slideshowInterval = null;
        button.textContent = 'Start Slideshow';
    } else {
        slideshowInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }, 3000); // Change image every 3 seconds
        button.textContent = 'Stop Slideshow';
    }
});
const artistName = document.getElementById('artist-name');
const year = document.getElementById('year');
const description = document.getElementById('description');

// Example artwork details (you can expand this)
const artworkDetails = [
    { artist: "Vincent Van Gogh", year: "1889", description: "A famous painting of a starry night." },
    { artist: "Leonardo da Vinci", year: "1503", description: "The iconic portrait of Mona Lisa." },
    { artist: "Pablo Picasso", year: "1937", description: "A powerful anti-war painting." }
];

document.querySelectorAll('#gallery img').forEach((img, index) => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = img.src;
        captionText.innerHTML = img.alt;
        artistName.textContent = artworkDetails[index].artist;
        year.textContent = artworkDetails[index].year;
        description.textContent = artworkDetails[index].description;
    });
});