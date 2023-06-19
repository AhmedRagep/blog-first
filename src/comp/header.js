import { Link, NavLink } from "react-router-dom";
import './header.css';

const Header = () => {
  return (
    <div className="myheader">
      <header className="hide-when-mobile ahmed">
        <h1>
          <Link to='/'>Coding Hustler</Link>
        </h1>
        <ul className="flex">
          <li className="main-list">
            {/* تستخدم لعمل اكتيف للعنصر اذا تم الدخول عليه */}
            {/* اما اللينك فهو مثل العادي */}
            <NavLink className="main-link" to="/html">
              HTML
            </NavLink>
            {/* <ul className="sub-ul">
              <li>
                <a href>Full Course</a>
              </li>
              <li>
                <a href>Crash Course</a>
              </li>
              <li>
                <a href>learn in 1h</a>
              </li>
            </ul> */}
          </li>
          <li className="main-list">
          <NavLink className="main-link" to="/css">
              css
            </NavLink>
            {/* <ul className="sub-ul">
              <li>
                <a href>Full Course</a>
              </li>
              <li>
                <a href>CSS Examples</a>
              </li>
              <li className="mini-projects">
                <a href>mini projects&nbsp; + </a>
                <ul className="sub-sub-ul">
                  <li>
                    <a href>project 1</a>
                  </li>
                  <li>
                    <a href>project 2</a>
                  </li>
                  <li>
                    <a href>project 3</a>
                  </li>
                </ul>
              </li>
            </ul> */}
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/javascript">
              javascript
            </NavLink>
            <ul className="sub-ul sub-of-js">
              <li>
                <a href>coming soon🔥</a>
              </li>
            </ul>
          </li>
        </ul>
      </header>
      <header style={{ backgroundColor: "red"}} className="show-when-mobile">
        <h1>Courses 4 Arab</h1>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
            <label htmlFor="html">
              HTML <i className="fas fa-plus" />
            </label>
            <input id="html" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href>Full Course</a>
              </li>
              <li>
                <a href>Crash Course</a>
              </li>
              <li>
                <a href>learn in 1h</a>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="css">
              CSS <i className="fas fa-plus" />
            </label>
            <input id="css" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href>Full Course</a>
              </li>
              <li>
                <a href>CSS Examples</a>
              </li>
              <li>
                <label className="mini-projects" htmlFor="mini">
                  mini projects <i className="fas fa-plus" />
                </label>
                <input id="mini" type="checkbox" />
                <ul className="sub-sub-div">
                  <li>
                    <a href>project 1</a>
                  </li>
                  <li>
                    <a href>project 2</a>
                  </li>
                  <li>
                    <a href>project 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="js">
              JavaScript <i className="fas fa-plus" />
            </label>
            <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href>coming soon🔥</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
