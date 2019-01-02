// @flow
import React, { Component } from 'react';
import { Container, Row, Col, Input } from 'reactstrap';
import styles from './Board.css';
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
    decrementLikeAll: () => void,
    updateTitle: value => void
  }
};

export default class Board extends Component<Props> {
  props: Props;

  textChanged(event) {
    const { value } = event.target;
    const { actions } = this.props;
    actions.updateTitle(value);
  }

  render() {
    const { points, actions } = this.props;
    return (
      <Container fluid>
        <Row style={{ margin: '.5rem' }}>
          <Col>
            <Input
              type="text"
              className={styles.headline}
              value={points.title}
              onChange={event => this.textChanged(event)}
            />
            <hr className="my-2" />
          </Col>
        </Row>
        <Row style={{ margin: '.5rem' }}>
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
