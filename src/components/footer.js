import logoImg from "../../src/logo.svg";
import "../components/footer.css";

const Footer = () => {
  return (
    <div className="container2">
      <div className="container-in">
        <div className="footer-logo">
          <img className="footer-logo-image" src={logoImg} alt="logo" />
        </div>
        <div className="footer-li">
          <ul>
            <li>
              <a href="#!">Media</a>
            </li>
            <li>
              <a href="#!">Events</a>
            </li>
            <li>
              <a href="#!">Ranks</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
