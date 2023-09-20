import { faker } from "@faker-js/faker";

let students = [];

function getRandomInt(max, min = 1) {
  return Math.floor(Math.random() * max + min);
}

for (let i = 0; i < 100; i++) {
  const randomPerson = {
    ticket_id: faker.number.int(),
    solved_date: faker.date.birthdate(),
    user_name: faker.person.fullName(),
  };
  students.push(randomPerson);

  const randomizedTicket = getRandomInt(5);
  if (randomizedTicket <= 2) {
    students.push(randomPerson);
  }
}

export { students };
