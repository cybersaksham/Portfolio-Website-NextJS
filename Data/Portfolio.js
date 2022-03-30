// Filters
const game_filter = "filter-game";
const web_filter = "filter-web";
const desktop_filter = "filter-desktop";
const ai_filter = "filter-ai";
const android_filter = "filter-android";

const filters = [
  game_filter,
  web_filter,
  desktop_filter,
  ai_filter,
  android_filter,
];

// URL Types
const git = "Github";
const playstore = "Playstore";
const setup = "Setup";
// const apk = "Apk";
// const web = "Website";

// Category Types
const cat_types = {
  [game_filter]: "Game",
  [web_filter]: "Website",
  [desktop_filter]: "Desktop App",
  [ai_filter]: "Artificial Intelligence",
  [android_filter]: "Android App",
};

// Projects
const projects = [
  {
    name: "Face Detector",
    filter: ai_filter + " " + desktop_filter,
    img: "face_detector",
    slides: 2,
    desc: "It is an AI project to detect your face & eyes either by live webcam, uploaded photo or video.",
    urls: [
      [[git], "https://github.com/cybersaksham/Face-Detector"],
      [
        [setup],
        "https://github.com/cybersaksham/Face-Detector/raw/master/setup_face_detector.exe",
      ],
    ],
  },
  {
    name: "Chess Game",
    filter: game_filter + " " + desktop_filter,
    img: "chess_game",
    slides: 3,
    desc: "A good chess game made in python. It has almost all functions which we have in original chess game.",
    urls: [
      [[git], "https://github.com/cybersaksham/Chess-Game"],
      [
        [setup],
        "https://github.com/cybersaksham/Chess-Game/raw/master/setup_chess_game.exe",
      ],
    ],
  },
  {
    name: "Expense Planner",
    filter: android_filter,
    img: "expense_manager",
    slides: 2,
    desc: "Android app made by flutter to manage your daily expenses in a right way. You can also see data by charts.",
    urls: [
      [[git], "https://github.com/cybersaksham/Expense-Manager"],
      [
        [playstore],
        "https://play.google.com/store/apps/details?id=com.cybersaksham.expense_planner",
      ],
    ],
  },
  {
    name: "2048 Game",
    filter: game_filter + " " + desktop_filter,
    img: "2048_game",
    slides: 2,
    desc: "2048 GUI game made in python.",
    urls: [[[git], "https://github.com/cybersaksham/2048-Game"]],
  },
  {
    name: "News Website",
    filter: web_filter,
    img: "news_website",
    slides: 4,
    desc: "News website made in react js. Watch latest news in different categories",
    urls: [[[git], "https://github.com/cybersaksham/React-News-App"]],
  },
];

// Get Details
const getDetails = (id) => {
  if (!id || id < 0 || id >= projects.length) return projects[0];

  const pr = projects[id];
  let fils_ = pr.filter.split(" ");
  let cats_ = [];
  fils_.forEach((el) => {
    cats_ = [...cats_, cat_types[el]];
  });
  let cat = cats_.join(", ");
  pr["category"] = cat;

  return pr;
};

export default { filters, projects, getDetails };
