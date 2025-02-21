document.addEventListener('DOMContentLoaded', function() {
const car = document.querySelector('#car');
let position = 0;
let gravity = 0.7;

    function control(e) {
        if (e.code === 'Space') {
            jump();
        }
    }
    
    function jump() {
        let upInterval = setInterval(() => {
            if (position >= 150) {

                clearInterval(upInterval);
    
                let downInterval = setInterval(() => {
                    if (position <= 0) {
                        clearInterval(downInterval);
                    }
                    position -= 5;
                    car.style.bottom = position + 'px';
                }, 20);
            } else {
                position += 5;
                car.style.bottom = position + 'px';
            }
        }, 20);
    }
    
    document.addEventListener('keydown', control);
});