// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import routes from '../constants/routes';
import * as types from './TabTypes';
import Tab from './Tab';

type Props = {
  points: {
    start: Array,
    stop: Array,
    continue: Array
  },
  actions: {
    update: point => void,
    create: point => void,
    remove: point => void,
    incrementLike: point => void,
    decrementLike: point => void,
    incrementLikeAll: () => void,
    decrementLikeAll: () => void
  }
};

export default class Board extends Component<Props> {
  props: Props;

  render() {
    const { points, actions } = this.props;
    return (
      <Container fluid>
        <Breadcrumb tag="nav" listTag="div">
          <BreadcrumbItem>
            <Link to={routes.HOME}>Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Retroboard</BreadcrumbItem>
        </Breadcrumb>
        <Row>
          <Col sm="4">
            <h3 className="text-center">Continue</h3>
            <Tab
              actions={actions}
              points={points.continue}
              pointType={types.CONTINUE_POINT}
            />
          </Col>
          <Col sm="4">
            <h3 className="text-center">Start</h3>
            <Tab
              actions={actions}
              points={points.start}
              pointType={types.START_POINT}
            />
          </Col>
          <Col sm="4">
            <h3 className="text-center">Stop</h3>
            <Tab
              actions={actions}
              points={points.stop}
              pointType={types.STOP_POINT}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
