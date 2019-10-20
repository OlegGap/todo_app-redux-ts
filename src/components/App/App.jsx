import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';
import Header from '../Header/Header';
import Lists from '../Lists/ListsContainer.js';

// type AppProps = {
//   loading: boolean;
//   error: boolean;
//   profile: string;
//   fetchCards: any;
//   fetchProfile: any;
// };

class App extends React.Component {
  componentDidMount() {
    this.props.fetchCards();
    this.props.fetchProfile();
  }

  render() {
    return (
      <>
        <Header profile={this.props.profile} />
        <Lists />
        <ToastContainer />
      </>
    );
  }
}

export default App;
