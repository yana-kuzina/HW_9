class Employee {
  static dayOffs = 18;
  constructor(firstName, lastName, age, jobPosition, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.jobPosition = jobPosition;
    this.salary = salary;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  getYearSalary() {
    return this.salary * 12;
  }
}

const employee1 = new Employee("Mark", "Kuzin", 23, "Baker", 300);
const employee2 = new Employee("Anastasiia", "Shulim", 11, "Student", 10);
console.log(employee1);
console.log(employee2);
console.log(employee1.getYearSalary());
console.log(employee2.getYearSalary());
