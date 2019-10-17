import { connect } from 'react-redux';
import * as todoOperations from '../../redux/todoCards/todoOperations';
import fetchProfile from '../../redux/profile/profileOperations';
// eslint-disable-next-line import/no-unresolved
import App from './App.tsx';

const mapDispatchToProps = {
  fetchCards: todoOperations.fetchCards,
  fetchProfile,
};

export default connect(
  null,
  mapDispatchToProps,
)(App);
