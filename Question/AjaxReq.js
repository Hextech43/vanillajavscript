let xhtt = new XMLHttpRequest();

xhtt.onreadystatechange = () => {
  if (xhtt.readyState === 4 && xhtt.status === 200) {
    console.log(xhtt.readyState);
    let respond = JSON.parse(xhtt.responseText);
    console.log(respond);
    let questions = respond.results[0].question;

    let incorrect_answer1 = respond.results[0].incorrect_answers[0];
    let incorrect_answer2 = respond.results[0].incorrect_answers[1];
    let correct_answer = respond.results[0].correct_answer;

    console.log(questions);
    console.log("A : ", incorrect_answer1);
    console.log("B : ", incorrect_answer2);
    console.log("this is the correct answer", correct_answer);
  }
};

xhtt.open("GET", "https://opentdb.com/api.php?amount=10");
xhtt.send();
