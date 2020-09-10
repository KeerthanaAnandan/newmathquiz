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

function next(e) {
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector(".option.active").innerHTML;

  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;

    sessionStorage.setItem("points", points);
    //let coloranswer = document.querySelector("li.option.active");
    //e.target.coloranswer.classList.add("correct");
  }

  question_count++;
  show(question_count);
  toggleActive();

  //Update the progress Bar

  const progressBarFull = document.getElementById("progressBarFull");

  progressBarFull.style.width = ` ${
    (question_count / Max_Questions) * 100 + 10
  }%`;

  //progress text
  const progressText = document.getElementById("progressText");

  progressText.innerText = `Question ${question_count}/${Max_Questions}`;
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li><span class="choice-prefix">A</span><span class="option">${first}</span></li>
  <li ><span class="choice-prefix">B</span><span class="option">${second}</span></li>
  <li ><span class="choice-prefix">C</span><span class="option">${third}</span></li>
  <li ><span class="choice-prefix">D</span><span class="option">${fourth}</span></li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll(".option");

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
