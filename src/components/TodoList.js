import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

class TodoList extends Component {
  render() {
    return (
      <div>
        <h1>This is my todo list</h1>
        { this.props.items.map((item, index) => <Item key={index}>{item}</Item>) }
      </div>
    );
  }
}

TodoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string)
};

export default TodoList;
