import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import HelloWorld from "./HelloWorld";
import configureStore from "../configureStore.tsx";
const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HelloWorld greetin={"Friend"} />} />
            <Route path="/hello" element={<HelloWorld greetin={"Friend"} />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
