// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Navbar, Nav, NavItem } from 'reactstrap';
import routes from '../constants/routes';
import * as types from './TabTypes';
import Tab from './Tab';

type Props = {
  points: {
    start: Array,
    stop: Array,
    continue: Array
  },
  fluidContainer: boolean,
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
    const { points, fluidContainer = true, actions } = this.props;
    return (
      <Container fluid={fluidContainer}>
        <Navbar color="light" light expand="md" data-tid="backButton">
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to={routes.HOME}>
                <i className="fa fa-arrow-left fa-3x" />
              </Link>
            </NavItem>
          </Nav>
        </Navbar>
        <Row>
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
          <Col sm="4">
            <h3 className="text-center">Continue</h3>
            <Tab
              actions={actions}
              points={points.continue}
              pointType={types.CONTINUE_POINT}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
