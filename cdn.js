// List of ad content objects
const adContents = [
    {
                imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhq_wvxBawc-MhhyMZj8HRPSba_a2dcOSseOrFr0KZokj1-lk-2QX8phASY07ZegX0b5hIyTGSf_-lJgiC3skH70_FBaHfzuAT2TxmHBk7f68EnWG1hyphenhyphen8dA9QYYRlm1Y7U7TySIzz43xnCu2yF-etECiRw4Zta9V1VtKwAJv6DXg6ba2BLRtcP1R9UcEmT-/w640-h360/photo_2024-08-02_11-26-33.jpg",
                text: "Master Full Stack Web Development: Build and Deploy Projects with PHP, MySQL, HTML, CSS, and Bootstrap",
                link: "https://www.fontbees.store/2024/08/full-stack-web-development-projects-php-mysql-html-css-bootstrap.html"
            },
            {
                imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjdDtmEjt3cwiWJ8OmpPE48EHo3hUv0yhYq7V_XOqpMcEvj9IxjR-XDosqM2xhFfb3kVe2Ff8xk8i-SNYklUOI1K_DuI5wbqpJpUKocEcb7k11mSnhS2OUXZKJswUT16vqtB1-QThSHHVjxf2-EQ5ykzOYRHT9dxjvtrX04CsRwE6UQYANBh3X492BHCUvS/w640-h360/photo_2024-08-02_11-04-07.jpg",
                text: "Full Stack Development Bootcamp (Web, Desktop, and Mobile App)",
                link: "https://www.fontbees.store/2024/08/full-stack-development-bootcamp-web.html"
            },

            {
                imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEilhiOjolxE0tcw8AEnzMHKGdXEMzT3O_6o5VJBfmljObZE_X-DrqYBBiFwlBZGqQPuotO3VD4gwEN8XYjhvcVdyfyaVHPUg6CJKN7EeGLOCUmgTbD_Fm8J4b8TTQyfrZvydDqDpcdW1uY4XTPHJOVhhxOY1Wfsnl46vBqwQntIfGblyrztdCGnWXeTm2cj/w640-h360/photo_2024-08-02_10-12-03.jpg ",
                text: "Building Full-Stack Java Web Applications with Jmix",
                link: "https://www.fontbees.store/2024/08/full-stack-java-web-development-jmix-guide.html"
            },

            {
                imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDuSZsgCrnWznVaIRE_ziglNOuk5UT80mHJdgoF1MeCLdiFY5TOtRKUWbvwWAvC6Kw8hwZnTSxPRzs-6VtX14LNUmgyP1FWbMZZyyhE-5lWWK_Y3zXpwkspEjZg0-WKwwMDZBg75SIhqds52TJvB1b-qRDMPIehSZRoAsOGe4959yaPYTj6mLk0QVcxE-Q/w640-h360/photo_2024-08-01_17-13-06.jpg ",
                text: "Design Theory: The Basics of Visual Design",
                link: "https://www.fontbees.store/2024/08/design-theory-basics-visual-design.html"
            },

            {
                imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjIGWMI7BE0fvREMfanAD9w3ZUXpTajQQCro4bupfmEZLzkYnTDMPSbQ_dCdAccVqE0JJrfHmexM1Wepf-mmy2zCoB2mL285aNUscbRVVa6fDC68JNqEZiWA6p7_axV-2vin8q37CWoJGjMvB5I5MdFeroe5-bk98VzQzNsVHejGWES0zpmm308HRUdMD2q/w640-h360/photo_2024-08-01_16-55-34.jpg ",
                text: "Master Your Artist Brand: A Step-by-Step Guide",
                link: "https://www.fontbees.store/2024/08/complete-guide-to-branding-for-artists.html"
            },
            {
                imageUrl: " https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiW_1JyHw2k33Ej5-p8i4d1EBdkfGMcWqRCHTG6VfwlZVGVi2QeiNWAY42Y7jjduBpA3L-5-QRgd1ZY_4C7pgupA4HcbcH2KBfYeEERElC4aDmoaE-2LDLmefDY7A6GftfU_pYU4q7hLzAyoLtBFOdFFhc8GhCXMTSZEWpOVr3Y3rZJV3EIDwyx4Dvq8H1q/w640-h360/photo_2024-07-31_09-55-56.jpg",
                text: "Hands on with Top Ethical Hacking Tools",
                link: "https://www.fontbees.store/2024/07/hands-on-top-ethical-hacking-tools.html"
            },
            {
                imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiaZ7ikZ2S8rQpRxH5wa-GbBAXsAMrl0Vmh0uAj8cZ4KYq2cmeQVRNkODVd-coOntK3x10bmPZP7NrFqIPlkn9dNvjWGUWLl83YEYLCLxNx-kTkobxikThvzvI_6k4Nqh5bp_nyF8dZyIwvaI1qoSyMOHm6FR-S60pZG5IYBasIFZxL7mMlmjnmy73RW5IW/w640-h360/photo_2024-07-29_17-26-29.jpg",
                text: "Start Kali Linux, Ethical Hacking and Penetration Testing",
                link: "https://www.fontbees.store/2024/07/start-kali-linux-ethical-hacking-penetration-testing.html"
            },
            {
                imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiyTDqBRQqfIJ-p7edDwS-x6T2wzVPOcD5y5WM05ajdSfF-H8AxQ_obqUG2mrJ2zLSucpH_8E-bscSZFyqdQI495CBfGu5pV-AbwN743LgoqLGsICLZ-DqMiLl9-r3Gvl27cNyt9839qGZtMpLiSWs_lW3ykFXg_9-8I7DU0M1HCzWpFLFT2hpVQ89plNpo/w640-h360/photo_2024-07-28_11-03-31.jpg ",
                text: "Ethical Hacking Basics: Learn Kali 2021 for Cybersecurity",
                link: "https://www.fontbees.store/2024/07/ethical-hacking-basics-kali-2021.html"
            },
            {
                imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiyTDqBRQqfIJ-p7edDwS-x6T2wzVPOcD5y5WM05ajdSfF-H8AxQ_obqUG2mrJ2zLSucpH_8E-bscSZFyqdQI495CBfGu5pV-AbwN743LgoqLGsICLZ-DqMiLl9-r3Gvl27cNyt9839qGZtMpLiSWs_lW3ykFXg_9-8I7DU0M1HCzWpFLFT2hpVQ89plNpo/w640-h360/photo_2024-07-28_11-03-31.jpg ",
                text: "Ethical Hacking Basics: Learn Kali 2021 for Cybersecurity",
                link: "https://www.fontbees.store/2024/07/ethical-hacking-basics-kali-2021.html"
            },
            {
                imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4rGQUtTmtAlFyZnsbbPnNu4U-vhr-V1LGWpJsjmc4ceG5o6fQBeQRgk4ufW41nhjWU2BeIIcMLtQJDQ_AxIWdKrLFu7PALljzjWKvY3_WsIONW6Tg8KpEdRVC_6MVrq_X-er6J0S-nhvfXTieN1PZ2nbfTgUHCYgtSyHnyBEMOh96A3mKkfv8k08By8hG/w640-h360/photo_2024-07-28_01-02-56.jpg ",
                text: "Free Ethical Hacking Course: From Beginner to Advanced",
                link: "https://www.fontbees.store/2024/07/free-ethical-hacking-course-beginner-to-advanced.html"
            },
            {
                imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjeMpe1WDmJHTlbm_u3vu69feqiIPt36eTfWW3qOBqE3Dtf-d1CIMnlcPdxGABLSzfmbyZY-OFZrntK-VMPLUv5A9MyjLeBcX46sHgeNUJwhznLtwFt6S8jnVI4wDn9Gad3iv1YBqqsqrooZV0n5HvkJLaejyFLyXxELc_nskvX7j46oADwBwR8sJd5ZpO/w640-h360/photo_2024-07-27_23-09-45.jpg ",
                text: "Free Ethical Hacking Course: Learn from Scratch & Combat Cyber Attacks",
                link: "https://www.fontbees.store/2024/07/free-ethical-hacking-course-learn-from.html"
            },
            {
                imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhrDmhuqhEEbA0EP8ncgwxDhdsxgLeGPuAmWMZQymnc5Cq78M0taRn_LgaH8jT5W8gbHNkNUV_NN4kL030cfttLLGt9J8vTbKeOcm8ahppKU-t1r6YmfLVgePHqpl_pWWUUg3cb83ChyphenhyphenqSbo-bxZ9KAyqMKuwGYWdRoQbq7SawiFpj62fw_FMcABTNnd2k-/w640-h360/photo_2024-07-27_18-23-15.jpg ",
                text: "Free Course: Nmap & Metasploit Framework for Ethical Hacking Part-2",
                link: "https://www.fontbees.store/2024/07/nmap-metasploit-ethical-hacking-part-2.html"
            },
            {
                imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_RG0IyTzS-wJSJJxlHAKn8Kn6OP2jO6VOVswot3OAXg47YOKyUHjG39Ni5XQQA-qtMqmuFt3bvZPiUAiMf-g03GzDW5LQUy87jErc5S6avow1gb92_ZMtg9s5TbLqadqP5czMLa9G3HBHCoxNOBmYE_NtO8p1gOEpn-FZUgDPvHBXT8rp_R9JIBQCVGxs/w640-h360/photo_2024-07-27_17-51-17.jpg ",
                text: "Free Wireshark Crash Course: Master Network Analysis for Ethical Hacking",
                link: "https://www.fontbees.store/2024/07/free-wireshark-crash-course-ethical-hacking.html"
            },
            {
                imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUs_HS7pL4gokAA5ewSisXwh5jZK0ao3MjSe_s54Bs0jSyMXatMOUmJbq_KK4jsMa6vTIfeJhesp3EAxNWzH3fgCt1pp7yXFGFj7jueqdNydjIe6PzsMhDUwa_RJODwIXWllthzBehnLn_DnNSYnNfvjtPZsOS5Nd9P5KiDOVyU-3CK9QvKzn_e941va1j/w640-h360/photo_2024-07-27_17-01-36.jpg ",
                text: "Free Course: Learn RATs and Crypters in Ethical Hacking",
                link: "https://www.fontbees.store/2024/07/learn-rats-crypters-ethical-hacking.html"
            },
            {
                imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVWLERcM_pvfyj8ww31tQKrUylPlR6j0OZeG3FB3RaEaDJHckZt9PfGVxtpLkb5JKR5NDYKI_bIvw2vnzWQEiFq9ewgV5rzZSas781CdIYUGZMBTK0hJxB_xPlMLv-SqaMfj4Wa8XEwmaAjVITJQT4a6LS56wtFohyphenhyphen1HEhYVW_Ey5xE-cuEtioCr_uWDem/w640-h360/photo_2024-07-27_16-50-27.jpg ",
                text: "Free Udemy Nmap Course: Master Ethical Hacking & Network Security",
                link: "https://www.fontbees.store/2024/07/master-nmap-ethical-hacking-network-security.html"
            },
            {
                imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1CwFt7Uja8CGSXKzhvZjo4AiDtTyHoD0Z-BYs2zKKE1SjuZSgBPTE4FswOnH2qlynrExjof3IsANDw52tQJsfZrqK3OCQJaC0QW82ldwgy98pq_Fe39FZkX2PczAvU3jjU1HPB_0cKKShRu4h9_DRxoaDLaLM9kREdSVIQOKSllmjcZ_c30ut8lGwQNJd/w640-h360/photo_2024-07-27_16-02-54.jpg ",
                text: "Master Ethical Hacking: Free Udemy Course on Password Cracking and Cyber Security",
                link: "https://www.fontbees.store/2024/07/master-ethical-hacking-free-udemy-course.html"
            },
            {
                imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj8cfFrbnmRv8SMmd2MiwNyThF0lzin-f1ufesEg7R8VjD9lBuwmh5-a1MBGoGQYHtiJD9Krr7SYgsY7WSQDqBhP-0M4c4shyETxil9aS16Qj6LlbBrV_FVm4-VHLZRuqbyF637kJVWXqO2kDiruUm066CayIoy0_dJXqKNW5ZG-ZMmsUrHJIxhLVcjMrLa/w320-h184/Nova%20Klasse%20Font.png",
                text: "Nova Klasse Font free download",
                link: "https://www.fontbees.store/2024/07/nova-klasse-font-download.html"
            },
            {
                imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCRlc6slv9CrAXMdSnETPtmi54d2HyxF5SA67WU8_Qbc4xw2U3GEpqZ6G1_6b_IsGRm_ynfvBKbiudivpcCkLa1RzeimshdewpV0WrM-07K6Fn9uv0l8CapdsiL-T3CZjCYGlPHUDSgZuP1u5tSHynHShK8_Bn73UscLPMtb9x4uHqRySr0gUCBCzBbgzW/s16000/Morgena.png ",
                text: "Morgena Font: Elegant and Timeless Design with Free Download",
                link: "https://www.fontbees.store/2024/07/Discover-Morgena%20Font-Free-Download-Available.html"
            },
            {
                imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCRlc6slv9CrAXMdSnETPtmi54d2HyxF5SA67WU8_Qbc4xw2U3GEpqZ6G1_6b_IsGRm_ynfvBKbiudivpcCkLa1RzeimshdewpV0WrM-07K6Fn9uv0l8CapdsiL-T3CZjCYGlPHUDSgZuP1u5tSHynHShK8_Bn73UscLPMtb9x4uHqRySr0gUCBCzBbgzW/s16000/Morgena.png ",
                text: "Morgena Font: Elegant and Timeless Design with Free Download",
                link: "https://www.fontbees.store/2024/07/Discover-Morgena%20Font-Free-Download-Available.html"
            },
            {
                imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2kjX4fzWWdoyu90GKU5r3hEFCjKjFbcla4XuWGptyAp4hrexUL17-smZavAHJhUejHJl-3EVAn6J0NCxNUKIurmUKaPukqK-CixAl8oGprDNwmZ3VGTTG2eO02S875MvLtHcH0Fwva5xjetjRZDC6fQ1tCVahfV-JNIAVQ2hBKmUzcElA7l2FfyUYBLkf/s16000/Nohemi%20Black.png ",
                text: "Discover Nohemi Font on FontBees : Free Nohemi Font download",
                link: "https://www.fontbees.store/2024/07/discover-nohemi-font-on-fontbees-free-nohemi-font-download.html"
            },
            {
                imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEihf2x4kAOIiWekkGBe3zb22manFS9NbSYXqRLoiAwxkg-K7uhV-WG2WBNA55zca0jKn8ypRt0USdIO6NhnX6J28UVLJQIVow8eioK706akfxpkM24FQyzDG_tio-oVxqJGXPo8Xj6LxAH1HIQwKGT8Pl0FlSZnM-9dJa1TJ4IaZ-Yqonuzl4In2IHamGfG/s16000/Sergio%20Trendy%20thump.png ",
                text: "Sergio Trendy Serif Font free download",
                link: "https://www.fontbees.store/2024/06/sergio-trendy-serif-font-free-download.html"
            },
            {
                imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLh26QC0CeGtu-fi1voA2hD7jpUu6vt36FVNBaRWwQOnewIHIwJXfp4EtaSI_WS6Hj-ts3CEt0zImSKM-GUuyAsgDm8rp7zIioRho0LlyTMCkkV1Xsc0sG_pm4Rvhw5NLaLJNG6S7UHP7bRb9GUVl5FyCGswXtDbKXLPdZuD_oblzJqkUfker93Dx4jGUX/s16000/Now%20%20thump.png ",
                text: "Now Font Family Free Download",
                link: "https://www.fontbees.store/2024/06/now-font-family-free-download.html"
            },
            {
                imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyDRSh8Gs0r375CJVd2aFafKuYfMvYnbKjLJMECpi33SGIQSK7udpzcsDL6_2lNX2_CueKhCzK-HLJbfyKInkJNXZwN7PZePgUVrJCAvyi19c2RWW38PJEVrwONik9SVMV6QbTGLH6BLgIUxVgm8_Bvy6ctelEO18EETUSkLzx5D7y_rkWcznRXDNmn56w/s16000/Distress%20Strength%20%20thump.png ",
                text: "Distress Strength Font Free Download",
                link: "https://www.fontbees.store/2024/06/test.html"
            },
            {
                imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimzX0e3mIVIvlSyxp6927KnFIWWJNztvrLuRkNusrZGkpxCgSWA4y0-l_arfE_fZHGS9aRf3vcdxNVzPZonVSVF__ugvm52EKfpAnS_hfxKlKJzR6xlFFE-Km4e2CZ8nQ9HPf36HL-KdJxU1rWH8fbZ6VGQ9LE7g81LXIOCLW_X_jRCdov-Oq3ax_Lu0UN/s16000/28%20thump.png ",
                text: "28 Days Later Font Free Download",
                link: "https://www.fontbees.store/2024/06/28-days-later-font-free-download.html",
                
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

