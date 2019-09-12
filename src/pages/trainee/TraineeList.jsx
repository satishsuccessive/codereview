import React from 'react';
import {
    BrowserRouter as Router,
    Link,
  } from 'react-router-dom';
import trainee from './data/trainee';

const TraineeList = () => {
    return (
      <>
        <ul>
        
          { trainee.map((field, index) => {
            return(
          <Link to={field.id}>
              <li>{field.name}</li>
            </Link>
            )
                })}

        </ul>
      </>
  )
}
export default TraineeList;
