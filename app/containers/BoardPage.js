import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Board from '../components/board/Board';
import * as PointersActions from '../actions/points';

const mapStateToProps = state => ({
  points: state.pointsReducer
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(PointersActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
