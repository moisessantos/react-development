import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Item } from '..';

class TodoList extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      currentItems: props.items,
    };
    this.addTodo = this.addTodo.bind(this);
  }
  render() {
    return (
      <div className="container">
        <h1>This is my todo list</h1>
        {this.renderAddTodo()}     
        { this.state.currentItems
            .map((item, index) => <Item key={index} onDelete={this.removeTodo.bind(this)}>{item}</Item>) }
      </div>
    );
  }

  renderAddTodo() {
    return (
      <div className="addTodo">
        <input type="text" />
        <button onClick={ (e) => this.addTodo(e.target.previousSibling) }>Add todo</button>
      </div> 
    );
  }

  addTodo(element) {
    if(this.state.currentItems.includes(element.innerHTML)){
      return;
    }
    
    this.state.currentItems.push(element.innerHTML);
    element.innerHTML = '';
    
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
