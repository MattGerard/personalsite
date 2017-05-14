import React from 'react';
import logo from '../../img/logo.png';

export default class Header extends React.Component {
  render() {
    return (
      <div id="header">

        <div className="top-border" />

        <div className="header-content">
          <div className="logo-wrap">
            <div className="logo"><img className="logo-img" src={logo} /></div>
          </div>
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
    );
  }
}
