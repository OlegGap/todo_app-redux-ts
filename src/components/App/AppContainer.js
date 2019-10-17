import { connect } from 'react-redux';
import * as todoOperations from '../../redux/todoCards/todoOperations';
import fetchProfile from '../../redux/profile/profileOperations';
import App from './App.tsx';

const mapDispatchToProps = {
  fetchCards: todoOperations.fetchCards,
  fetchProfile,
};

export default connect(
  null,
  mapDispatchToProps,
)(App);
