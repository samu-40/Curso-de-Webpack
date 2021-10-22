export default class Slider{
    constructor ( { elements, animationFunc, speed } ) {
        this.elements = elements;
        this.animationFunc = animationFunc;
        this.speed = speed;

        this.index = 0;
        this.size = elements.length;
    }

    innerNext(){
        this.index++;
        if(this.index >= this.size) this.index = 0;
        
        this.animationFunc(this.elements[this.index]);
    }
    
    innerPrev(){
        this.index--;
        if(this.index < 0) this.index = this.size - 1;
        
        this.animationFunc(this.elements[this.index]);
    }

    play(){
        this.interval = setInterval(() => this.innerNext(), this.speed);
    }
    
    stop(){
        clearInterval(this.interval);
    }

    next(){
        if (this.interval){
            this.stop();
            this.play();
        }
        this.innerNext();
    }

    prev(){
        if (this.interval){
            this.stop();
            this.play();
        }
        this.innerPrev();
    }
};
