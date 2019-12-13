import React from 'react';

import { connect } from 'react-redux';

//Components
import SmurfCard from './SmurfCard';

const SmurfCards = props => {
  console.log('Props on SmurfCard(s)', props)
  return (
    <div>
      <SmurfCard />
    </div>
  )
};

const mapStateToProps = state => {
  return{
    name: state.name,
    age: state.age,
    height: state.height
  }
}

export default connect(mapStateToProps, {})(SmurfCards);