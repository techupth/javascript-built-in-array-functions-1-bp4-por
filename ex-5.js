const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  let score = students.map(students => students.score); //create new array from array object 
  //console.log(score);
  let sum = score.reduce((total, score) => total + score, 0); //sum all score

  let average = sum / students.length;

  return average

}

let x = getAverageStudentScore(students);
console.log(x);