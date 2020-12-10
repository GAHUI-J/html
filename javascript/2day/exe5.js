const money = new Array(3);
money[0] = 5;
money[1] = 7;
money[2] = -3; //참조하는 주솟값을 따라가서 요소가 변경 (주솟값이 변하는 게 아님)

let sum = 0;
for(let i=0; i<money.length; i++){
  sum += money[i];
}

console.log(sum/money.length);