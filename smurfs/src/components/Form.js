import React, { useState } from 'react';

import { connect } from 'react-redux';

import { giveSmurf } from '../actions';

const Form = props => {
  // console.log('Props on Form: ', props)

  const [formState, setFormState] = useState({
    name: '',
    age: '',
    height: ''
  })

  const onChange = e => {
    setFormState({ 
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    giveSmurf(formState)
    setFormState({
      name: '',
      age: '',
      height: ''
    })
  }

  return (
    <form onSubmit={ handleSubmit }>
      <h4>Add a Smurf to your village</h4>
      <input 
        type ='text'
        name = 'name'
        placeholder = 'Smurfs Name'
        value={formState.name}
        onChange={onChange}
      />
      <input 
        type ='text'
        name = 'age'
        placeholder = 'Smurfs Age'
        value={formState.age}
        onChange={onChange}
      />
      <input 
        type ='text'
        name = 'height'
        placeholder = 'Smurfs Height'
        value={formState.height}
        onChange={onChange}
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