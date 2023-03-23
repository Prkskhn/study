const QUOTES = "quotes";

function getTime1() {
  const time1 = document.querySelector(".time1");

  const newDate = new Date();

  const hours = String(newDate.getHours()).padStart(2, "0");

  const minutes = String(newDate.getMinutes()).padStart(2, "0");

  const seconds = String(newDate.getSeconds()).padStart(2, "0");

  //   if (minutes.toString().length === 1) {
  //     minutes = "0" + minutes;
  //   }

  //   if (hours.toString().length === 1) {
  //     hours = "0" + hours;
  //   }

  //   if (seconds.toString().length === 1) {
  //     seconds = "0" + seconds;
  //   }

  //   time.innerText = hours + ":" + minutes + ":" + seconds;
  time1.innerText = `${hours}:${minutes}:${seconds}`;
}
function getTime2() {
  const time2 = document.querySelector(".time2");

  const newDate = new Date();

  const hours = String(newDate.getHours()).padStart(2, "0");

  const minutes = String(newDate.getMinutes()).padStart(2, "0");

  const seconds = String(newDate.getSeconds()).padStart(2, "0");

  //   if (minutes.toString().length === 1) {
  //     minutes = "0" + minutes;
  //   }

  //   if (hours.toString().length === 1) {
  //     hours = "0" + hours;
  //   }

  //   if (seconds.toString().length === 1) {
  //     seconds = "0" + seconds;
  //   }

  //   time.innerText = hours + ":" + minutes + ":" + seconds;
  time2.innerText = `${hours}:${minutes}:${seconds}`;
}

getTime1();
setInterval(getTime1, 1000);
getTime2();
setInterval(getTime2, 1000);

function getQuotes() {
  const quotesMsg = document.querySelector(".quotesMsg");
  let savedQuotes = localStorage.getItem(QUOTES);

  if (!savedQuotes) {
    localStorage.setItem(
      QUOTES,
      JSON.stringify([
        "열심히 살아봅시다1",
        "열심히 살아봅시다22",
        "열심히 살아봅시다333",
      ])
    );

    savedQuotes = localStorage.getItem(QUOTES);
  }

  let quotesArray = JSON.parse(savedQuotes);

  quotesMsg.innerText =
    quotesArray[Math.floor(Math.random() * quotesArray.length)];
}

getQuotes();

function onClickAdd() {
  const newQuotes = document.querySelector(".newQuotes");
  newQuotes.style.display = "inline-block";
}

function onClickRegist() {
  const quotesMsg = document.querySelector(".quotesMsg");
  const newQuotes = document.querySelector(".newQuotes");
  const newQuotesInput = document.querySelector(".newQuotesInput");

  if (!newQuotesInput.value) {
    return;
  }

  let savedQuotes = localStorage.getItem(QUOTES);

  let quotesArray = JSON.parse(savedQuotes);
  quotesArray.push(newQuotesInput.value);

  localStorage.setItem(QUOTES, JSON.stringify(quotesArray));

  quotesMsg.innerHTML = `<span style="color:red;">${newQuotesInput.value}</span>`;
  newQuotes.style.display = "none";
  newQuotesInput.value = "";
}
