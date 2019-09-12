import React, { Component, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import TraineeList from './TraineeList';
import TraineeDetails from './TraineeDetails';
import trainee from './data/trainee';

const TraineeRoute = ({ match }) => {
    // const [count, setCount] = useState({ x: 0 });
   // console.log("JourneyQuestions", count)
    return (
      <>
        <Router>
          <TraineeList />
          <Route path={`${match.url}:id`} component={TraineeDetails} />
        </Router>
      </>
    )
}

export default TraineeRoute;
