class SmartDevice{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    charging(){
        console.log("I am eating electrons..they are yummy")
    }
}

class Phone extends SmartDevice{
    constructor(name, price, camera){
        // this.name = name;
        // this.price = price;
        super(name, price);
        this.camera = camera;
    }
    // charging(){
    //     console.log("I am eating electrons..they are yummy")
    // }
}

class Watch extends SmartDevice {
    constructor(name, price, distance) {
       
        super(name, price)
        this.distance = distance;
    }
}

class Tablet extends SmartDevice{
    constructor(name, price, isWifi) {
        super(name, price)
        this.isWifi = isWifi;
    }
    sendSMS(){
        console.log("I am sending SMS")
    }
}

const samsu = new Phone('Samsung', 60000, '12GB')
console.log(samsu);
samsu.charging()

const ipad = new Tablet('Apple', 50000, true)
ipad.sendSMS()