window.onload = () => {
    /** @type {HTMLCanvasElement} */ 

    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    
    const CANVAS_WIDTH = canvas.width = 800;
    const CANVAS_HEIGHT = canvas.height = 700;

    let gameSpeed =  5; 

    const slider = document.querySelector(".slider");
    slider.value = gameSpeed;
    const showGameSpeed = document.querySelector("#showGameSpeed");
    showGameSpeed.innerText = gameSpeed;
    slider.addEventListener('change', e => {
        gameSpeed = e.target.value;
        showGameSpeed.innerText = gameSpeed;
    });

    const BgLayer1 = new Image();
    BgLayer1.src = "./layers/layer-1.png";
    const BgLayer2 = new Image();
    BgLayer2.src = "./layers/layer-2.png";
    const BgLayer3 = new Image();
    BgLayer3.src = "./layers/layer-3.png";
    const BgLayer4 = new Image();
    BgLayer4.src = "./layers/layer-4.png";
    const BgLayer5 = new Image();
    BgLayer5.src = "./layers/layer-5.png";

    class Layer {
        constructor(image, speedmodifier){
            this.x = 0;
            this.y = 0;
            this.width = 2400;
            this.height = 700;
            this.image = image;
            this.speedmodifier = speedmodifier;
            this.speed = gameSpeed * this.speedmodifier;
        }

        update(){
            this.speed = gameSpeed * this.speedmodifier;
            if(this.x <= -this.width){
                this.x = 0;
            }
            this.x = this.x - this.speed;
            
        }
        draw(){
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
            ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
        }
    }

    const layer1 = new Layer(BgLayer1, 0.2);
    const layer2 = new Layer(BgLayer2, 0.4);
    const layer3 = new Layer(BgLayer3, 0.6);
    const layer4 = new Layer(BgLayer4, 0.8);
    const layer5 = new Layer(BgLayer5, 1);

    const gameObject = [layer1, layer2, layer3, layer4, layer5];

    function animate(){
        ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
        gameObject.forEach(obj => {
            obj.update();
            obj.draw();
        });
        requestAnimationFrame(animate);
    }

    animate();
};