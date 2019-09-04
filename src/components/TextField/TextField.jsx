import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style';

class TextField extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
  }

  render() {
     const { value, error, ...rest } = this.props;
    const erroStyle = error ? style.error : {};
    return (
      <div>
        <input type="text" {...rest} />
        {

          error && (
            <span style={{ ...erroStyle }}>{error}</span>
          )
        }
      </div>
    );
  }
}

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}
TextField.defaultProps = {
  error: '',
}
export default TextField;
