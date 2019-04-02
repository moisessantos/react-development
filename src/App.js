import React, { Component } from 'react';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return <TodoList items={['Turn off the alarm', 'Have breakfast']} />;
  }
}

export default App;
