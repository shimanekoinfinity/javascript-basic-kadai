//HTML要素がクリックされたときにイベント処理を実行する

const btn = document.getElementById("button");
console.log(btn);
const text = document.getElementById("js-text");
console.log(text);
 const changeText =()=>{
 //  text.textContent="ボタンをクリックしました！"
   btn.style.background = '#0091EA';
 }
btn.addEventListener('mouseover', changeText);

btn.addEventListener('mouseleave', () => {

  btn.style.background = '';

}, false)
