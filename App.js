import * as readLine from 'readline-sync';

function main() {
  while (true) {
    console.log('중복없이 1~9 중 숫자 세 가지를 고르세요.');
    const input = readLine.question();
    console.log('input', input);
    const spl = input.split(' ');
    checking(spl);
  }
}

function checking(arr) {
  // 숫자 중복이 있는지 없는지 확인, 1~9 중 숫자 고르기, 숫자는 3개만 고르기
  const newArr = arr.map((el) => Number(el));
  const baseBallQuiz = randomNum();
  console.log(baseBallQuiz);
  console.log();

  // newArr이랑 baseBallQuiz랑 비교해줘야함

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] < 10 && newArr[i] >= 1) {
      // 1 ~ 9까지
      const isDupli = new Set(newArr).size;

      if (newArr.length !== isDupli || newArr.length !== 3) {
        console.log(
          '숫자 중 중복이 있거나 숫자 세 가지를 선택하지 않으셨습니다.'
        );
        console.log();
        break;
      }
    } else {
      // 1 ~ 9 사이 숫자가 아닐때
      console.log('1 ~ 9 중에서 숫자를 골라주세요.');
      console.log();
      break;
    }
  }

  let ballCount = 0;
  let strikeCount = 0;

  for (let j = 0; j < newArr.length; j++) {
    if (newArr[j] < 10 && newArr[j] >= 1) {
      const howManyBall = baseBallQuiz.includes(newArr[j]);

      // baseBallQuiz가 가지고 있는 배열 요소를 newArr[j]가 가지고 있고, baseBallQuiz의 j번쨰와 newArr[j]번째의 숫자가 같은지 확인

      if (howManyBall && newArr[j] === baseBallQuiz[j]) {
        strikeCount += 1;
      } else if (howManyBall) {
        ballCount += 1;
      }

      // if (howManyBall) {
      //   ballCount += 1;
      //   console.log(`${ballCount} ball`);
      // }
    } else {
      break;
    }
  } // ball checking

  if (strikeCount === 0 && ballCount === 0) {
    console.log('Out!');
  } else if (strikeCount !== 0 && ballCount === 0) {
    console.log(`${strikeCount} Strik!`);
  } else if (strikeCount === 0 && ballCount !== 0) {
    console.log(`${ballCount} Ball!`);
  } else {
    console.log(`${strikeCount} Strik!`);
    console.log(`${ballCount} Ball!`);
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
}

// 숫자 중복 X -> (o)
// 숫자 세 가지 미만이나 초과 됐을 때 3개만 쓰라고 하기 -> (o)
// 1 ~ 9 중에서만 숫자 고르기 -> (o)
main();
