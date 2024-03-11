document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('btn');
        button.addEventListener('click', clickBtn()); 
});

function clickBtn() {
    chrome.tabs.create({ url: "https://chat.openai.com/" });
}            

document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("btn");
  
    btn.addEventListener("click", function () {
      // Mở tab mới và truy cập vào openai.com
      chrome.tabs.create({ url: "https://chat.openai.com/" });
    });
  });
  