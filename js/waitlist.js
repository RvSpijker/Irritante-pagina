var timer = 169,
    el = document.getElementById('countdown');

(function t_minus() {
    'use strict';
    el.innerHTML = timer--;
    if (timer >= 0) {
        setTimeout(function () {
            t_minus();
        }, 1200);
    } else {
    }
}());