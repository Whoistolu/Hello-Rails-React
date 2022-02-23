import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { List } from "semantic-ui-react";

export const GET_THINGS_REQUEST = "GET_THINGS_REQUEST";
export const GET_THINGS_SUCCESS = "GET_THINGS_SUCCESS";

function getThings() {
  console.log("getThngs() Action!!");
  return (dispatch) => {
    dispatch({ type: GET_THINGS_REQUEST });
    return fetch(`v1/greetings.json`)
      .then((response) => response.json())
      .then((json) => dispatch(getThingsSuccess(json)))
      .catch((error) => console.log(error));
  };
}

export function getThingsSuccess(json) {
  return {
    type: GET_THINGS_SUCCESS,
    json,
  };
}

class HelloWorld extends React.Component {
  render() {
    const { greetings } = this.props;
    const thingsList = [greetings].map((greeting) => {
      return (
        <List.Item className="list">
          <List.Icon
            name="arrow circle right"
            size="large"
            verticalAlign="middle"
          />
          <List.Content>
            <List.Header as="a">{greeting.message}</List.Header>
            <p>Display</p>
            <br />
          </List.Content>
        </List.Item>
      );
    });
    return (
      <React.Fragment>
        <div className="grettingDiv">
          <p className="pTag"> Greeting: {this.props.greeting} </p>
          
          <button
            className="getThingsBtn"
            onClick={() => this.props.getThings()}
          >
            Will Greet You
          </button>
          <br />
          <ul className="thingsClass">{thingsList}</ul>
        </div>
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  greetings: (state) => state.greetings,
});

const mapDispatchToProps = { getThings };

HelloWorld.propTypes = {
  greeting: PropTypes.string,
};
export default connect(structuredSelector, mapDispatchToProps)(HelloWorld);
