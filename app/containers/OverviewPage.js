import { connect } from 'react-redux';
import { add, remove } from '../actions/sprintAction';

import Overview from '../components/overview/Overview';

const mapStateToProps = state => ({
  sprints: state.scrum.sprints
});

const mapDispatchToProps = dispatch => ({
  createSprint: () => dispatch(add()),
  removeSprint: sprint => dispatch(remove(sprint))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Overview);
