import { connect } from 'react-redux';
import {
  create as createPoint,
  incrementLikeAll
} from '../actions/pointAction';
import {
  remove as removeImage,
  update as updateImage
} from '../actions/imageAction';

import Board from '../components/board/Board';

const mapStateToProps = state => ({
  sprints: state.scrum.sprints
});

const mapDispatchToProps = dispatch => ({
  incrementLikeAll: (pointType, sprintId) =>
    dispatch(incrementLikeAll(pointType, sprintId)),
  createPoint: (pointType, sprintId) =>
    dispatch(createPoint(pointType, sprintId)),
  updateImage: (image, pointType, sprintId) =>
    dispatch(updateImage(image, pointType, sprintId)),
  removeImage: (pointType, sprintId) =>
    dispatch(removeImage(pointType, sprintId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
