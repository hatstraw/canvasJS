window.onload = () => {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    
    const CANVAS_WIDTH = canvas.width = 800;
    const CANVAS_HEIGHT = canvas.height = 700;

    let gameSpeed =  15; 

    const bgLayer1 = new Image();
    bgLayer1.src = './layers/layer-1.png'
    const bgLayer2 = new Image();
    bgLayer2.src = './layers/layer-2.png'
    const bgLayer3 = new Image();
    bgLayer3.src = './layers/layer-3.png'
    const bgLayer4 = new Image();
    bgLayer4.src = './layers/layer-4.png'
    const bgLayer5 = new Image();
    bgLayer5.src = './layers/layer-5.png'

    let x = 0;
    let x2 = 2400;

    function animate(){
        ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
        ctx.drawImage(bgLayer4, x,0);
        ctx.drawImage(bgLayer4, x2,0);
        if (x < -2400) x = 2400 + x2 - gameSpeed;
        else if(x2 < -2400) x2 = 2400 + x - gameSpeed;
        else {
            x -= gameSpeed;
            x2 -= gameSpeed;
        }
        requestAnimationFrame(animate);
    }

    animate();
};