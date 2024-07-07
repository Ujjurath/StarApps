document.addEventListener("DOMContentLoaded", function () {
    const logoInput = document.getElementById('logoInput');
    const umbrellaImage = document.getElementById('umbrellaImage');
    const logoPreview = document.getElementById('logoPreview');
    const colorSwatches = document.querySelectorAll('.color-swatch');
    const loader = document.getElementById('loader');

    logoInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        
        loader.style.display = 'block';
        logoPreview.style.display = 'none';

        reader.onload = function (e) {
            logoPreview.src = e.target.result;
            logoPreview.style.display = 'block';
            loader.style.display = 'none';
        };

        reader.readAsDataURL(file);
    });

    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', function () {
            const color = swatch.getAttribute('data-color');
            umbrellaImage.src = `images/umbrella_${color}.png`;
        });
    });
});
