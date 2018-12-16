// @flow
import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import PointList from './PointList';

type Props = {
  points: Array,
  pointType: string,
  fluidContainer: boolean,
  actions: {
    create: point => void,
    incrementLikeAll: () => void,
    decrementLikeAll: () => void
  }
};

export default class Tab extends Component<Props> {
  props: Props;

  render() {
    const { points, pointType, actions, fluidContainer = true } = this.props;
    return (
      <Container fluid={fluidContainer}>
        <Row>
          <PointList points={points} actions={actions} pointType={pointType} />
        </Row>
        <Row>
          <Col>
            <Button color="link" onClick={() => actions.create(pointType)}>
              <i className="fa fa-plus" />
            </Button>
          </Col>
          <Col>
            <Button
              color="link"
              onClick={() => actions.incrementLikeAll(pointType)}
            >
              <i className="fa fa-heart" />
            </Button>
          </Col>
          <Col>
            <Button
              color="link"
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
