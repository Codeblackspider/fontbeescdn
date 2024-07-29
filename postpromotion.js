
        var postpromotionGalleryItems = [
            {
                src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhrDmhuqhEEbA0EP8ncgwxDhdsxgLeGPuAmWMZQymnc5Cq78M0taRn_LgaH8jT5W8gbHNkNUV_NN4kL030cfttLLGt9J8vTbKeOcm8ahppKU-t1r6YmfLVgePHqpl_pWWUUg3cb83ChyphenhyphenqSbo-bxZ9KAyqMKuwGYWdRoQbq7SawiFpj62fw_FMcABTNnd2k-/s16000/photo_2024-07-27_18-23-15.jpg",
                description: "Free Course: Nmap & Metasploit Framework for Ethical Hacking Part-2",
                link: "https://www.fontbees.store/2024/07/nmap-metasploit-ethical-hacking-part-2.html"
            },
            {
                src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVWLERcM_pvfyj8ww31tQKrUylPlR6j0OZeG3FB3RaEaDJHckZt9PfGVxtpLkb5JKR5NDYKI_bIvw2vnzWQEiFq9ewgV5rzZSas781CdIYUGZMBTK0hJxB_xPlMLv-SqaMfj4Wa8XEwmaAjVITJQT4a6LS56wtFohyphenhyphen1HEhYVW_Ey5xE-cuEtioCr_uWDem/w640-h360/photo_2024-07-27_16-50-27.jpg",
                description: "Free Udemy Nmap Course: Master Ethical Hacking & Network Security",
                link: "https://www.fontbees.store/2024/07/master-nmap-ethical-hacking-network-security.html"
            },
            {
                src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUs_HS7pL4gokAA5ewSisXwh5jZK0ao3MjSe_s54Bs0jSyMXatMOUmJbq_KK4jsMa6vTIfeJhesp3EAxNWzH3fgCt1pp7yXFGFj7jueqdNydjIe6PzsMhDUwa_RJODwIXWllthzBehnLn_DnNSYnNfvjtPZsOS5Nd9P5KiDOVyU-3CK9QvKzn_e941va1j/w640-h360/photo_2024-07-27_17-01-36.jpg",
                description: "Free Course: Learn RATs and Crypters in Ethical Hacking",
                link: "https://www.fontbees.store/2024/07/learn-rats-crypters-ethical-hacking.html"
            },
            {
                src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1CwFt7Uja8CGSXKzhvZjo4AiDtTyHoD0Z-BYs2zKKE1SjuZSgBPTE4FswOnH2qlynrExjof3IsANDw52tQJsfZrqK3OCQJaC0QW82ldwgy98pq_Fe39FZkX2PczAvU3jjU1HPB_0cKKShRu4h9_DRxoaDLaLM9kREdSVIQOKSllmjcZ_c30ut8lGwQNJd/w640-h360/photo_2024-07-27_16-02-54.jpg",
                description: "Master Ethical Hacking: Free Udemy Course on Password Cracking and Cyber Security",
                link: "https://www.fontbees.store/2024/07/master-ethical-hacking-free-udemy-course.html"
            },
            {
                src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_RG0IyTzS-wJSJJxlHAKn8Kn6OP2jO6VOVswot3OAXg47YOKyUHjG39Ni5XQQA-qtMqmuFt3bvZPiUAiMf-g03GzDW5LQUy87jErc5S6avow1gb92_ZMtg9s5TbLqadqP5czMLa9G3HBHCoxNOBmYE_NtO8p1gOEpn-FZUgDPvHBXT8rp_R9JIBQCVGxs/s16000/photo_2024-07-27_17-51-17.jpg",
                description: "Free Wireshark Crash Course: Master Network Analysis for Ethical Hacking",
                link: "https://www.fontbees.store/2024/07/free-wireshark-crash-course-ethical-hacking.html"
            },
            {
                src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhrDmhuqhEEbA0EP8ncgwxDhdsxgLeGPuAmWMZQymnc5Cq78M0taRn_LgaH8jT5W8gbHNkNUV_NN4kL030cfttLLGt9J8vTbKeOcm8ahppKU-t1r6YmfLVgePHqpl_pWWUUg3cb83ChyphenhyphenqSbo-bxZ9KAyqMKuwGYWdRoQbq7SawiFpj62fw_FMcABTNnd2k-/s16000/photo_2024-07-27_18-23-15.jpg",
                description: "Free Udemy Nmap Course: Master Ethical Hacking & Network Security",
                link: "https://www.fontbees.store/2024/07/master-nmap-ethical-hacking-network-security.html"
            }
        ];

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        function renderGallery(items) {
            var container = document.getElementById("postpromotion-galleryContainer");
            container.innerHTML = "";
            items.forEach(function(item) {
                var galleryItem = document.createElement("div");
                galleryItem.className = "postpromotion-gallery-item";
                
                var img = document.createElement("img");
                img.src = item.src;
                
                var description = document.createElement("p");
                description.innerText = item.description;
                
                var linkButton = document.createElement("a");
                linkButton.href = item.link;
                linkButton.target = "_blank";
                var button = document.createElement("button");
                button.innerText = "Read More";
                linkButton.appendChild(button);
                
                galleryItem.appendChild(img);
                galleryItem.appendChild(description);
                galleryItem.appendChild(linkButton);
                container.appendChild(galleryItem);
            });
        }

        document.addEventListener("DOMContentLoaded", function() {
            shuffleArray(postpromotionGalleryItems);
            renderGallery(postpromotionGalleryItems.slice(0, 6));
        });
