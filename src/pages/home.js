import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div className="height100">
        <div id="wrap">

          <div id="header">

            <div className="top-border" />

            <div className="header-content">

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
                    <a href="http://BITBUCKET.ORG/MGERARD" target="_blank">
                      BITBUCKET.ORG/MGERARD <i className="detail-icon bitbucket" />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="logo" />

            </div>

            <div className="bottom-border" />

          </div>

          <div className="container">

            <div className="innerContent">

              <a className="title"><h1>About</h1></a>
              <span id="about" />
              <p className="lead">
                I'm Matt Gerard - a web developer & designer based out of Seattle, WA. I provide custom, high quality web services to a wide range of clients. I've been fortunate enough to see work from large corporate ventures, Artists, and small local businesses. Just about everyone these days has a web presence, in one way or another. Whether they can say it's benefited them or not, is another story. With my help, we'll get your project out there for people to talk about.
              </p>

              <div class="crookedSpace"><img src="img/hr.png" alt="crookedSpacer" /></div>

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
