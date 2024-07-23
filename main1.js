document.addEventListener('DOMContentLoaded', function () {
    const text = document.getElementById('text');
    const tester = document.querySelector('.tester');
    const slider = document.getElementById('slider');
    const slider2 = document.getElementById('slider2');
    const colorPicker = document.getElementById('head');
    const colorPicker2 = document.getElementById('stroke');
    const colorPicker3 = document.getElementById('gradient');

    let weight = 50;
    let width = 50;

    // Set initial font variation settings
    text.style.fontVariationSettings = `'wdth' ${width}, 'wght' ${weight}`;

    // Set initial text stroke color and variable
    text.style.color = colorPicker.value;
    text.style.WebkitTextStrokeColor = colorPicker2.value;
    document.documentElement.style.setProperty('--stroke', colorPicker2.value);
    document.documentElement.style.setProperty('--stroke-rgb', hexToRgb(colorPicker2.value));

    // Event listeners for color pickers
    colorPicker.addEventListener("input", function(event) {
        text.style.color = event.target.value;
    });

    colorPicker2.addEventListener("input", function(event) {
        text.style.WebkitTextStrokeColor = event.target.value;
        document.documentElement.style.setProperty('--stroke', event.target.value);
        document.documentElement.style.setProperty('--stroke-rgb', hexToRgb(event.target.value));
    });


    colorPicker3.addEventListener("input", watchColorPicker3, false);

    function watchColorPicker3(event) {
    tester.style.background = `${event.target.value}`;
    // slider.style.boxShadow = `0px 0px 5px 4px rgba(${hexToRgb(event.target.value)}, .5)`;

    }


    // Event listeners for sliders
    slider.addEventListener('input', function (e) {
        width = e.target.value;
        text.style.fontVariationSettings = `'wdth' ${width}, 'wght' ${weight}`;
    });

    slider2.addEventListener('input', function (e) {
        weight = e.target.value;
        text.style.fontVariationSettings = `'wdth' ${width}, 'wght' ${weight}`;
    });

    const placeholderText = 'try me!';

    text.addEventListener('focus', function () {
        if (text.innerText.trim() === placeholderText) {
            text.innerText = '';
        }
    });

    text.addEventListener('blur', function () {
        if (text.innerText.trim() === '') {
            text.innerText = placeholderText;
        }
    });

    // Set initial check
    if (text.innerText.trim() === '') {
        text.innerText = placeholderText;
    }

    // Function to convert hex color code to RGB
    function hexToRgb(hex) {
        hex = hex.replace(/^#/, '');
        var bigint = parseInt(hex, 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;
        return r + ',' + g + ',' + b;
    }
});
