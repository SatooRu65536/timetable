let timeTable = {};

window.onload = () => {
  const jsonUrl = localStorage.getItem("jsonUrl") || "timetable.json";

  fetch(jsonUrl)
    .then((res) => res.json())
    .then((data) => {
      timeTable = data;

      const days = ["mon", "tue", "wed", "thu", "fri"];

      days.map((day) => {
        const dayEle = document.getElementsByClassName(day);

        timeTable[day].map((lesson, i) => {
          if (Object.keys(lesson).length === 0) return;

          createEle(dayEle[i + 1], "title", lesson.title, lesson.color);
          createEle(dayEle[i + 1], "teacher", lesson.teacher, lesson.color);
          createEle(dayEle[i + 1], "room", lesson.room, lesson.color);

          lesson.textbook.map((tb) =>
            createEle(dayEle[i + 1], "textbook", tb, lesson.color)
          );

          createAtag(dayEle[i + 1], lesson.link, lesson.linktxt, lesson.color);

          if (lesson.bgcolor) dayEle[i + 1].style.background = lesson.bgcolor;
        });
      });
    });
};

function createEle(parent, tag, content, color) {
  const ele = document.createElement("p");
  ele.classList.add(tag);
  ele.innerText = content || "";
  parent.appendChild(ele);

  if (color && color[tag]) {
    ele.style.color = color[tag];
  } else if (
    timeTable.default &&
    timeTable.default.color &&
    timeTable.default.color[tag]
  ) {
    ele.style.color = timeTable.default.color[tag] || "";
  }
}

function createAtag(parent, link, content, color) {
  const ele = document.createElement("a");
  ele.classList.add("link");
  ele.href = link;
  ele.target = "_blank";
  ele.innerText = content || "Moodle";
  parent.appendChild(ele);

  if (color && color.link) {
    ele.style.color = color.link;
  } else if (
    timeTable.default &&
    timeTable.default.color &&
    timeTable.default.color.link
  ) {
    ele.style.color = timeTable.default.color.link || "";
  }
}
