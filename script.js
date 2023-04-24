const timeTable = {
  mon: [
    {
      title: "コンピュータリテラシ",
      teacher: ["内藤 克浩"],
      room: ["11-101"],
      textBook: ["MacOS Venture"],
      moodle: "https://satooru.me",
    },
    {
      title: "キャリアデザイン",
      teacher: ["玉森 聡"],
      room: ["G2110", "14"],
      textBook: [],
      moodle: "https://satooru.me",
    },
    {
      title: "情報社会及び情報倫理",
      teacher: ["中村 栄治"],
      room: ["G2110"],
      textBook: ["コピペと言われないレポート", "学生時代に学びたい情報倫理"],
      moodle: "https://satooru.me",
    },
  ],
  tue: [
    {},
    {
      title: "コミュニカティブイングリッシュC",
      teacher: ["太田 晶子"],
      room: ["G3302"],
      textBook: [""],
      moodle: "https://satooru.me",
    },
    {
      title: "線形代数Ⅰ",
      teacher: ["伊藤 健"],
      room: ["G2208"],
      textBook: [""],
      moodle: "https://satooru.me",
    },
    {
      title: "コミュニカティブイングリッシュA",
      teacher: ["ロバート クレイトン"],
      room: ["G3503"],
      textBook: ["変なテキスト"],
      moodle: "https://satooru.me",
    },
  ],
  wed: [
    {
      title: "コンピュータ概論",
      teacher: ["小野木 克明"],
      room: ["1-502"],
      textBook: [""],
      moodle: "https://satooru.me",
    },
    {
      title: "情報数学1",
      teacher: ["中村 栄治"],
      room: ["1-502"],
      textBook: [""],
      moodle: "https://satooru.me",
    },
  ],
  thu: [
    {
      title: "プログラミング及び演習1",
      teacher: ["河辺 義信", "梶 克彦"],
      room: ["1-502"],
      textBook: [""],
      moodle: "https://satooru.me",
    },
    {
      title: "プログラミング及び演習1",
      teacher: ["河辺 義信", "梶 克彦"],
      room: ["1-502"],
      textBook: [""],
      moodle: "https://satooru.me",
    },
    {
      title: "データサイエンス基礎数理",
      teacher: ["岩田 英人"],
      room: ["G2209"],
      textBook: [""],
      moodle: "https://satooru.me",
    },
    {
      title: "微分積分1",
      teacher: ["真島 一成"],
      room: ["G2311"],
      textBook: [""],
      moodle: "https://satooru.me",
    },
  ],
  fri: [
    {
      title: "科学技術と自然と人間",
      teacher: ["海上 智昭"],
      room: ["G2311"],
      textBook: [""],
      moodle: "https://satooru.me",
    },
    {
      title: "論理回路",
      teacher: ["河辺 義信"],
      room: ["G2210"],
      textBook: [""],
      moodle: "https://satooru.me",
    },
    {
      title: "中国語A",
      teacher: ["程 凱"],
      room: ["G2408"],
      textBook: [""],
      moodle: "https://satooru.me",
    },
    {
      title: "健康・スポーツ科学実習1",
      teacher: ["中野"],
      room: ["鉀徳館 南体育館"],
      textBook: [""],
      moodle: "https://satooru.me",
    },
  ],
};

window.onload = () => {
  const days = ["mon", "tue", "wed", "thu", "fri"];

  days.map((day) => {
    const dayEle = document.getElementsByClassName(day);

    timeTable[day].map((lesson, i) => {
      if (Object.keys(lesson).length === 0) return;

      const title = document.createElement("p");
      title.classList.add("title");
      title.innerHTML = lesson.title;

      const teacher = document.createElement("p");
      teacher.classList.add("teacher");
      teacher.innerHTML = `(${lesson.teacher})`;

      const room = document.createElement("p");
      room.classList.add("room");
      room.innerHTML = lesson.room;

      const textBook = document.createElement("p");
      textBook.classList.add("textbook");
      textBook.innerHTML = lesson.textBook;

      const moodle = document.createElement("a");
      moodle.classList.add("moodle");
      moodle.innerHTML = "Moodle";
      moodle.href = lesson.moodle;

      dayEle[i + 1].appendChild(title);
      dayEle[i + 1].appendChild(teacher);
      dayEle[i + 1].appendChild(room);
      dayEle[i + 1].appendChild(textBook);
      dayEle[i + 1].appendChild(moodle);
    });
  });
};
