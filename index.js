let cnt = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
  cnt += 1;
  countEl.innerText = cnt;
}

function save() {
  let cntStr = cnt + " - ";
  saveEl.textContent += cntStr;
  countEl.textContent = 0;
  cnt = 0;
}
