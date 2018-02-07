"userstrict"
window.onload = function() {

  let div = document.getElementById('output');
  let btn = document.getElementById('add-element');
  n = 10;
  div.textContent = "0".repeat(10);

  btn.addEventListener("click", btnClick);

  function btnClick() {
    let count = 1;
    let lRow = n;
    let nRow = 1;
    let current = 1;

    setInterval(() => {
      console.log(count += 1);
      let arrLeft = new Array(Math.max(nRow - 1, 0)).fill("1");
      let arrRight = new Array(nRow - 2).fill("1");
      let arrMid = new 
      div.textContent = "1".repeat(nRow - 1) + "0".repeat
      if (current === 1 || current === lRow) {

      }
      if (curent === lRow && lRow>2) {
        
        lRow = lRow - 2;
        nRow = nRow + 1;

      } else {
        
      }
    },300);
  }
}