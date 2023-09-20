import { students } from "./mockStudents.js";

const orderedStudents = students.sort();

const uniqueStudents = new Set();
console.log(orderedStudents);

for (let i = 0; i < orderedStudents.length; i++) {
  uniqueStudents.add(orderedStudents[i].user_name);
}

console.log("UNIQUE", uniqueStudents);
