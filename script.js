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

          if (lesson.title) {
            const title = document.createElement("p");
            title.classList.add("title");
            title.innerHTML = lesson.title;
            dayEle[i + 1].appendChild(title);
          }

          if (lesson.teacher) {
            const teacher = document.createElement("p");
            teacher.classList.add("teacher");
            teacher.innerHTML = `(${lesson.teacher})`;
            dayEle[i + 1].appendChild(teacher);
          }

          if (lesson.room) {
            const room = document.createElement("p");
            room.classList.add("room");
            room.innerHTML = lesson.room;
            dayEle[i + 1].appendChild(room);
          }

          if (lesson.textBook) {
            const textBook = document.createElement("p");
            textBook.classList.add("textbook");
            textBook.innerHTML = lesson.textBook;
            dayEle[i + 1].appendChild(textBook);
          }

          if (lesson.moodle) {
            const moodle = document.createElement("a");
            moodle.classList.add("moodle");
            moodle.innerHTML = "Moodle";
            moodle.href = lesson.moodle;
            dayEle[i + 1].appendChild(moodle);
          }
        });
      });
    });
};
