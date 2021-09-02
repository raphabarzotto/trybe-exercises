const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};


// Exercício 1
const addMorningTo2 = (obj, key,  value) => {
  obj[key] = value;
};
addMorningTo2(lesson2, 'turno', 'Manhã');

// Exercício 2
const listKeys = (obj) =>  Object.keys(obj);

// Exercicio 3
const sizeObj = (obj) =>  Object.keys(obj).length;

// Exercício 4
const listValues = (obj) =>  Object.values(obj);

// Exercício 5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
// const allLessons = {lesson1, lesson2, lesson3};
console.log(allLessons);

// Exercício 6
const totalStudents = (obj) => {
  let total = 0;
  const students1 = obj.lesson1.numeroEstudantes;
  const students2 = obj.lesson2.numeroEstudantes;
  const students3 = obj.lesson3.numeroEstudantes;
  total = students1 + students2 + students3;
  return total;
}
console.log(totalStudents(allLessons));

// Exercício 7
const getValueByNumber = (obj,number) => Object.values(obj)[number];
console.log(getValueByNumber(lesson1, 0));

// Exercício 8
const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));

// Exercício Bônus
const createReportMath = (obj, prof) => {
  const objetoReturn = {};
  const students1 = obj.lesson1.numeroEstudantes;
  const students3 = obj.lesson3.numeroEstudantes;
  let total = students1 + students3;
  aulasArr = [obj.lesson1.materia, obj.lesson2.materia]

  objetoReturn.professor = prof;
  objetoReturn.aulas = aulasArr;
  objetoReturn.estudantes = total;

  return objetoReturn;
}
console.log(createReportMath(allLessons, 'Maria Clara'));