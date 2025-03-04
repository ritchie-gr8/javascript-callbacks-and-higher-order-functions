//Exercise #2: At Least Five Function

const hasScoreMoreThan70 = (score) => score > 70

function createAtLeastFive() {
  let roomCnt = 0;

  return function atLeastFiveInner(array, operation) {
    roomCnt++;

    const isPassCnt = array.filter(operation).length;
    const result = isPassCnt >= 5 ? 'ผ่านเกณฑ์ ✅' : 'ไม่ผ่านเกณฑ์ ❌';

    return `นักเรียนห้องที่ ${roomCnt} ${result}`;
  };
}

const atLeastFive = createAtLeastFive()

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here
let scoreRoom1Result = atLeastFive(studentScoresRoom1, hasScoreMoreThan70);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, hasScoreMoreThan70);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, hasScoreMoreThan70);

console.log(scoreRoom1Result)
console.log(scoreRoom2Result)
console.log(scoreRoom3Result)