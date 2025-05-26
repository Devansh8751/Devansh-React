import "./App.css";
import IN from "./in.png";
import GIT from "./git.png";
import TWITTER from "./twitter.png";
import INSTA from "./insta.png";
function Footer() {
  return (
    <footer>
      <nav>
        <a class="two" href="linkedin.com">
          <img src={IN} />
        </a>
        <a class="two" href="https://github.com/Devansh8751/Devansh-Portfolio">
          <img src={GIT} />
        </a>
        <a class="two" href="twitter.com">
          <img src={TWITTER} />
        </a>
        <a class="two" href="instagram.com">
          <img src={INSTA} />
        </a>
      </nav>
      <p class="ending">
        Copyright ©2024. By <span class="span-3">Devansh Sharma</span>
      </p>
    </footer>
  );
}
export default Footer;
