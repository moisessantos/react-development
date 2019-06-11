import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { Item } from '..';

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentItems: props.items,
    };
    this.addTodo = this.addTodo.bind(this);
    this.ref = createRef();
  }
  render() {
    return (
      <div className="container">
        <h1>This is my todo list</h1>
        <ul className="list-group">
          {this.renderAddTodo()}
          { this.state.currentItems
              .map((item, index) => <Item key={index} handleClick={this.removeTodo.bind(this)}>{item}</Item>) }
        </ul>
      </div>
    );
  }

  renderAddTodo() {
    return (
      <div className="list-group-item list-group-item-action">
        <input type="text" class="addTodo form-control" />
        <button className="btn btn-primary" onClick={ (e) => this.addTodo(e.target.previousSibling) }>Add todo</button>
      </div> 
    );
  }

  addTodo(element) {
    if(this.state.currentItems.includes(element.value)){
      return;
    }
    
    const { currentItems } = this.state;
    currentItems.push(element.value);

    element.value = '';

    this.setState({
      currentItems,
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
