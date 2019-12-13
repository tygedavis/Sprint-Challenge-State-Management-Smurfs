import React from 'react';

import { connect } from 'react-redux';

import { giveSmurf } from '../actions';

const Form = props => {
  console.log('Props on Form: ', props)

  const handleSubmit = e => {
    e.preventDefault();
    giveSmurf()
  }

  return (
    <form onSubmit={ handleSubmit }>
      <h4>Add a Smurf to your village</h4>
      <input 
        type ='text'
        name = 'name'
        placeholder = 'Smurfs Name'
      />
      <input 
        type ='text'
        name = 'age'
        placeholder = 'Smurfs Age'
      />
      <input 
        type ='text'
        name = 'height'
        placeholder = 'Smurfs Height'
      />
      <button type='submit'>Add Smurf</button>
    </form>
  )
};

const mapStateToProps = state => {
  return {
    smurf: state.smurf,
    error: state.error
  }
}

export default connect(mapStateToProps, { giveSmurf })(Form);