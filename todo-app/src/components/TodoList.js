import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentItems: props.items,
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);

    this.ref = React.createRef();
  }
  render() {
    return (
      <div className="container">
        <h1>This is my todo list</h1>
        {this.renderAddTodo()}     
        { this.state.currentItems
            .map((item, index) => <Item key={index} onDelete={this.removeTodo}>{item}</Item>) }
      </div>
    );
  }

  renderAddTodo() {
    return (
      <div className="addTodo">
        <input type="text" ref={this.ref} />
        <button onClick={ this.addTodo }>Add todo</button>
      </div> 
    );
  }

  addTodo() {
    if(this.state.currentItems.includes(this.ref.current.value)){
      return;
    }
    
    this.state.currentItems.push(this.ref.current.value);
    this.ref.current.value = '';
    
    this.setState({
      currentItems: this.state.currentItems,
    });
  }

  removeTodo(todo) {
    this.setState({
      currentItems: this.state.currentItems.filter(x => x !== todo),
    });
  }
}

TodoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string)
};

export default TodoList;
