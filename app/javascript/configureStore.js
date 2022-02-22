import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { GET_THINGS_SUCCESS } from "./components/HelloWorld";

import { composeWithDevTools } from "redux-devtools-extension";


const inititalState = {
  things: [
    {
      name: "test",
      guid: "12ttt3",
    },
  ],
};

function rootReducer(state, action) {
  console.log(action.type);
  switch (action.type) {
    case GET_THINGS_SUCCESS:
      return { things: action.json.things };
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
