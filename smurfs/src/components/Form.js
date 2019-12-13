import React from 'react';

import { connect } from 'react-redux';

const Form = () => {
  return (
    <form>
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
    name: state.name,
    age: state.age,
    height: state.height
  }
}

export default connect(mapStateToProps, {})(Form);