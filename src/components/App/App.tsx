import React from 'react';
import './styles.css';
import Header from '../Header/Header';
import ListContainer from '../ListContainer/ListContainer';

type AppProps = {
  loading: boolean;
  error: boolean;
  profile: string;
  fetchCards: any;
  fetchProfile: any;
};

export class App extends React.Component<AppProps> {
  componentDidMount() {
    this.props.fetchCards();
    this.props.fetchProfile();
  }

  render() {
    return (
      <>
        <Header profile={this.props.profile} />
        <ListContainer />
      </>
    );
  }
}

export default App;
