// @flow
import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import PointList from '../pointList/PointList';

type Props = {
  points: Array,
  pointType: string
};

export default class Tab extends Component<Props> {
  props: Props;

  render() {
    const { points, pointType } = this.props;
    return (
      <Container fluid>
        <Row>
          <PointList points={points} pointType={pointType} />
        </Row>
      </Container>
    );
  }
}
