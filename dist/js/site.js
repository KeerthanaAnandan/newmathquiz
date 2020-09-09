let questions = [
  {
    id: 1,
    question: "What is the value of X + Y ?",
    answer: "2",
    options: ["1", "2", "3", "4"],
  },
  {
    id: 2,
    question: "What is the value of X + Y ?",
    answer: "2",
    options: ["1", "2", "3", "4"],
  },
  {
    id: 3,
    question: "What is the value of X + Y ?",
    answer: "2",
    options: ["1", "2", "3", "4"],
  },
  {
    id: 4,
    question: "What is the value of X + Y ?",
    answer: "2",
    options: ["1", "2", "3", "4"],
  },
  {
    id: 5,
    question: "What is the value of X + Y ?",
    answer: "2",
    options: ["1", "2", "3", "4"],
  },
];

let question_count = 0;
let points = 0;
Max_Questions = 5;

window.onload = function () {
  show(question_count);
};

function next() {
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);

  //Update the progress Bar

  const progressBarFull = document.getElementById("progressBarFull");

  progressBarFull.style.width = ` ${(question_count / Max_Questions) * 100}%`;
  console.log(progressBarFull.style.width);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
