'use strict';

function changeColor(){
  const red = Math.floor(Math.random()*256);
  const green = Math.floor(Math.random()*256);
  const blue = Math.floor(Math.random()*256);

  // return "rgb("+red+","+green+","+blue+")";
  return `rgb(${red},${green},${blue})` //문자열 템플릿, 백틱 -> 물결 표시 밑에 있는 따옴표
}

for(let i=0; i<16; i++){
  let bgColor = changeColor();
  let str = `<div style="background-color:${bgColor}">${bgColor}</div>`;
  document.write(str);
  // document.write( '<div style="background-color:' +bgColor+'">'+bgColor+'</div>');
}