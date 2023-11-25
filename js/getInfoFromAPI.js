// пока попытки работы с API
let word = "hello"; //сюда нужно вставлять слово из полученного на страничке
let arr = []; // сюда пушатся слова если они существуют
let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка при выполнении запроса:", error);
  }
}
function dataShow(data) {
  if (data) {
    const [word] = data;
    arr.push(word.word);
    console.log(arr);
  } else {
    console.log("Такого слова не существует!");
  }
}
fetchData(url).then((data) => dataShow(data));
