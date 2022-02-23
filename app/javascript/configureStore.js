import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { GET_THINGS_SUCCESS } from "./components/HelloWorld";

import { composeWithDevTools } from "redux-devtools-extension";


const inititalState = {
  greetings: [
    {
      message: "anything",
    },
  ],
};

function rootReducer(state, action) {
  console.log(action.type);
  switch (action.type) {
    case GET_THINGS_SUCCESS:
      return { greetings: action.json.greetings };
  }
  return state;
}

export default function configureStore() {
  const store = createStore(
    rootReducer,
    inititalState,
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
}
