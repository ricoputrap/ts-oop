
// Encapsulation
class Person {
  private name: string = '';
  age: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  public getName() {
    return this.name;
  }
}

class Motor {
  make: string = '';
  model: string = '';
  color: string = '';
}

const person = new Person("Rico");
const motor = new Motor();

// warning: Property 'age' does not exist on type 'Motor'.ts(2339)
// motor.age;

const personName: string = person.getName();
console.log(personName)


// Inheritance
type Department = {
  name: string;
}
type Employee = {
  name: string;
  age: number;
}

class TeslaCompany {
  private static role: string = "Admin";
  private readonly credentials: string = '';
  private departments: Department[] = [];
  private employees: Employee[] = [];

  constructor(cred: string) {
    this.credentials = cred;
  }

  addDepartment(newDept: Department) {
    this.departments = [...this.departments, newDept];
  }

  addEmployee(newEmp: Employee) {
    this.employees = [...this.employees, newEmp];
  }

  getEmployees() {
    return this.employees;
  }
}

class TeslaEmployee extends TeslaCompany {
  private new_employee: Employee = { name: "", age: 0 };

  public setName(name: string) {
    this.new_employee.name = name;
  }

  public setAge(age: number) {
    this.new_employee.age = age;
  }

  public getSelf() {
    return this.new_employee;
  }
}

const newTeslaEmp = new TeslaEmployee('1234');
newTeslaEmp.setName("Rico");
newTeslaEmp.setAge(24);

const newTeslaEmpObject = newTeslaEmp.getSelf();

newTeslaEmp.addEmployee(newTeslaEmpObject);

const employees = newTeslaEmp.getEmployees();
console.log(employees)

// Polymorphism
class Animal {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public setName(name: string) {
    this.name = name;
  }
  public getName() {
    return this.name;
  }
  
  public makeNoise(): string {
    return "";
  }
}

class Cat extends Animal {
  public makeNoise(): string {
    return "Meoww...";
  }
}

class Dog extends Animal {
  public makeNoise(): string {
    return "Guk guk guk...!"
  }
}

const cat = new Cat("Cimoy");
const dog = new Dog("Blacky");

console.log(cat.makeNoise());
console.log(dog.makeNoise())