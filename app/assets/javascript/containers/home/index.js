import React, { Component } from 'react';
import { browserHistory } from 'react-router';

const homeContainer = React.createClass({
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-inverse">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-9" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Brand</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-9">
              <ul className="nav navbar-nav">
                <li><a href="#/home">Home</a></li>
              </ul>
            </div>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  },
});

export default homeContainer;
