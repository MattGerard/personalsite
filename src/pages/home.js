import React from 'react';
import hrImage from '../img/hr.png';

export default class App extends React.Component {
  render() {
    return (
      <div className="height100">
        <div id="wrap">

          <div id="header">

            <div className="top-border" />

            <div className="header-content">
              <div className="logo" />
              <div className="Details">
                <ul className="ContactDetail">
                  <li>
                    <a href="mailto:MATT@MATTHEWGERARD.COM" target="_blank">
                      MATT@MATTHEWGERARD.COM <i className="detail-icon email" />
                    </a>
                  </li>
                  <li>
                    <a href="http://www.linkedin.com/in/mattgerard/" target="_blank">
                      LINKEDIN.COM/IN/MATTGERARD <i className="detail-icon linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/MattGerard" target="_blank">
                      GITHUB.COM/MATTGERARD <i className="detail-icon bitbucket" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bottom-border" />

          </div>

          <div className="container">

            <div className="innerContent">

              <a className="title"><h1>About</h1></a>
              <span id="about" />
              <p className="lead">
                I'm a web developer, designer, DIYer based out of Seattle, WA. I provide custom, high quality web services to a wide range of clients. I've been fortunate enough to see work from large corporate ventures, Artists, and small local businesses.
              </p>

              <div className="crookedSpace"><img src={hrImage} alt="crookedSpacer" /></div>

              <a className="title"><h1>Contact</h1></a>
              <span id="about" />
              <p className="lead">
                Drop me a line: <a href="mailto:matt@matthewgerard.com">matt@matthewgerard.com</a>
              </p>

            </div>
            <div id="push" />
          </div>
        </div>

        <div id="footer">
          <div className="container">
            <p>© 2017 MATTHEW GERARD</p>
          </div>
        </div>
      </div>
    );
  }
}
