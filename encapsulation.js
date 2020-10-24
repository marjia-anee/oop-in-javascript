//private property

class Tiger{
    #speed = 100; //private
    location = 'Sundarban';
    constructor(name){
        this.name = name;
    }
    run(){
        console.log(`I am ${this.name}. I am running at ${this.#speed}mph. I live in ${this.location}`)

    }
}

const royal = new Tiger('Royal Bengal');
royal.name = 'Pormanobik Bengal';
royal.location = 'Barisal'; // speed k baire theke change kora jabe na class er vitore kora jabe. private property
// console.log(royal.#speed);
royal.run();