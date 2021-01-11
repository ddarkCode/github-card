import { Component } from 'react'
import CardList from './CardList';
import Form from './Form';
import './App.css';

class App extends Component {
  render() {
    const testData = [
    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "Facebook"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Form />
        <CardList profiles={testData} />
      </div>
    );
  }
}

export default App;