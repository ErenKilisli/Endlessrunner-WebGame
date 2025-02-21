document.addEventListener('DOMContentLoaded', function() {
const car = document.querySelector('#car');
let position = 0; // Vertical position of the car
    
    
    Collapse
    function control(e) {
        if (e.code === 'Space') {
            jump();
        }
    }
    
    function jump() {
        // Move up
        let upInterval = setInterval(() => {
            if (position >= 150) {
                // Once the car reaches max height, stop rising
                clearInterval(upInterval);
    
                // Move down
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