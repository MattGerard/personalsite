import React from 'react';
import Content from '../components/Content';
import Header from '../components/Header';

export default class App extends React.Component {
  render() {
    return (
      <div className="height100">
        <div id="wrap">

          <Header />

          <div className="container">

            <Content />
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
