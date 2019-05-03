import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Board from '../components/board/Board';
import * as PointersActions from '../actions/points';

function mapStateToProps(state) {
  return {
    points: state.points
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(PointersActions, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
