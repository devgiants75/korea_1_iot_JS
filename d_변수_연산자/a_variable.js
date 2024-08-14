/*
  ! 변수(variable)
    : 변하는 수(값이 달라질 수 있는 데이터)
    : 예) 나이, 연도 등

    : 데이터를 저장하기 위한 '공간'
    : 프로그래밍에서 데이터를 사용하기 위해 생성하는 그릇
    : >> 해당 그릇에 이름(변수명)

  ! 변수 선언
    : 변수를 사용하기 위해 변수를 다른 변수들과 구별하기 위해 이름을 붙여 주는 것
    , 값을 저장할 컴퓨터 메모리 공간에 이름을 붙이는 것

  ! 변수명 명명규칙
    - 첫 글자: 영문자, 언더스코어, 달러만 사용 가능
      (이후 숫자 사용 가능)
    - 띄어쓰기 허용 X
    - 기호는 _, $만 사용 가능
    - 영어 대소문자 구별
      now변수와 nOW변수는 다른 변수
    - 예약어 사용 X

    ? lowerCamelCase 사용
      : 시작은 소문자로 시작
      : 이어지는 단어의 시작은 대문자로 시작
      (lower - 소문자, upper - 대문자)

    (O) now, _now, now25, now$25
    (X) 25now, now 25, *now

    ? 이름을 의미있게 작성
    pw >> 'password'

    올해 연도: currentYear
    태어난 연도: birthYear

    나이 변수 age
    age = currentYear - birthYear;

  ! 자바스크립트의 변수 선언
    : 2가지 키워드 (var, let)

    ^ 선언과 초기화
    변수종류 변수명; // 변수 선언 (그릇 생성)
    변수명 = 값; // 변수에 값을 할당 (그릇에 데이터를 삽입)
    
    변수종류 변수명 = 값; // 선언과 동시에 할당(초기화)
    
    ? let
      : 블록 범위(스코프) 변수(Block Scope)
      : 재할당 가능
      : 호이스팅O (하지만, 선언 전에 접근 불가 - 초기화되지 않은 상태에서 접근하면 오류 발생)
      - 동일한 스코프 내에서 같은 이름으로 재선언 불가

    ? var
      : 함수 범위(스코프) 변수(Function Scope)
      : 재할당 가능
      : 호이스팅O (선언 부분이 상단으로 끌어올려짐)
      - 동일한 변수명으로 여러번 선언 가능
*/

let letVariable; // 변수 선언
var varVariable; // 변수 선언

letVariable = 10; // 값 할당
varVariable = 'Hello World!'; // 값 할당

let letVariable2 = 20; // 선언과 동시에 할당
var varVariable2 = '안녕 변수!'; // 초기화

//* Practice: 나이 계산 프로그램 만들기

// 올해 연도, 태어난 연도, 나이에 대한 변수 선언
// 올해 연도를 나타내는 변수에는 2024 값 할당
let currentYear = 2024;
let birthYear;
let age;

// 태어난 연도의 경우 prompt창에서 값을 할당 받아옴.
birthYear = prompt('태어난 연도를 입력해주세요.');

// 나이 변수에 올해 연도와 태어난 연도 변수를 사용하여 식을 완성
age = currentYear - birthYear;

// 해당 나이 결과를 웹 브라우저에서 출력
// '태어난 연도(숫자)'에 태어난 사람의 나이는 '나이(숫자)'세입니다.
document.write('올해는 ' + currentYear + '년 입니다. <br />');

document.write(birthYear + '년에 태어난 사람의 나이는 ' + age + '세입니다.');

/*
  ! 상수(Constant)
    : 변하지 않는 수, 한 번 할당된 값을 변경할 수 X (재할당 불가)
    : 선언과 동시에 할당이 반드시 이루어져야 함
      (초기화)
    : 과학적 공식에서 사용하는 숫자값(파이 등)
  
  ! 상수 명명규칙
    - 변수의 명명규칙과 동일하지만
      , UPPER_SNAKE_CASE를 사용

      : 모든 영문자를 대문자로 작성
      : 이어지는 단어는 _(언더스코어)로 구분

    const MY_CONSTANT = '안녕';
    const PI = 3.14159...    
*/

const PI = 3.14;

//! 변수의 유효 범위 (스코프)

//? 1. 전역 스코프
// : 마치 도서관의 메인 홀, 홀에 놓인 책(변수나 함수)은 누구나 어디에서나 접근
var book = "프로그래밍 기초"; 

function readBook() {
    console.log(book); 
}

readBook(); // 프로그래밍 기초
console.log(book); // 프로그래밍 기초

//? 2. 함수 스코프
// - 함수 스코프(Function Scope)
//  : var 키워드로 선언된 변수는 함수 스코프를 가집니다. 이 변수들은 함수 내부에서만 접근
//  : 특정 방 안에 있는 책(인문사회실, 자연과학실), 해당 방(함수) 안에서만 책을 읽을 수 있으며, 방 밖에서는 책을 볼 수 X

function privateLibrary() {
  var secretBook = "비밀의 책";
  console.log(secretBook); 
}

privateLibrary(); // 출력: 비밀의 책
console.log(secretBook);

//? 3. 블록 스코프(Block Scope)
//  : let과 const로 선언된 변수는 블록 스코프를 가집니다. 이 변수들은 중괄호 {}로 둘러싸인 블록 내부에서만 접근


// - 블록 스코프
if (true) {
  let localArticle = "지역 신문"; // 이 신문은 독서 부스에 있습니다.
  const localGuide = "지역 가이드북"; // 이 가이드북도 독서 부스에 있습니다.
  console.log(localArticle); // 부스 안에서 신문을 읽을 수 있습니다.
  console.log(localGuide); // 부스 안에서 가이드북을 볼 수 있습니다.
}

console.log(localArticle); // 에러: localArticle is not defined. 부스 밖에서는 볼 수 없습니다.
console.log(localGuide); // 에러: localArticle is not defined. 부스 밖에서는 볼 수 없습니다.


//! 변수의 호이스팅
//? var의 호이스팅

// var = a; - 해당 변수 선언이 생략된 것과 동일하게 작동
console.log(a);
// undefined - 변수가 선언되었지만 값이 할당되지 않음(초기화 X)
var a = 5;

console.log(a); // 5

//? let과 const의 호이스팅
// console.log(b); 
// - ReferenceError: Cannot access 'b' before initialization (초기화 전에 b에 접근할 수 X)
let b = 5;
console.log(b);

{
  let b = 10;
  console.log(b);
}

console.log(b);

// console.log(c);
// - ReferenceError: Cannot access 'c' before initialization
const c = 5;

//! var 키워드의 경우
// 변수를 중복해서 선언할 수 있다는 위험성, 변수가 속하는 범위가 애매하다는 점에서 코드에 혼란을 줄 수 있기 때문에 사용 X


// 이러한 이유로, var 대신 let과 const를 사용하는 것이 권장
// let과 const는 블록 레벨 스코프를 제공하여 더 엄격하게 변수의 범위를 제한하고, 변수의 중복 선언을 허용하지 않으며, 호이스팅으로 인한 혼란을 줄여줌

// : let은 값이 변경될 수 있는 변수에 사용
// : const는 한 번 할당하면 변경할 수 없는 상수에 사용
// let과 const를 사용하면 코드가 더 안정적이고 예측 가능해져, 유지 보수가 쉬워지고 버그 발생 가능성이 줄어든다.