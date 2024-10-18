import { FaInstagram, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { FaDiscord, FaFacebookF } from "react-icons/fa6";
import '../styles/footer.css'; // Assuming you're importing your CSS

const SocialButton = ({ children, label, href }) => {
  return (
    <a href={href} aria-label={label} className="social-button">
      {children}
    </a>
  );
};

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-left">
            <div className="logo-section">
              <div className="logo-grid">
                <div className="logo-square bg-logoBg1 rounded-tr"></div>
                <div className="logo-square bg-logoBg2"></div>
                <div className="logo-square bg-logoBg2 rounded-tr"></div>
                <div className="logo-square bg-logoBg2"></div>
                <div className="logo-square bg-none"></div>
                <div className="logo-square bg-logoBg2"></div>
                <div className="logo-square bg-logoBg2 rounded-bl"></div>
                <div className="logo-square bg-logoBg1 rounded-br"></div>
                <div className="logo-square bg-logoBg2 rounded-bl"></div>
              </div>
              <div className="logo-text">EthAi</div>
            </div>

            <div className="social-buttons">
              <SocialButton label={"Telegram"} href={"#"}>
                <FaTelegramPlane />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"Facebook"} href={"#"}>
                <FaFacebookF />
              </SocialButton>
              <SocialButton label={"Discord"} href={"#"}>
                <FaDiscord />
              </SocialButton>
            </div>
          </div>

          <div className="footer-right">
            <h1 className="footer-heading">
              “Designed for traders of today, just like you.”
            </h1>
            <div className="email-input-wrapper">
              <input
                type="email"
                placeholder="What’s your work email"
                className="email-input"
              />
              <button className="dapp-button">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
