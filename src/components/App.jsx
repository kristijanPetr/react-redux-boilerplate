import React, { Component } from "react";
// import { firebaseApp, userRef } from "../firebase";
import { connect } from "react-redux";
import { browserHistory } from "react-router";

// Components
import Header from "./Header";
//Actions
// import { fetchStories } from "../actions/index";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "not at bottom"
    };
  }

  componentWillMount() {}

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <div>
        <div className="test">
          <div> React Redux Starter Kit</div>
          <pre>Included Firebase , redux-promise , axios</pre>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { stories } = state;
  return {
    stories
  };
};

export default connect(mapStateToProps, {})(App);
