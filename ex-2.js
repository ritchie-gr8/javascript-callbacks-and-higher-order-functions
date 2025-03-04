//Exercise #2: At Least Five Function

function atLeastFive(array, operation, classroomNumber) {
  // Start coding here
  let pass = 0;
  for (let score of array) {
    if (score > 70) {
      pass++;
    }
  }
  return operation(pass, classroomNumber);
}

function checkPass(pass, classroomNumber) {
  if (pass >= 5) {
    return `นักเรียนห้องที่ ${classroomNumber} ผ่านเกณฑ์✅`;
  } else {
    return `นักเรียนห้องที่ ${classroomNumber} ไม่ผ่านเกณฑ์ ❌`;
  }
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, checkPass, 1);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, checkPass, 2);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, checkPass, 3);

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
