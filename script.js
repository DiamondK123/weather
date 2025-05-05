function askAI() {
  const input = document.getElementById('userInput').value;
  const responseDiv = document.getElementById('response');

  // 模擬 AI 回應邏輯
  if (input.includes("天氣")) {
    responseDiv.textContent = "今天天氣晴朗，適合出門走走 ☀️";
  } else if (input.includes("你是誰")) {
    responseDiv.textContent = "我是你的 AI 小幫手，很高興認識你！";
  } else {
    responseDiv.textContent = "這問題我還在學習中呢，請再問問看～";
  }
}
