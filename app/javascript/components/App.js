import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import HelloWorld from "./HelloWorld";
import configureStore from "../configureStore";
const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<HelloWorld/>} />
            {/* <Route path="/hello" element={<HelloWorld greeting={"Friend"} />} /> */}
          </Routes>
        </Router>
      </Provider>
    );
  }
}

export default App;
