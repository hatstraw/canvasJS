window.onload =  () => {
    console.log("All loaded");

    let playerState = 'run';
    let options = document.querySelector('#animations');

    options.addEventListener('change', e => {
        playerState = e.target.value;
        console.log(e.target.value);
    });

    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');

    const CANVAS_WIDTH = canvas.width = 600;
    const CANVAS_HEIGHT = canvas.height = 600;

    const playerImage = new Image();
    // sprite sheet - 6876px width X 5230px height
    // each sprite is divided in 12 columns and 10 rows
    playerImage.src = './shadow_dog.png';
    const SPRITE_WIDTH = (6876 / 12);  
    const SPRITE_HEIGHT = (5230 / 10); 

    let gameFrame = 0;
    let staggerFrame = 5;
   

    const animationsStates = [
        {
            name : 'idle',
            frame : 7,
        },
        {   
            name : 'jump',
            frame : 7,

        },
        {   
            name : 'fall',
            frame : 7,

        },
        {   
            name : 'run',
            frame : 9,

        },
        {   
            name : 'dizzy',
            frame : 11,

        },
        {   
            name : 'sit',
            frame : 5,

        },
        {   
            name : 'roll',
            frame : 7,

        },
        {   
            name : 'bite',
            frame : 7,

        },
        {   
            name : 'ko',
            frame : 12,

        },
        {   
            name : 'getHit',
            frame : 4,

        }
    ];
    const spriteAnimations = [];

    animationsStates.forEach( (state, index) => {
        let frame = {
            loc : [],
        }

        for(let i = 0; i < state.frame; i++){
            let positionX = i * SPRITE_WIDTH;
            let positionY = index * SPRITE_HEIGHT;
            frame.loc.push({x : positionX, y : positionY})
        }

        spriteAnimations[state.name] = frame;
    });

    console.log(spriteAnimations);


    function animate(){
        
        ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
        let position = Math.floor(gameFrame / staggerFrame) % (spriteAnimations[playerState].loc.length - 1);

        let x = spriteAnimations[playerState].loc[position].x;
        let y = spriteAnimations[playerState].loc[position].y;

        ctx.drawImage(playerImage, x, y,SPRITE_WIDTH, SPRITE_HEIGHT,0,0, SPRITE_WIDTH, SPRITE_HEIGHT);
        
        gameFrame++;
        requestAnimationFrame(animate);
    }

    animate();


};