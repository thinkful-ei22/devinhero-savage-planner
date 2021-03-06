import React from 'react';
import {connect} from 'react-redux';

export function DisplayEdges(props){

  const edgeList = props.character.stats.advances
    .filter(advance => advance.xp <= props.character.maxXp)
    .map(advance => (advance.edgeId ? advance.edgeId.name : null))
    .filter(name => name)
    .join(', ');

  return(
    <div className="display-edges">Edges: {edgeList}</div>
  );
}


const mapStateToProps = state => ({
  character: state.character
});

export default connect(mapStateToProps)(DisplayEdges);
