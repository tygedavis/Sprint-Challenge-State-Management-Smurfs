import React from 'react';

const SmurfCard = props => {
  console.log('Props on SmurfCard: ', props)
  return (
    <div key={props.key}>
      <p>{props.smurf.name}</p>
      <p>{props.smurf.age}</p>
      <p>{props.smurf.height}</p>
    </div>
  )
};

export default SmurfCard;