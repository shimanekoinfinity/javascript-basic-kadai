const timer = () => {
  console.log(4649);
  setTimeout(changeText,2000);
}

const changeText = () => {
  console.log(1111);
  document.getElementById('text').textContent = 'ボタンをクリックしました';
  document.getElementById('btn').addEventListener('click',changebutton);
}


const btn = document.getElementById('btn').addEventListener('click',timer)
console.log(btn);


