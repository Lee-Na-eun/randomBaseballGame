import * as readLine from 'readline-sync';

function main() {
  console.log('중복없이 1~9 중 숫자 세 가지를 고르세요.');
  const input = readLine.question();
  const spl = input.split(' ');
  checking(spl);
}

function checking(arr) {
  // 숫자 중복이 있는지 없는지 확인, 1~9 중 숫자 고르기, 숫자는 3개만 고르기
  const newArr = arr.map((el) => Number(el));

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] >= 10 || newArr[i] < 1) {
      console.log('1 ~ 9 중에서 숫자를 골라주세요.');
      break;
    } else {
      const isDupli = new Set(newArr).size;

      if (newArr.length !== isDupli || newArr.length !== 3) {
        console.log(
          '숫자 중 중복이 있거나 숫자 세 가지를 선택하지 않으셨습니다.'
        );
        break;
      } else {
        console.log(randomNum());
        break;
      }
    }
  }
}

function randomNum() {
  // f랜덤으로 숫자가 중복되지 않게 뽑아내기
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
