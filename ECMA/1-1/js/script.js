console.log("Task 1");
console.log("-----------------------------");
const getName = (nachname = "Wick", ...vornamen) =>
  `${vornamen.join(" ")} ${nachname}`;
console.log(getName("Weibel", "Gabriel", "Fritz"));
console.log("");

console.log("Task 2");
console.log("-----------------------------");
class Student {
  marks = new Set();
  constructor(number, pFirstname, pLastname, ...pMarks) {
    this.number = number;
    this.firstName = pFirstname;
    this.lastname = pLastname;
    this.marks = pMarks;
  }

  getName() {
    return `${this.firstName} ${this.lastname}`;
  }

  getAvg() {
    const iterator = this.marks.values();
    let mark = iterator.next();
    let sum = 0;
    while (mark.done == false) {
      sum += mark.value;
      mark = iterator.next();
    }
    return sum / this.marks.length;
  }

  addMark(mark) {
    this.marks.add(mark);
  }
}

const tony = new Student(1, "Tony", "Stark", 5.5, 4.9, 3.5);
const peter = new Student(2, "Peter", "Parker", 4.0, 4.6, 5.2);
console.log(tony.getName() + " " + tony.getAvg());
console.log(peter.getName() + " " + peter.getAvg());

console.log("");
console.log("Task 2");
console.log("-----------------------------");
class SchoolClass {
  students = new Map();
  constructor(name) {
    this.name = name;
  }
  addStudent(student) {
    this.students.set(student.number, student);
  }
  printNames() {
    this.students.forEach((s) => console.log(s.getName()));
  }
}
const itb = new SchoolClass("IT-B");
itb.addStudent(tony);
itb.addStudent(peter);
itb.printNames();
