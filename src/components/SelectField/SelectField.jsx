import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import style from './style';
// import TextField from '../TextField/TextField';
import { game } from '../../configs/constant';


class SelectField extends Component {

    constructor(props) {
        super(props);
        this.state = {
            RadioOptions: ''     
 }
}

radioSelectOptions= (e) => {
    this.setState({
        RadioOptions:e.currentTarget.value,

});
console.log(this.state);
}

render() {
    // const {  RadioOptions, SelectOptions } = this.state;
    const { SelectOptions, handleSelectOption } = this.props;
        return (
          <div>
            <select onChange={handleSelectOption} SelectOptions={SelectOptions} >
              <option value="select">Select</option>
              {game.map(field => (
              <option value={ field.label }>{ field.label }</option>
              ))}
            </select>
          </div>
      )
    }
}

SelectField.propTypes = {
    error: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}
SelectField.defaultProps = {
   

}
export default SelectField;
