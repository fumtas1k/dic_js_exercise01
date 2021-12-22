let get_achievement = (x, y, z) => {
 let sum = x + y + z;
  // if (sum >= 250) {
  //   return = "A";
  // } else if (sum >= 200) {
  //   return = "B";
  // } else if (sum >= 100) {
  //   return = "C";
  // } else {
  //   return = "D";
  // }

  switch (true) {
    case sum >= 250:
      return "A";
    case sum >= 200:
      return "B";
    case sum >= 100:
      return "C";
    default:
      return "D";
  }
}

let get_pass_or_failure = (x, y, z) => {
  let judge = "合格";
  [x, y, z].some (i => {
    if (i < 60) {
      judge = "不合格";
      return true;
    }
  })
  return judge;
}

let result = (score, judge) => {
  return `あなたの成績は${score}です。${judge}です!`;
}

const japanease = 40;
const math = 100;
const science = 80;
let score = get_achievement(japanease, math, science);
let judge = get_pass_or_failure(japanease, math, science);

console.log(result(score, judge));