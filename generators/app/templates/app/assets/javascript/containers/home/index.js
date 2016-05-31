import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Header from '../../components/shared/header'


class homeContainer extends Component {
  render() {
    return (
      <section>
        <Header />
        {this.props.children}
        <div className="container">
          <hr/>
          <footer>
            <p>&copy; 2016.</p>
          </footer>
        </div>
      </section>
    );
  }
}

export default homeContainer;
