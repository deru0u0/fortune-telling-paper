'use strict';
{
    let isSwitch = true;
    document.querySelector('#discription_btn').addEventListener('click', function() {
        const switch_display = document.querySelector('.omikuji-image-slider-container');
        if ( isSwitch ) {
            switch_display.classList.add('show-display');
        } else {
            switch_display.classList.remove('show-display');
        }
        isSwitch = !isSwitch;
    },false);
}
