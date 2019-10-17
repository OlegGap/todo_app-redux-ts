import React from 'react';
import './styles.css';
import Header from '../Header/Header';

export class App extends React.Component {
  componentDidMount() {
    // this.props.fetchCards();
    // this.props.fetchProfile();
    // axios.get('http://localhost:8086/posts');
    // .then(data => console.log(data.data));
  }

  render() {
    return <Header name="Oleg" />;
  }
}

export default App;
