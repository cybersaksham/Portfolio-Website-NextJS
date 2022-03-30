let currDate = new Date();
let year = currDate.getFullYear() - 2004;
let month = currDate.getMonth() - 8;
let date = currDate.getDate() - 19;

if (month < 0) year -= 1;
else if (month === 0) {
  if (date < 19) year -= 1;
}

const about = {
  name: "Saksham Bindal",
  about: "Web & App Developer",
  bio: "Pursuing B. Tech at MNIT Jaipur in Computer Science Branch. 2nd Year Student.",
  longBio:
    "I'm a developer with experience in building full-stack websites for individuals and organizations. I also develop flutter android apps. I am expert in Python, CPP, MERN Stack, Next JS, Flask. I am a competitive coder.",
  birthday: "19 Aug 2004",
  city: "Hindaun, Rajasthan, India",
  age: year,
  degree: "UG",
};

export default about;
