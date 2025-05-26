import "./App.css";
function Skill() {
  return (
    <div>
      <h2 className="sk">Skill</h2>
      <div className="skill">
        <div className="skillBox">
          <div className="sBox">
            <h2 className="t">HTML</h2>
            <p className="tS">
              I am a web developer specializing in HTML, adept at crafting
              semantic and accessible web pages. My expertise ensures clean,
              efficient code that enhances user experience across devices.
            </p>
          </div>
          <div className="sBox">
            <h2 className="t">CSS</h2>
            <p className="tS">
              I am a web developer proficient in CSS, adept at crafting visually
              appealing and responsive designs. My expertise ensures consistent
              styling and enhanced user experiences across various devices
            </p>
          </div>
          <div className="sBox">
            <h2 className="t">JS</h2>
            <p className="tS">
              I am a web developer proficient in JavaScript, adept at creating
              dynamic and interactive web applications. My expertise includes
              manipulating the DOM, handling events, and implementing efficient
              algorithms to enhance user experience.
            </p>
          </div>
          <div className="sBox">
            <h2 className="t">React</h2>
            <p className="tS">
              I am a web developer proficient in React.js, adept at building
              dynamic, component-based user interfaces. My expertise includes
              leveraging React's virtual DOM and hooks to create efficient,
              responsive web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skill;
