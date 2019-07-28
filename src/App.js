import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { testAction } from './actions';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    this.props.testAction('ya jalo');
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

App.propTypes = {
  testAction: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  testAction: value => dispatch(testAction(value)),
});

const mapStateToProps = () => { }

export default connect(mapStateToProps, mapDispatchToProps)(App);
