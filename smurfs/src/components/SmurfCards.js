import React, { useEffect } from 'react';

import { connect } from 'react-redux';

//Components
import SmurfCard from './SmurfCard';
import Form from './Form';

//Actions
import { getSmurf } from '../actions';

const SmurfCards = props => {
  
  useEffect(() => {
    props.getSmurf()
  }, [props.smurf.length]) 
  // console.log('Props on SmurfCard(s)', props)
  return (
    <div>
      {props.smurf && props.smurf.map((item) => {
        return (
          <>
            <SmurfCard key={props.smurf.id} smurf={item}/>
          </>
          )
      })}
      <Form />
    </div>
  )
};

const mapStateToProps = state => {
  return{
    smurf: state.smurf,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, { getSmurf })(SmurfCards);