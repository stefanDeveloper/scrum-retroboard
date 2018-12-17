// @flow
import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import PointList from './PointList';

type Props = {
  points: Array,
  pointType: string,
  actions: {
    create: point => void,
    incrementLikeAll: () => void,
    decrementLikeAll: () => void
  }
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
        <Row style={{ padding: '.5rem' }}>
          <Col>
            <Button
              color="outline-info"
              className="align-center"
              onClick={() => actions.create(pointType)}
            >
              <i className="fa fa-plus" />
            </Button>
          </Col>
          <Col>
            <Button
              color="outline-success"
              className="align-center"
              onClick={() => actions.incrementLikeAll(pointType)}
            >
              <i className="fa fa-heart" />
            </Button>
          </Col>
          <Col>
            <Button
              color="outline-danger"
              className="align-center"
              onClick={() => actions.decrementLikeAll(pointType)}
            >
              <i className="far fa-heart" />
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
