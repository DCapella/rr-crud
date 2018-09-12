import { connect } from 'react-redux';
import { addMessage, delMessage } from "../actions/index.js";
import { DisplayMessages } from "../components/index.js";

export const mapStateToProps = state => {
  return {
    messages: state,
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    submitNewMessage: message => dispatch(addMessage(message)),
    deleteMessage: () => dispatch(delMessage()),
  };
};

export const Container = connect(mapStateToProps, mapDispatchToProps)(DisplayMessages);
