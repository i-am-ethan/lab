import CoverImage from "../images/cover-image.jpg"
import ProfileImage from "../images/profile-image.png"
import { FaTwitter, FaGithub } from 'react-icons/fa';


export const Header = () => {
  return(
    <header className="main-cover" style={{backgroundImage: `url(${CoverImage})`}}>
      <div className="overlay"></div>
      <div className="container">
        <div className="display-table">
          <div className="display-table-contents">
            <div className="profile-thumb" style={{backgroundImage: `url(${ProfileImage})`}}>
              <h1 className="title-text">イーサン</h1>
              <h3 className="title-text">Web developer</h3>
              <ul className="social-icons">
                <li className="icon-link">
                  <a href="https://twitter.com/e_san_desuyo">
                    <FaTwitter color="white" size="2rem" />
                  </a>
                </li>
                <li className="icon-link">
                  <a href="https://github.com/i-am-ethan">
                  <FaGithub color="white" size="2rem" />
                  </a>
                </li>
              </ul>

            </div>

          </div>

        </div>

      </div>
    </header>
  )
}