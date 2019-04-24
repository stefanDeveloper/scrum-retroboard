// @flow
import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import PointList from '../pointList/PointList';

type Props = {
  points: Array,
  pointType: string,
  actions: object
};

export default class Tab extends Component<Props> {
  props: Props;

  render() {
    const { points, pointType, actions } = this.props;
    return (
      <Container fluid>
        <Row>
          <PointList points={points} actions={actions} pointType={pointType} />
        </Row>
      </Container>
    );
  }
}
