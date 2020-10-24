class Hero{
    constructor(name, power) {
        this.name = name;
        this.power = power;
    }
    goForGrocery() { //class er vitor function k method bole
        if (this.power) {
            console.log(this.goForGrocery())
        }
        return 'Price is too high, i cant buy';


        // if (this.power) {
        //     return this.power;
        // }
        // return 'i have no power';
    }
}

const catMan = new Hero('catMan');
console.log(catMan.power);
console.log(catMan.goForGrocery());
