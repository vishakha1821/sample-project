//CALL : 

let obj1 = {

    name : "Vishakha",

}

let printName = function(){

    console.log(this.name);

}

printName.call(obj);

//APPLY:



let obj2 = {

    fistName : "Raj",

    lstName : "Rai",

}

let printDeatils1 = function(age, occupation){

    console.log(this.fistName + " " + this.lstName + " " + age + "years old" + " "+ "occupied as an" +" "+ occupation);

}

printDeatils1.apply(obj, ["25", "engineer"]);

//BIND:

let obj3 = {

    fistName : "Raj",

    lstName : "Rai",

}

let printDeatils2 = function(age, occupation){

    console.log(this.fistName + " " + this.lstName + " " + age + "years old" + " "+ "occupied as an" +" "+ occupation);

}

 let printAllDetails = printDeatils2.bind(obj, "25", "engineer");

 console.log(printAllDetails);

 printAllDetails(); 