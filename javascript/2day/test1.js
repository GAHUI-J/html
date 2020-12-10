console.log('hello world~!');

//변수 선언
//es6 이전 버전
var name = '홍길동';

//ex6 이후 버전
let x = 10;
let y = 20;
console.log(x+y);

const z = 30; //constant value(상수)
// z = 40; //오류 뜸 

//함수선언문
//호이스팅 : 함수 선언문을 위로 끌어올림
let result = sum(x,y);
console.log(result); //위에서 호출 가능

function sum(a,b){
  let result;
  result = a + b;
  return result;
}


//함수표현식
//호이스팅 안 됨
let result2 = function(a,b){
  let result;
  result = a + b;
  return result;
}
console.log(result2(x,y)); //호출하기 전에 함수 표현식이 정의 되어야 함

//함수표현식(람다식)
let result3 = (a,b) => { a+b; }





//배열생성 2가지 방법
const array = [1,2,3,4,5];
const array2 = new Array(1,2,3,4,5);
console.log(array.toString());
console.log(array2.toString());

//js에서 배열은 동적으로 요소추가 가능
array[5] = 6;
console.log(array.toString());
console.log(array.length);
array.length = 3;
console.log(array.toString());
array.length = 10;
console.log(array.toString());
array[7] = 8;
console.log(array.toString());

//빈 배열생성
// const array3 = []; -> 1) TypeError : constant variable
array3 = [];
array4 = new Array();
array3[0] = 1;
array3[1] = 2;
array3[2] = 3;
console.log(array3.toString());
array3[5] = 6;
console.log(array3.toString()); //빈 값이더라도 어쨌든 방은 만들어짐
console.log(array3.length);

// array3 = ['a','b','c']; -> 1) TypeError : constant variable


//객체 생성
//1)리터럴 표현식 : 1회성 객체 생성시 사용
const person = {
  name: '홍길동',
  age: 30,
  eat:function(){
    console.log('먹다');
  },
  smile:function(){
    console.log('웃다');
  }
};
console.log(person.name);
console.log(person.age);

person.eat();
person.smile();
person.bloodType = 'A';
console.log(person.bloodType);

//2)new Object()로 객체 생성
const person2 = new Object();
person2.name = '홍길순';
person2.age = 20;
person2.smile = function(){
  console.log('웃다');
}
person2.eat = function(){
  console.log('먹다');
}

console.log(person2);
person2.eat();
person2.smile();

//3) {} 빈객체 생성
const person3 = {};
person3.name = '홍길서';
person3.age = 25;
person3.smile = function(){
  console.log('웃다');
}
person3.eat = function(){
  console.log('먹다');
}
console.log(person3);

//4) 생성자 함수 : 동일 타입의 인스턴스를 여러개 만들 때 사용
function Person(name, age){
  this.name = name;
  this.age = age;
  this.smile = function(){console.log('웃다');};
  this.eat = function(){console.log('먹다');};
}

const person10 = new Person('홍길북',40);
const person11 = new Person('홍길남',50);
const person12 = new Person('홍길북',60);
console.log(person10);
console.log(person11);
console.log(person12);

//5) class : 생성자 함수의 syntax sugar(설탕문법)
class Person20 {
  //생성자
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  //메서드
  smile(){
    console.log('웃다');
  }
  eat(){
    console.log('먹다');
  }
}

const person30 = new Person20('홍길동',10);
const person31 = new Person20('홍길서',20);
const person32 = new Person20('홍길남',30);
console.log(person30);
console.log(person31);
console.log(person32);
console.log(person30.smile());
console.log(person30.eat());

