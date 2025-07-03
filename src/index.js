import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="bodia.jpg" alt="Bogdan Rumu" />;
}

function Intro() {
  return (
    <div>
      <h1>Bogdan Rumu</h1>
      <p>
        I’m a web development student on Udemy, learning and working hard to
        become a real web developer. I put in a lot of effort, stay active with
        sports in my free time, and try to become a better version of myself
        every day.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="👽" color="#1234" />
      <Skill skill="JavaScript" emoji="💥" color="orange" />
      <Skill skill="Basic HTML+CSS" emoji="🫡" color="orangered" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ background: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
