// List of ad content objects
const adContents = [
    {
        imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1CwFt7Uja8CGSXKzhvZjo4AiDtTyHoD0Z-BYs2zKKE1SjuZSgBPTE4FswOnH2qlynrExjof3IsANDw52tQJsfZrqK3OCQJaC0QW82ldwgy98pq_Fe39FZkX2PczAvU3jjU1HPB_0cKKShRu4h9_DRxoaDLaLM9kREdSVIQOKSllmjcZ_c30ut8lGwQNJd/w640-h360/photo_2024-07-27_16-02-54.jpg",
        text: "Blog 1",
        link: "https://blog1.url"
    },
    {
        imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_RG0IyTzS-wJSJJxlHAKn8Kn6OP2jO6VOVswot3OAXg47YOKyUHjG39Ni5XQQA-qtMqmuFt3bvZPiUAiMf-g03GzDW5LQUy87jErc5S6avow1gb92_ZMtg9s5TbLqadqP5czMLa9G3HBHCoxNOBmYE_NtO8p1gOEpn-FZUgDPvHBXT8rp_R9JIBQCVGxs/s750/photo_2024-07-27_17-51-17.jpg",
        text: "Blog 2",
        link: "https://blog2.url"
    },
    {
        imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVWLERcM_pvfyj8ww31tQKrUylPlR6j0OZeG3FB3RaEaDJHckZt9PfGVxtpLkb5JKR5NDYKI_bIvw2vnzWQEiFq9ewgV5rzZSas781CdIYUGZMBTK0hJxB_xPlMLv-SqaMfj4Wa8XEwmaAjVITJQT4a6LS56wtFohyphenhyphen1HEhYVW_Ey5xE-cuEtioCr_uWDem/w640-h360/photo_2024-07-27_16-50-27.jpg",
        text: "Blog 2",
        link: "https://blog2.url"
    },
    // Add more ad objects as needed
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
