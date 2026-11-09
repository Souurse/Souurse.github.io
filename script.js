// 1. Удалить слова длиннее 7 букв, результат в alert
function removeLongWords() {
  var text = document.getElementById("text1").value;
  var words = text.split(" ");
  var result = "";
  for (var i = 0; i < words.length; i++) {
    if (words[i].length <= 7) {
      result = result + words[i] + " ";
    }
  }
  alert("Результат: " + result);
}

// 2. Самая частая буква, результат в alert
function findTopLetter() {
  var text = document.getElementById("text2").value.toLowerCase();
  var counts = {};
  var topLetter = "";
  var topCount = 0;
  for (var i = 0; i < text.length; i++) {
    var ch = text[i];
    if (ch.toLowerCase() === ch.toUpperCase()) continue; // это не буква
    if (counts[ch] === undefined) counts[ch] = 0;
    counts[ch]++;
    if (counts[ch] > topCount) {
      topCount = counts[ch];
      topLetter = ch;
    }
  }
  if (topLetter === "") {
    alert("В тексте нет букв");
  } else {
    alert("Чаще всего встречается буква «" + topLetter + "» (" + topCount + " раз)");
  }
}

// 3. Смена цвета фона
function changeColor(color) {
  document.body.style.background = color;
}

// 4. Часы в заголовке (Title)
var startTitle = document.title;
function updateTitle() {
  var now = new Date();
  var h = now.getHours();
  var m = now.getMinutes();
  var s = now.getSeconds();
  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;
  document.title = startTitle + " | " + h + ":" + m + ":" + s;
}
updateTitle();
setInterval(updateTitle, 1000);
