import "./App.css";
import PRO from "./pro.png";

function About() {
  return (
    <>
      <div className="body">
        <img src={PRO} className="mImg" />
        <div className="contentOne">
          <p className="name">Devansh Sharma</p>
          <p className="webName">WEB DEVELOPER</p>
          <p className="intro">
            Hi, I’m Devansh Sharma, a web developer specializing in crafting
            responsive, user-friendly sites with HTML5, CSS3, and JavaScript
            (React/Vue). I build scalable full‑stack applications using Node.js
            and Express, and I’m passionate about clean code, performance
            optimization, and modern web standards. Let’s collaborate to bring
            your digital ideas to life!
          </p>
        </div>
      </div>
    </>
  );
}
export default About;
