import React, { Component } from 'react';
import * as yup from 'yup';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import AddDialog from './index';

const schema = yup.object().shape({
  name: yup.string().min(3).required().label('name'),
  // email: yup.string().email().required().label('email'),
});

class TraineePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      errors: '',
     };
  }

  validateForm = (e) => {
     const name  =   e.target.value;
    // { field } =  e.target.value;
     console.log('name errror', this.state);
     schema.validate(
       { name },
       { abortEarly: false },
     )
     .then(() => {
      console.log('valid')
      this.handleErrors(null);
     })
     .catch((errors) => {
      this.handleErrors(errors);
      console.log('error>>>', errors);
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
    console.log('erro>>>>>', this.state.errors);
  }

getError = () => {
// this.handleErrors();
}

  render() {
    const { name, errors } = this.state;
    return (
      <div>
        <AddDialog onChange={this.validateForm} errorName={errors.name}> </AddDialog>
        {/* <Route path={`${match.url}/q1`} render={routeProps => <JourneyQuesOne {...routeProps} setCount={setCount} count={count} />} /> */}
      </div>
    )
  }
}
export default TraineePage;
