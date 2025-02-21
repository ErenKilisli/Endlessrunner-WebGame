document.addEventListener('DOMContentLoaded', function() {
    const car = document.querySelector('#car');
    const grid = document.querySelector('#grid');
    let position = 0;      
    let isJumping = false; 
    
    function control(e) {
        if (e.code === "Space" && !isJumping) {
            jump();
        }
    }
    
    function jump() {
        isJumping = true;
    

        let upInterval = setInterval(() => {

            if (position >= 150) {
                clearInterval(upInterval);
                

                let downInterval = setInterval(() => {
                    if (position <= 0) {
                        clearInterval(downInterval);
                        isJumping = false; 
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