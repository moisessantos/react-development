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
          <input type="checkbox" onClick={this.props.onClick} />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
  
  filter(e) {
    this.props.filter(e.target.value);
  }
}

SearchBar.propTypes = {
  filter: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

export default SearchBar;
