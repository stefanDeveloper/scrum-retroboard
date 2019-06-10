// @flow
import React, { Component } from 'react';
import { Label, Container } from 'reactstrap';
import { connect } from 'react-redux';
import Point from '../point/Point';
import styles from './PointList.css';
import {
  update as updatePoint,
  remove as removePoint,
  incrementLike as incrementLikePoint
} from '../../actions/pointAction';

type Props = {
  pointType: string,
  sprintId: string,
  sprints: Array,
  sprintMap: Map,
  sprint: object,
  update: (point: object, pointType: string) => void,
  remove: (point: object, pointType: string) => void,
  incrementLike: (point: object, pointType: string) => void
};

class PointList extends Component<Props> {
  props: Props;

  textChanged(event, point) {
    const newPoint = point;
    const { value } = event.target;
    const { update } = this.props;
    const { pointType } = this.props;
    const { sprintId } = this.props;
    newPoint.text = value;
    update(newPoint, pointType, sprintId);
  }

  render() {
    const {
      pointType,
      incrementLike,
      remove,
      sprintId,
      sprints,
      sprintMap = new Map(sprints.map(el => [el.id, el])),
      sprint = sprintMap.get(sprintId)
    } = this.props;
    if (sprint.points[pointType].length > 0) {
      return (
        <Container className={styles.container} fluid>
          {sprint.points[pointType].map(point => (
            <Point
              key={point.id}
              point={point}
              onChange={event => this.textChanged(event, point)}
              onLikeClick={() => incrementLike(point, pointType, sprintId)}
              onDeleteClick={() => remove(point, pointType, sprintId)}
            />
          ))}
        </Container>
      );
    }
    return <Label className={styles.label}>No bullet point added yet!</Label>;
  }
}

const mapStateToProps = state => ({
  sprints: state.scrum.sprints
});

const mapDispatchToProps = dispatch => ({
  update: (point, pointType, sprintId) =>
    dispatch(updatePoint(point, pointType, sprintId)),
  incrementLike: (point, pointType, sprintId) =>
    dispatch(incrementLikePoint(point, pointType, sprintId)),
  remove: (point, pointType, sprintId) =>
    dispatch(removePoint(point, pointType, sprintId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PointList);
