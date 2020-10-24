class PenDrive { // class nameupper case diye start hobe
    constructor(capacity, color, price) {
        this.capacity = capacity; //property name likhar age this likhte hbe
        this. color = color;
        this. price = price;
    }
}

const ignite = new PenDrive('36GB', 'white', '1300');
console.log(ignite);
const oakWood = new PenDrive('4GB', 'black');

console.log(oakWood);


function StickyNote(color,price) {
    this.color = color;
    this.price = price;
}
const yellow = new StickyNote ('yellow', '50');
console.log(yellow);