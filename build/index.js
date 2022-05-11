"use strict";
// Encapsulation
class Person {
    constructor(name) {
        this.name = '';
        this.age = 0;
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Motor {
    constructor() {
        this.make = '';
        this.model = '';
        this.color = '';
    }
}
const person = new Person("Rico");
const motor = new Motor();
// warning: Property 'age' does not exist on type 'Motor'.ts(2339)
// motor.age;
const personName = person.getName();
console.log(personName);
class TeslaCompany {
    constructor(cred) {
        this.credentials = '';
        this.departments = [];
        this.employees = [];
        this.credentials = cred;
    }
    addDepartment(newDept) {
        this.departments = [...this.departments, newDept];
    }
    addEmployee(newEmp) {
        this.employees = [...this.employees, newEmp];
    }
    getEmployees() {
        return this.employees;
    }
}
TeslaCompany.role = "Admin";
class TeslaEmployee extends TeslaCompany {
    constructor() {
        super(...arguments);
        this.new_employee = { name: "", age: 0 };
    }
    setName(name) {
        this.new_employee.name = name;
    }
    setAge(age) {
        this.new_employee.age = age;
    }
    getSelf() {
        return this.new_employee;
    }
}
const newTeslaEmp = new TeslaEmployee('1234');
newTeslaEmp.setName("Rico");
newTeslaEmp.setAge(24);
const newTeslaEmpObject = newTeslaEmp.getSelf();
newTeslaEmp.addEmployee(newTeslaEmpObject);
const employees = newTeslaEmp.getEmployees();
console.log(employees);
// Polymorphism
class Animal {
    constructor(name) {
        this.name = name;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    makeNoise() {
        return "";
    }
}
class Cat extends Animal {
    makeNoise() {
        return "Meoww...";
    }
}
class Dog extends Animal {
    makeNoise() {
        return "Guk guk guk...!";
    }
}
const cat = new Cat("Cimoy");
const dog = new Dog("Blacky");
console.log(cat.makeNoise());
console.log(dog.makeNoise());
