import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor(){
    super();
    this.filter = this.filter.bind(this);
  }

  render() {
    return (
      <form className="container">
        <input type="text" placeholder="Search..." onChange={e => this.filter(e)}/>
        <p>
          <input type="checkbox" onClick={this.props.handleClick} />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
  
  filter(e) {
    this.props.handleFilter(e.target.value);
  }
}

SearchBar.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default SearchBar;
