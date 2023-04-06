# Боггл

Привет! Нужно написать игру [Боггл](https://ru.wikipedia.org/wiki/Боггл) на HTML, CSS, JS. Задач много, поэтому лучше делать этот проект втроём или вчетвером.

Цель №1: работать с Git и GitHub в команде — использовать ветки, соединять работу через [pull request](https://docs.github.com/ru/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) и слияние (merge), решать [конфликты слияния](https://docs.github.com/ru/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts).

Цель №2: показать проект, в который можно играть.

Каждый разработчик должен решать свои подзадачи и проверять работу кода. Тимлид должен регулярно объединять результаты командной работы и запрашивать доработки, если они необходимы.

Двигайся шаг за шагом и тестируй код в браузере, чтобы убедиться, что всё работает правильно.

---

<!-- markdownlint-disable no-inline-html -->
<details>
  <summary>Пример игры в Боггл</summary>
  <img src="files/boggle-mockup.gif" alt="Пример игры в Боггл">
</details>
<!-- markdownlint-enable no-inline-html -->

---

## Функциональные требования
1. Игрок может видеть лоток 4×4 с кубиками, на сторонах которых указаны буквы.
2. Игрок может начать новую игру с помощью кнопки перемешивания кубиков.
3. Игрок может составлять слово из соседних букв — по горизонтали, вертикали и диагонали. Один кубик может использоваться в слове только один раз.
4. Игрок может видеть результат проверки составленного слова и количество полученных очков.
5. Игрок может посмотреть топ-10 самых длинных составленных слов.
6. Игрок может завершить игру и записать своё имя, если результат игры попал в топ-10.
7. Игрок может посмотреть топ-10 лучших результатов игры по очкам.
8. Игрок может видеть таймер обратного отсчёта на 3 минуты. По истечению времени игра завершается.
9. Игрок может обновить страницу и продолжить незавершённую игру.

### Список букв на кубиках

```text
AAEEGN
ABBJOO
ACHOPS
AFFKPS
AOOTTW
CIMOTU
DEILRX
DELRVY
DISTTY
EEGHNW
EEINSU
EHRTVW
EIOSST
ELRTTY
HIMNUQu
HLNNRZ
```

**Qu:**
- отображается на одной стороне кубика,
- считается за две буквы при составлении слова и подсчётах очков.

### Критерии проверки слова
Слово считается успешно составленным, если:
1. в нём 3 буквы или больше;
2. оно не использовалось в этой игре;
3. оно есть в словаре — например, [Free Dictionary API](https://dictionaryapi.dev/).

| Длина слова | Очки |
| ----------- | ---- |
| 3           | 1    |
| 4           | 1    |
| 5           | 2    |
| 6           | 3    |
| 7           | 5    |
| 8+          | 11   |

## Требования по качеству работы

### 1. Git
1. Коммиты должны называться в едином стиле и содержать осмысленное описание.
   Например: "Shuffle board", "Validate word", "Fix dice position", "Stop selecting word when same die is selected" и т.д.
2. Делать коммиты в ветке `main` нельзя. Все изменения должны происходить в feature-ветках и попадать в `main` только через pull request.
3. Код в `main` всегда должен быть готовым к показу проекта. Это значит, что все промежуточные результаты лучше объединять в другой общей ветке — например, `develop`.
4. Ветки должны называться по смыслу. Максимум внимания работе с ветками Git. Все изменения в коде должны происходить в feature-ветках, а не в основной. Ветки должны называться по смыслу — например, `shuffle-board`, `validate-word`, `calculate-score`, `fix-dice-position` и т.д.

### 2. Функциональность
1. Все реализованные возможности должны работать.
2. Проект не должен ломаться. Все ожидаемые ошибки должны быть обработаны и показаны пользователю в понятном виде.
3. Лучше выполнить меньше функциональных требований, но сделать их хорошо.

### 3. Пользовательский интерфейс (UI)
1. Весь функционал должен быть доступен через браузер.
2. Страница должна аккуратно выглядеть.
3. Вид страницы не должен портиться при изменении размера экрана браузера.
4. Все сообщения пользователю должны быть понятными и отображаться на странице.

## Ссылки

- [Боггл — Википедия](https://ru.wikipedia.org/wiki/Боггл)
- [Боггл — игра по поиску слов онлайн](https://ru.puzzle-words.com/boggle-4x4/)
- [GitHub Docs: О конфликтах слияния](https://docs.github.com/ru/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts)
- [Free Dictionary API для проверки слов на английском языке](https://dictionaryapi.dev/)
