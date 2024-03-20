document.addEventListener('DOMContentLoaded', function() {
    const linkLogo = document.getElementById('link-logo-c');
    const linkText = document.querySelector('.link');

    linkLogo.addEventListener('click', function() {
        const range = document.createRange();
        range.selectNode(linkText);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);

        document.execCommand('copy');

        window.getSelection().removeAllRanges();

        linkLogo.querySelector('#cl').style.display = 'inline'; // Show copied logo
        linkLogo.querySelector('img[src="./static/solar_copy-bold.svg"]').style.display = 'none'; // Hide copy logo

        setTimeout(() => {
            linkLogo.querySelector('#cl').style.display = 'none'; // Hide copied logo
            linkLogo.querySelector('img[src="./static/solar_copy-bold.svg"]').style.display = 'inline'; // Show copy logo
        }, 5000); // Revert back to copy logo after 5 seconds
    });
});