import * as readLine from 'readline-sync';

function main() {
  let answerCount = 0;
  let randomQuiz = randomNum();
  while (true) {
    console.log('중복없이 1~9 중 숫자 세 가지를 고르세요.');
    const input = readLine.question();
    // console.log('input', input);
    const numInput = input.split(' ').map((el) => Number(el));
    const random = `${randomQuiz}`;

    if (String(numInput) !== random) {
      checking(numInput, randomQuiz);
      answerCount += 1;
      console.log(`지금까지 ${answerCount}번 하셨습니다.`);
      console.log();
      console.log();
    } else {
      answerCount += 1;
      console.log(`🤩 ${answerCount}번만에 맞추셨습니다.🤩`);
      console.log('끌게요!');
      console.log();
      console.log();
      break;
    }
  }
}

function checking(arr, randomArr) {
  // 숫자 중복이 있는지 없는지 확인, 1~9 중 숫자 고르기, 숫자는 3개만 고르기
  const baseBallQuiz = randomArr;

  // randomArr이랑 baseBallQuiz랑 비교해줘야함
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 10 && arr[i] >= 1) {
      // 1 ~ 9까지
      const isDupli = new Set(arr).size;

      if (arr.length !== isDupli || arr.length !== 3) {
        console.log(
          '🧐 숫자 중 중복이 있거나 숫자 세 가지를 선택하지 않으셨습니다. 🧐'
        );
        console.log();
        break;
      }

      let ballCount = 0;
      let strikeCount = 0;
      let countExcess = 0;

      for (let el of arr) {
        if (el > 9 || el < 1) {
          countExcess += 1;
        }
      }

      for (let j = 0; j < arr.length; j++) {
        if (arr[j] < 10 && arr[j] >= 1) {
          const howManyBall = baseBallQuiz.includes(arr[j]);

          // baseBallQuiz가 가지고 있는 배열 요소를 arr[j]가 가지고 있고, baseBallQuiz의 j번쨰와 arr[j]번째의 숫자가 같은지 확인

          if (howManyBall && arr[j] === baseBallQuiz[j]) {
            strikeCount += 1;
          } else if (howManyBall) {
            ballCount += 1;
          }
        }
      } // ball checking

      if (strikeCount === 0 && ballCount === 0 && countExcess === 0) {
        console.log('Out!');
        console.log();
        break;
      } else if (strikeCount !== 0 && ballCount === 0 && countExcess === 0) {
        console.log(`⚾ ${strikeCount} Strik! ⚾`);
        console.log();
        break;
      } else if (strikeCount === 0 && ballCount !== 0 && countExcess === 0) {
        console.log(`⚾ ${ballCount} Ball! ⚾`);
        break;
      } else if (countExcess === 0) {
        console.log(`⚾ ${strikeCount} Strik, ${ballCount} Ball! ⚾`);
        console.log();
        break;
      }
    } else {
      // 1 ~ 9 사이 숫자가 아닐때
      console.log(`🧐 1 ~ 9 숫자에서만 골라주세요. 🧐`);
      console.log();
      break;
    }
  }
}

function randomNum() {
  // 랜덤으로 숫자가 중복되지 않게 뽑아내기
  let randomArr = [];

  while (randomArr.length !== 3) {
    let oneNine = Math.ceil(Math.random() * 9);
    if (randomArr.includes(oneNine)) {
      continue;
    } else {
      randomArr.push(oneNine);
    }
  }
  return randomArr;
  // input에 입력하면 랜덤값이 계속 바뀐다. 이 문제는 어떻게...?
  // return [1, 2, 3];
}

// 숫자 중복 X -> (o)
// 숫자 세 가지 미만이나 초과 됐을 때 3개만 쓰라고 하기 -> (o)
// 1 ~ 9 중에서만 숫자 고르기 -> (o)
main();
