//! 자바스크립트의 내장 객체(Built-in Objects)

// 자바스크립트 내장 객체
// : 특정 작업을 수행하거나, 복잡한 기능을 쉽게 구현할 수 있도록 도와주는 메서드와 속성을 제공

//# 1. Number 객체의 기본 메서드
// : 수치형 데이터를 처리하는 메소드를 제공

//& 1) 숫자데이터.toFixed(N)
// : 숫자 N번째 자릿수까지 출력
// : 소수점 이하 몇 자리까지만 출력하고 싶을 때 사용
// : 해당 소수점 이하는 '반올림'

let num = 123.456782;
console.log(num.toFixed(3)); // 123.457
console.log(num.toFixed(5)); // 123.45678

//& 2) Number.isNaN(데이터), Number.isFinite(데이터)
// : 각각 NaN과 Infinity인지 확인

// NaN: Not a Number

// - 숫자 자료 뒤에 온점을 찍고 사용 X
// - Number 키워드 뒤에 점을 찍고 사용 O

console.log('가' === NaN); // false
// : NaN과 비교 연산자를 사용하여 비교할 경우 - 모든 값이 false로 반환

let notNum = Number('숫자로 변환할 수 없는 값');
console.log(notNum); // NaN
console.log(notNum === NaN); // false
console.log(Number.isNaN(notNum)); // true
// notNum.isNaN() 이렇게 사용하지 X

// : Infinity(무한)
// : 무한의 숫자값은 양수와 음수로 나뉨
// 숫자를 0으로 나눌 경우 무한대의 숫자를 생성

//& isFinite()
// : 해당 값이 유한한 숫자인지를 확인

// +) 자바스크립트의 경우 양수 또는 음수를 0으로 나누는 경우
//  : 각각의 무한대의 수가 생성
console.log(10 / 0);
let infinityNum = 10 / 0; // Infinity(양의 무한대)

console.log(-10 / 0);
let negativeInfinityNum = -10 / 0; // -Infinity(음의 무한대)

// 유한한 숫자가 아니기 때문에 각각의 값이 false로 반환
// : inFinity - 무한대
console.log(Number.isFinite(infinityNum)); // false
console.log(Number.isFinite(negativeInfinityNum)); // false

console.log(Number.isFinite(1)); // true
console.log(Number.isFinite(-1)); // true

// >> 무한대의 값은 NaN과 다르게 비교 연산자로 비교가 가능
console.log(infinityNum === Infinity && negativeInfinityNum === -Infinity); // true

//# 2. String 객체의 기본 메서드
// : 문자열을 처리하는 메서드를 제공
// : 일반적으로 데이터 자체에서 사용

//& 1) trim()
// : 문자열 양쪽 끝의 공백(띄어쓰기, 줄바꿈 등)을 없애는 메서드

// '     안녕하세요     '
// : '안녕하세요' 

let stringA = `

  안녕하세요
  만나서
  반갑습니다 :)

`;
let stringB = '  앞과 뒤에 공백을 넣습니다.  ';

console.log(stringA);
console.log(stringB);

console.log(stringA.trim()); // 문자열 내부의 공백은 제거하지 X
console.log(stringB.trim());

// 사용자와의 상호작용(input 등을 사용)
// : 불필요한 공백을 제거
// : 기본적으로 사용자의 입력을 받는 란에는 trim으로 공백을 제거하는 것이 효율적(권장 사항)

//& 2) split()
// : 문자열을 특정 기호(구분)로 자르는 메서드
// : 매개변수(다른 문자열)로 잘라서 배열을 만든 후 리턴하는 메서드

let manyData = `
  일자,달러,유로
  02,11.41,123
  03,12.67,456
  04,52.22,789
`;

console.log(manyData);

// 앞뒤 공백을 제거
manyData = manyData.trim();

// 줄바꿈으로 자르기(줄바꿈은 기호로: \n)
manyData = manyData.split('\n');
// >> 한 줄씩 배열의 요소로 저장 - 1차원 배열

// split()메서드로 반환되는 데이터는 배열로 생성되어 반환
console.log(manyData);

// 배열 내부의 문자열들을 쉼표로 자르기
// : 배열의 각 요소를 반복하여 split()메서드로 나누어
// : '새로운 배열'로 반환
manyData = manyData.map(line => {
  let data = line.trim();
  data = data.split(','); // 배열로 반환 - 2차원 배열

  return data;
});

console.log(manyData);

//& 3) length
// : 문자열 길이를 반환
// : 공백(띄어쓰기, 줄바꿈도 한 개의 문자열로 인식)
let stringC = ' hello, JS ';
console.log(stringC.length); // String 객체의 속성 - () 작성 X

//& 4) toUpperCase(), toLowerCase()
// : 모든 문자를 대문자 | 소문자로 변환

console.log(stringC.toUpperCase());
console.log(stringC.toLowerCase());