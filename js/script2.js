class Cars {

    constructor(model, year, power, color){
        this.model = model;
        this.year = year;
        this.power = power + "KW"; 
        this.color = color;
    }

    showInfo(){
         document.write(`
        Model: ${this.model} <br>
        Year : ${this.year} <br>
        Power: ${this.power} <br> 
        Color: ${this.color} <br> 
        `)
    }
}


class Electrocars extends Cars {
    constructor (model, year, power, color, battery){
        super(model, year, power, color);
        this.battery = battery;
    }  


showInfo() {
    super.showInfo();
    document.write( `Battery: ${this.battery} <br>`);
}

promote(){
    document.write(`
    Buy this ${this.model} and save the planet!!!`);   
}

}


const toyota = new Cars ('toyota', 2005, 75, 'grey');
toyota.showInfo();


const electroCar= new Electrocars ('Electro Car', 2022, 150,  'green', 3000);
electroCar.showInfo();
electroCar.promote();