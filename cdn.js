// List of ad content objects
const adContents = [
    {
        imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1CwFt7Uja8CGSXKzhvZjo4AiDtTyHoD0Z-BYs2zKKE1SjuZSgBPTE4FswOnH2qlynrExjof3IsANDw52tQJsfZrqK3OCQJaC0QW82ldwgy98pq_Fe39FZkX2PczAvU3jjU1HPB_0cKKShRu4h9_DRxoaDLaLM9kREdSVIQOKSllmjcZ_c30ut8lGwQNJd/w640-h360/photo_2024-07-27_16-02-54.jpg",
        text: "Ethical Hacking - Basics (Kali 2021)",
        link: "https://www.fontbees.store/2024/07/ethical-hacking-basics-kali-2021.html"
    },
    
    {
        imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVWLERcM_pvfyj8ww31tQKrUylPlR6j0OZeG3FB3RaEaDJHckZt9PfGVxtpLkb5JKR5NDYKI_bIvw2vnzWQEiFq9ewgV5rzZSas781CdIYUGZMBTK0hJxB_xPlMLv-SqaMfj4Wa8XEwmaAjVITJQT4a6LS56wtFohyphenhyphen1HEhYVW_Ey5xE-cuEtioCr_uWDem/w640-h360/photo_2024-07-27_16-50-27.jpg",
        text: "Free Udemy Nmap Course: Master Ethical Hacking & Network Security",
        link: "https://www.fontbees.store/2024/07/master-nmap-ethical-hacking-network-security.html"
    },

    {
        imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1CwFt7Uja8CGSXKzhvZjo4AiDtTyHoD0Z-BYs2zKKE1SjuZSgBPTE4FswOnH2qlynrExjof3IsANDw52tQJsfZrqK3OCQJaC0QW82ldwgy98pq_Fe39FZkX2PczAvU3jjU1HPB_0cKKShRu4h9_DRxoaDLaLM9kREdSVIQOKSllmjcZ_c30ut8lGwQNJd/w640-h360/photo_2024-07-27_16-02-54.jpg",
        text: "Master Ethical Hacking: Free Udemy Course on Password Cracking and Cyber Security",
        link: "https://www.fontbees.store/2024/07/master-ethical-hacking-free-udemy-course.html"
    },
    {
        imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUs_HS7pL4gokAA5ewSisXwh5jZK0ao3MjSe_s54Bs0jSyMXatMOUmJbq_KK4jsMa6vTIfeJhesp3EAxNWzH3fgCt1pp7yXFGFj7jueqdNydjIe6PzsMhDUwa_RJODwIXWllthzBehnLn_DnNSYnNfvjtPZsOS5Nd9P5KiDOVyU-3CK9QvKzn_e941va1j/w640-h360/photo_2024-07-27_17-01-36.jpg",
        text: "Free Course: Learn RATs and Crypters in Ethical Hacking",
        link: "https://www.fontbees.store/2024/07/learn-rats-crypters-ethical-hacking.html"
    },

// Add more ad objects as needed

/*
    {
        imageUrl: "https://image1.url",
        text: "Blog 1",
        link: "https://blog1.url"
    },
    {
        imageUrl: "https://image2.url",
        text: "Blog 2",
        link: "https://blog2.url"
    },
    
*/


];

function closePopupAd() {
    document.getElementById('popupAd').style.display = 'none';
}

function displayRandomAd() {
    const randomIndex = Math.floor(Math.random() * adContents.length);
    const adContent = adContents[randomIndex];
    document.getElementById('popupImage').src = adContent.imageUrl;
    document.getElementById('popupText').innerText = adContent.text;
    document.getElementById('popupLink').href = adContent.link;
}

// Show the ad and set the random content after 5 seconds
setTimeout(() => {
    displayRandomAd();
    document.getElementById('popupAd').style.display = 'block';
    setInterval(() => {
        const countdown = document.getElementById('popupCountdown');
        let timeLeft = parseInt(countdown.textContent, 10);
        if (timeLeft > 0) {
            countdown.textContent = timeLeft - 1;
        } else {
            closePopupAd();
        }
    }, 1000);
}, 5000);



// video ad 

// Array of video sources and corresponding button links, text, and descriptions
var videoAds = [
    { 
        src: 'https://codeblackspider.github.io/fontbeescdn/1.mp4', 
        description: 'Learn more about Ethical Hacking...', 
        link: 'https://example.com/ad1', 
        buttonText: 'Join Now' 
    },
    { 
        src: 'https://codeblackspider.github.io/fontbeescdn/2.mp4', 
        description: 'Explore our second video ad...', 
        link: 'https://example.com/ad2', 
        buttonText: 'Learn More' 
    },
    { 
        src: 'https://codeblackspider.github.io/fontbeescdn/3.mp4', 
        description: 'Check out our third ad...', 
        link: 'https://example.com/ad3', 
        buttonText: 'Discover More' 
    },
    { 
        src: 'https://codeblackspider.github.io/fontbeescdn/4.mp4', 
        description: 'Don\'t miss out on our fourth ad...', 
        link: 'https://example.com/ad4', 
        buttonText: 'Get Started' 
    },
    { 
        src: 'https://codeblackspider.github.io/fontbeescdn/5.mp4', 
        description: 'Our fifth ad is packed with great content...', 
        link: 'https://example.com/ad5', 
        buttonText: 'Sign Up' 
    }
    // Add more ads as needed
];

// Function to select a random video
function getRandomVideo() {
    var randomIndex = Math.floor(Math.random() * videoAds.length);
    return videoAds[randomIndex];
}

// Function to generate ad HTML
function createAdHtml(ad) {
    return `
        <div class="videoad-container">
            <div class="videoad-video-container">
                <video autoplay muted loop>
                    <source src="${ad.src}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="videoad-info-container">
                <p>${ad.description}</p>
                <div class="videoad-button-container">
                    <a href="${ad.link}" target="_blank">
                        <button>${ad.buttonText}</button>
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Function to display ads in containers
function displayAds() {
    var containers = document.querySelectorAll('.videoad-container'); // Select all ad containers
    var ads = videoAds.slice(); // Clone the array to shuffle

    // Shuffle ads
    for (let i = ads.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [ads[i], ads[j]] = [ads[j], ads[i]];
    }

    // Display ads in containers
    containers.forEach((container, index) => {
        if (index < ads.length) {
            container.innerHTML = createAdHtml(ads[index]);
        } else {
            container.innerHTML = ''; // Clear extra containers
        }
    });
}

// Initialize ads on page load
displayAds();

