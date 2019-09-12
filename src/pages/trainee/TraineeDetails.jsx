import React, { Component, useState } from 'react'

import trainee from './data/trainee';
import PlayerList from './style';


function TraineeDetails({ match }) {
let str = match.url;
str = str.replace(/\//g, "");
 const traineeData =   trainee.filter((data) => data.id === str);
 console.log(traineeData);
 return (
   <>
     <PlayerList>
       <ul>
         <li><figure><img src={traineeData[0].img} style={{maxWidth:'200px'}}/></figure></li>
         <li>Name: {traineeData[0].name}</li>
         <li>Email: {traineeData[0].email}</li>
         <li>{traineeData[0].createdAt}</li>
       </ul>
     </PlayerList>
   </>
    )
}

export default TraineeDetails;
