// task 1

class Person{
    constructor(firstName, secondName, age){
        this.firstName =  firstName;
        this.secondName = secondName;
        this.age = age;
    }

    static greetPerson(){
        console.log("Hey, this is a static method to greet");
    }


    greet(){
        console.log(`Hello,${this.firstName}`);
    }

    get fullName(){
        return `Full name : ${this.firstName} ${this.secondName}`
    }
    
    set fullName(name){
        const [firstName, secondName] = name.split(" ")
        
        this.firstName = firstName
        this.secondName = secondName
    }

// task 2

    update_age(new_age){
        this.age = new_age
    }
}

const person1 = new Person("Peter","Parker" ,"28")
console.log(person1);
person1.greet()
person1.update_age("22")
console.log(person1);


// task 3

class Student extends Person{
    constructor(name, age,studentId ){
        super(name, age)
        this.studentId = studentId
        Student.studentCount++
    }

// task 4

    static studentCount = 0

    static getCount(){
        return Student.studentCount
    }

    greet(){
        console.log(`Hello ${this.name}, your student id is ${this.studentId}`);
    }

    id(){
        return this.studentId
    }
}

const student1 = new Student("Clark", "21", "uni@123")

const student2 = new Student("Riya", "20", "uni@456")

const student3 = new Student("Harshita", "20", "uni@987")

console.log(student1);
console.log(student1.id());
student1.greet()


// task 5


Person.greetPerson()


// task 6

console.log(`Total students: ${Student.getCount()}`);


// task 7 Getters and setters

const person2 = new Person("Scarlett", "Witch", "30")

console.log(person2.fullName);


// task 8

person2.fullName = "Elon Musk"
console.log(person2.fullName);


// task 9 Private fields

class Account{
    #balance

    constructor(balance){
        this.#balance = balance
    }

    getBalance(){
        console.log(`Your account balance is ${this.#balance}`);
    }

    deposit(amount){
        this.#balance += amount
        
        return `You deposited ${amount} rupees. Total balance: ${this.#balance}`
    }

    withdraw(amount){
        if(this.#balance < amount){
            console.log("Your balance is less than the amount");
        }else{
            this.#balance -= amount
            console.log(`Amount withdrawn: ${amount} , Remaining balance: ${this.#balance} ` );
        }
    }
}

const Rohit = new Account(10000)

Rohit.getBalance()
console.log(Rohit.deposit(2000))

Rohit.withdraw(1000)
