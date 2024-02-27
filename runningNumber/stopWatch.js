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
    let second = num;
    let hour = Math.floor(second / 3600);
    second %= 3600;
    let minute = Math.floor(second / 60);
    second %= 60
    document.querySelector(".display").textContent = text.replace(
      "{hour}",
      `${hour < 10 ? '0':''}${hour}`
    ).replace(
      "{minute}",
      `${minute < 10 ? '0':''}${minute}`
    ).replace(
      "{second}",
      `${second < 10 ? '0':''}${second}`
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
  