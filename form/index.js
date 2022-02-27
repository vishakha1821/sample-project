/*
class user{
    static count = 0;
    constructor (username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
        user.count ++;

    }
    numberOfUsers(){
        console.log('total number of users registered' + user.count);
    }
    register(){
        console.log(this.username + 'is now registered');
    }

}
let user1 = new user('Vishakha011', 'vishakha@gmail.com', "34567");

class member extends user{
    constructor(username, email, password, package){
        super(username, email, password);
        this.package = package;
        let newDate = new Date();
        const membershipActivateTillYear = newDate.getFullYear();
        const membershipActivateTillMonth = newDate.getMonth();
        const membershipActivateTillDay = newDate.getDay();
        this.membershipActivateDate = new Date(membershipActivateTillDay, membershipActivateTillMonth, membershipActivateTillYear);

    }
    renewMembership(){
        const membershipActivateTillYear = this.membershipActivateTillYear.getFullYear();
        const membershipActivateTillMonth = this.membershipActivateTillMonth.getMonth();
        const membershipActivateTillDay = this.membershipActivateTillDay.getDay();

        this.membershipActivateDate = new Date(membershipActivateTillDay, membershipActivateTillMonth, membershipActivateTillYear);

    }
     subscription(){
         console.log(this.username + 'is subscribed to' + this.package + 'till' + this.membershipActivateDate);
         
     }
    getPackage(){
        console.log(this.username + 'is subscribed to'+ this.package);
    }
}
let Vishakha = new member('Vishakha011', 'vishakha@gmail.com', '34567', 'premium package');
Vishakha.getPackage();
Vishakha.subscription();*/


const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) =>{
    document.querySelector('#form').getElementsByClassName.background="yellow";

    document.querySelector('body').classList.add('bg-dark');
});

const btn = document.querySelector(".btn");
btn.addEventListener("mpuseover", (e) =>{
    document.querySelector('#form').getElementsByClassName.background="yellow";

    document.querySelector('body').classList.add('bg-dark');
});

const btn = document.querySelector(".btn");
btn.addEventListener("mouseout", (e) =>{
    document.querySelector('#form').getElementsByClassName.background="yellow";

    document.querySelector('body').classList.add('bg-dark');
});

 


 

 