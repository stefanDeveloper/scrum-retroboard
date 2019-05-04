import { connect } from 'react-redux';
import Board from '../components/board/Board';
import {
  incrementLikeAll,
  create as createPoint
} from '../actions/pointAction';
import {
  update as updateImage,
  remove as removeImage
} from '../actions/imageAction';

const mapStateToProps = state => ({
  points: state.pointsReducer
});

const mapDispatchToProps = dispatch => ({
  incrementLikeAll: pointType => dispatch(incrementLikeAll(pointType)),
  createPoint: pointType => dispatch(createPoint(pointType)),
  updateImage: (image, pointType) => dispatch(updateImage(image, pointType)),
  removeImage: pointType => dispatch(removeImage(pointType))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
