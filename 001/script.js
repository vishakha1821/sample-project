//'this' inside global scope
//'this' inside object
//'this' inside a method
//'this' inside a function 
// 'this' inside an inner function 

this.table = 'window table';

this.garage = {
    table: 'garage table',
    cleanTable() {
        console.log(`cleaning ${this.table}`)
    }
};

const cleanTable = function(){
    let that = this;
    console.log(`cleaning ${this.table}`);
    const innerFunction = function(){
        console.log(`cleaning ${that.table}`)
    }
};

let vishakhaRoom = {
    table : "vishakha table",
    cleanTable(){
        console.log(`cleaning ${this.table}`)
    }
};

console.log(vishakhaRoom.table);
vishakhaRoom.cleanTable();
this.garage.cleanTable();


// dsign pattern problem 
class student { 
    static count = 0;
    constructor(name, age, phone, marks){
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.marks = marks;
    }
    static countStudent(){
        return(student.count++);
    }
    eligibilty(){
          let eligibleMarks = 40;
          if(this.marks>=eligibleMarks){
              console.log("the student is eligible");
          }
          else {
              console.log("student is not eligible");
          }
    }
}
const student1 = new student("Riya", "20", "987654348", "67");
const student2 = new student("Saurabh", "20", "987654348", "89");
const student3 = new student("priyanshu", "21", "897xxx5679", "20");
const student4 = new student("Rakhi", "21", "987654348", "50");
const student5 = new student("Sejal", "20", "86839xx32", "90");
student1.eligibility();
student2.eligibility();
student3.eligibility();
student4.eligibility();
student5.eligibility();

