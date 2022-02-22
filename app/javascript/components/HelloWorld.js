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
    return fetch(`v1/things.json`)
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
    const { things } = this.props;
    const thingsList = things.map((thing) => {
      return (
        <List.Item className="list">
          <List.Icon
            name="arrow circle right"
            size="large"
            verticalAlign="middle"
          />
          <List.Content>
            <List.Header as="a">{thing.name}</List.Header>
            <br />
            <List.Description as="b">{thing.guid}</List.Description>
          </List.Content>
        </List.Item>
      );
    });
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
        <h1>hi</h1>
        <buttton
          className="getThingsBtn"
          onClick={() => this.props.getThings()}
        >
          getThings
        </buttton>
        <br />
        <ul>{thingsList}</ul>
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  things: (state) => state.things,
});

const mapDispatchToProps = { getThings };

HelloWorld.propTypes = {
  greeting: PropTypes.string,
};
export default connect(structuredSelector, mapDispatchToProps)(HelloWorld);
