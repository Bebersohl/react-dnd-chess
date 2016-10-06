import React, { Component, PropTypes } from 'react';
import '../css/components/Square.css';

export default class Square extends Component {
  render() {
    const { dark } = this.props;
    return (
      <div className={ dark ? 'dark' : 'light' }>
        {this.props.children}
      </div>
    );
  }
}

Square.propTypes = {
  dark: PropTypes.bool
};
