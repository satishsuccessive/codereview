import React from 'react';
import { BrowserRouter as Router, Route, Link, Match, Redirect, Switch } from 'react-router-dom';
import Slider from './components/Slider';
 import TraineePage from './pages/trainee/trainee';
 import TraineeRoute from './pages/trainee/traineeRoute';
 import TextField from './components/TextField'
 // import Navbar from './layouts/components/Navbar';
 import Login from './components/Login'
 import NotFound from './pages/NotFound';
// import { InputFieldPage } from './pages/index';
// import { Navigation } from './style';
import InputFieldPage from './pages/InputDemo';
import { createMuiTheme, theme } from './theme';
import { DashboardRoute, LoginLayoutRoute } from './routes';

const App = () => 
 // const erroStyle = props.error ? style.error : {};
   (
    <div className="App">
      <createMuiTheme theme={theme}>
      {/* <TextFielners={(PUBLIC_IMAGE_FOLDER+'1.jpg')} alt="image1" height="400" random="true" />
      <Slider banners=d value="Name" error="Its an error" /> */}
      {/* <Slider ban"images/2.jpg" alt="image2" height="400" random="true" />
      <Slider alt="image2" height="400" random="true" /> */}
      {/* <TextFieldPage /> */}
      {/* <Slider /> */}
      {/* <InputFieldPage /> */}
      <Router>
        <Switch>
          <DashboardRoute exact path="/" component={TraineeRoute} />
          <DashboardRoute path="/text-field-demo" component={InputFieldPage} />
          <LoginLayoutRoute path="/login" component={Login} />
          <DashboardRoute path="/input-demo" component={Slider} />
          <DashboardRoute path="/logout" component={TextField} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      </createMuiTheme>   
    </div>
  )


export default App;
