import React from 'react';
import hrImage from '../../img/hr.png';

export default class Content extends React.Component {
  render() {
    return (
      <div className="innerContent">

        <a className="title"><h1>About</h1></a>
        <span id="about" />
        <p className="lead">
          I'm a Sr. Web Developer & DIYer living in Greater Seattle, WA. I'm currently working fulltime at
          {' '}
          <a href="http://Matcherino.com" target="_blank">Matcherino.com</a>
          . In my spare time, I'm hacking away on various projects, remodeling my home or outdoors exploring.
        </p>

        <div className="crookedSpace"><img src={hrImage} alt="crookedSpacer" /></div>

        <a className="title"><h1>Contact</h1></a>
        <span id="about" />
        <p className="lead">
          Drop me a line: <a href="mailto:matt@matthewgerard.com">matt@matthewgerard.com</a>
        </p>

      </div>
    );
  }
}
