const text = "Web Pro gram ming";
let result = text.length;
console.log(result);

result = text[2];
result = text.split(" ", 3);
result = text.replace("Web","HTML5");
result = text.charAt(4);
console.log(result);

console.log(Math.floor(Math.random()*10)+1); //floor : 실수를 정수로 만듬

const student = {
  id: 1,
  name: "kitae",
  grade: 3.9
};

console.log(student.id);
console.log(student.name);
console.log(student.grade);
