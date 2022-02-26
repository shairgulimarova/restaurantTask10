class Restaurant {
    name;
    cusineType;
    served = 0
    
    constructor(name, cusineType){
        this.name = name;
        this.cusineType = cusineType; 
    }

    showInfo(){
        return `${this.name} is a restaurant of ${this.cusineType} meal.`;
    }


    isOpen(){
        let currentHour = new Date ().getHours();
        
        if (currentHour > 9 && currentHour < 22){
            return `${this.name} is open`;
        } else {
            return `${this.name} is closed`;
        }
    }

    serve(){
        return this.served++;
    }

    setServed(numberOfServed){
        return this.served += numberOfServed
    }

    showTotalServed (){
       return `Total served: ${this.served} <br>`
    }
}

const beshBarmak = new Restaurant("Besh Barmak", "kyrgyz"); 


console.log (beshBarmak.showInfo()); 
console.log(beshBarmak.isOpen());
console.log(beshBarmak.serve());
console.log(beshBarmak.showTotalServed());
console.log(beshBarmak.setServed(25));
console.log(beshBarmak.showTotalServed()); 
