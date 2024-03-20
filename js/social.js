document.addEventListener('DOMContentLoaded', function() {
    const instaLogo = document.querySelector('.social-c img[alt="insta-svg"]');
    const linkedinLogo = document.querySelector('.social-c img[alt="linkedin-svg"]');
    const facebookLogo = document.querySelector('.social-c img[alt="facebbok-svg"]');
    const whatsappLogo = document.querySelector('.social-c img[alt="whatsapp-svg"]');
    const twitterLogo = document.querySelector('.social-c img[alt="twitter-svg"]');

    instaLogo.addEventListener('click', function() {
        window.open('instagram://story', '_blank');
    });

    linkedinLogo.addEventListener('click', function() {
        window.open('linkedin://share', '_blank');
    });

    facebookLogo.addEventListener('click', function() {
        window.open('fb://story', '_blank');
    });

    whatsappLogo.addEventListener('click', function() {
        window.open('whatsapp://send', '_blank');
    });

    twitterLogo.addEventListener('click', function() {
        window.open('twitter://post', '_blank');
    });
});
