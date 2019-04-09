import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentItems: props.items,
    };

    this.onDelete = this.onDelete.bind(this);

    this.ref = React.createRef();
  }

  render() {
    return (
        <li>
            <span ref={this.ref}>{ this.props.children } </span>
            <button onClick={this.onDelete}>Delete</button>
        </li>
    );
  }
  onDelete(){
    // this regex deletes trailing spaces at the end
    this.props.onDelete(this.ref.current.innerText.replace(/\s*$/,''));
  }
}

Item.propTypes = {
  onDelete: PropTypes.func.isRequired
};
export default Item;
