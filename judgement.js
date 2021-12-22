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
  let result = "合格";
  [x, y, z].some (i => {
    if (i < 60) {
      result = "不合格";
      return true;
    }
  })
  return result;
}

let judgement = (x, y, z) => {
  let achievement = get_achievement(x, y, z);
  let pass_of_failure = get_pass_or_failure(x, y, z);
  return `あなたの成績は${achievement}です。${pass_of_failure}です!`;
}

const japanease = 40;
const math = 100;
const science = 80;

console.log(judgement(japanease, math, science));