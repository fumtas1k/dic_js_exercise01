

let get_achievement = (perfect_point, points) => {
  let sum = points.reduce((prev, current) => prev + current, 0);
  let perfect_sum = perfect_point * points.length;

  if (sum >= perfect_sum * 0.8) {
    return "A";
  } else if (sum >= perfect_sum * 0.6) {
    return "B";
  } else if (sum >= perfect_sum * 0.4) {
    return "C";
  } else {
    return "D";
  }
}

let get_pass_or_failure = (perfect_point, points) => {
  for (let i = 0; i < points.length; i++) {
    if (points[i] > perfect_point * 0.6) {
      return "不合格";
    }
  }
  return "合格";
}

let judgement = (perfect_point, points) => {
  let achievement = get_achievement(perfect_point, points);
  let pass_or_failure = get_pass_or_failure(perfect_point, points);
  return `あなたの成績は${achievement}です。${pass_or_failure}です!`;
}


let points = [50, 60, 80, 75, 60, 85, 60];
let perfect_point = 100;
console.log(judgement(perfect_point, points));
