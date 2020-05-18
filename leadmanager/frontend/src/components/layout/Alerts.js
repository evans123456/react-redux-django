import React from "react";
import { useAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Alerts = () => {
  const alert = useAlert();

  const propTypes = {
    error: PropTypes.object.isRequired,
  };

  return (
    <button
      onClick={() => {
        alert.show("Oh look, an alert!");
      }}
    >
      Show Alert
    </button>
  );
};

const mapStateToProps = (state) => ({
  error: state.errorsReducer,
});

export default connect(mapStateToProps)(Alerts);
