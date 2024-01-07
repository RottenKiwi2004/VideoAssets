function backgroundChanged(e) {
  document.documentElement.style.setProperty("--backgroundColor", e.value);
}

function textChanged(e) {
  document.documentElement.style.setProperty("--textColor", e.value);
}

function strokeChanged(e) {
  document.documentElement.style.setProperty("--strokeColor", e.value);
}

function fontFamilyChanged(e) {
  document.documentElement.style.setProperty("--fontFamily", e.value);
}

function fontSizeChanged(e) {
  document.documentElement.style.setProperty("--fontSize", e.value);
}

function startNumChanged(e) {
  updateText(e.value, document.getElementById("displayText").value);
}

function updateText(num, text) {
  console.log(num);
  document.querySelector(".display").textContent = text.replace(
    "{num}",
    `${num}`
  );
}

function displayChanged(e) {
  updateText(parseInt(document.getElementById("startNum").value), e.value);
}

function runNum() {
  let startNum = parseInt(document.getElementById("startNum").value);
  let finalNum = parseInt(document.getElementById("finalNum").value);
  let seconds = parseInt(document.getElementById("countDuration").value);
  let frames = seconds * 60;
  for (let i = 0; i <= frames; i++) {
    let num = Math.floor(startNum + ((finalNum - startNum) * i) / frames);
    setTimeout(() => {
      updateText(num, document.getElementById("displayText").value);
    }, (i / frames) * seconds * 1000);
  }
}
