import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
     }
   }

     render() {
        const { color, disabled, style, value, onClick, children } = this.props;
        return (
          <div>
            <button disabled={disabled} value={value} onClick={onClick}>
             {children}
            </button>
          </div>
          );
    }
}

Button.propTypes = {
    color: PropTypes.string,
    disabled: PropTypes.bool,
    style: PropTypes.string,
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}
Button.defaultProps = {
    color: 'prime',
    disabled: false,
    style: '',
}
export default Button;
