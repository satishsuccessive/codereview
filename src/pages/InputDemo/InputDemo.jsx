import React, { Component } from 'react';
import * as yup from 'yup';
import TextField from '../../components/TextField/TextField';
import SelectField from '../../components/SelectField/SelectField';
import RadioField from '../../components/RadioField/RadoiField';
import Button from '../../components/Button/Button';

const schema = yup.object().shape({
  name: yup.string().min(3).required().label('name'),
});

class InputFieldPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SelectOptions: '',
      RadioOptions: '',
      value: '',
      buttonDisable: true,
      error: '',
      name: '',
    }
  }

  handleNameChange = (field) => (event) => {
    console.log('in handler')
     this.setState({ [field]: event.target.value });
     // this.handleValidate();
    // schema
    //   .isValid({
    //     name: this.state.value,
    //   })
    //   .then((valid) => {
    //     console.log(valid, "valueee")
    //     this.setState({ buttonDisable: !valid });
        
    //   });
    // schema.validate({ name: this.state.value }).catch((err) => {
    //   console.log(err.name);
    //   this.setState({ error: err.name });

    // });
  }

  // handleBlur = () => {
  //  this.handleValidate();
  // }

  handleValidate = () => {
    const { name } =  this.setState;
     console.log(name);
      schema.validate(
        { name },
        { abortEarly: false },
      )
      .then(() => {
       // console.log(valid, "valueee")
       this.handleErrors(null);
      })
      .catch((errors) => {
        this.handleErrors(errors);
      });
  }

  handleErrors = (errors) => {
    const parsedErrors = {};
    if (errors) {
      errors.inner.forEach((error) => {
        parsedErrors[error.path] = error.message;
      });
    }
   this.setState({
    errors: parsedErrors,
    })
    console.log(this.errors);
  }

  handleSelectOption = (e) => {
    this.setState({
      SelectOptions: e.currentTarget.value,
    });
    console.log(this.state);
  }

  radioSelectOptions = (e) => {
    this.setState({
      RadioOptions: e.currentTarget.value,

    });
    console.log(this.state);
  }

  hasErrors = () => {

  }

  isTouched = () => {
console.log('touccchhhhhhhhhhhh');
this.handleValidate();
  }

  getError = () => {
    // this.handleErrors();
  }

  render() {
    const { SelectOptions, RadioOptions, buttonDisable, error } = this.state;
    return (
      <div>
        <p> Name </p>
        {/* onBlur={this.handleBlur('name')} */}
        <TextField name="name" value="" onBlur={this.isTouched} onChange={this.handleNameChange('name')} error={this.getError('name')} />
        <p> Select the game you play? </p>
        <SelectField
          handleSelectOption={this.handleSelectOption}
          SelectOptions={SelectOptions}
        />
        <RadioField
          SelectOptions={SelectOptions}
          RadioSelectOptions={this.radioSelectOptions}
          RadioOptions={RadioOptions}
        />
        <Button disabled={buttonDisable}> Submit </Button>
      </div>
    )
  }
}
export default InputFieldPage;
