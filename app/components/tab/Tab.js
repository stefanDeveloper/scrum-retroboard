// @flow
import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import PointList from '../pointList/PointList';

type Props = {
  pointType: string,
  sprintId: string
};

class Tab extends Component<Props> {
  props: Props;

  render() {
    const { sprintId, pointType } = this.props;
    return (
      <Container fluid>
        <Row>
          <PointList pointType={pointType} sprintId={sprintId} />
        </Row>
      </Container>
    );
  }
}

export default Tab;
