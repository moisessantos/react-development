import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor(){
    super();
    this.ref = React.createRef();
    this.filter = this.filter.bind(this);
  }

  render() {
    return (
      <form className="container">
        <input type="text" placeholder="Search..." ref={this.ref} onChange={this.filter}/>
        <p>
          <input type="checkbox" onClick={this.props.onClick} />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
  
  filter() {
    this.props.filter(this.ref.current.value);
  }
}

SearchBar.propTypes = {
  filter: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

export default SearchBar;
