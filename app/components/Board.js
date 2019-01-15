// @flow
import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import styles from './Board.css';
import { CONTINUE_POINT, STOP_POINT, START_POINT } from './TabTypes';
import Tab from './Tab';
import Title from './Title';

type Props = {
  points: {
    start: Array,
    stop: Array,
    continue: Array
  },
  tabs: Array,
  actions: {
    create: (pointType: string) => void,
    incrementLikeAll: (pointType: string) => void,
    updateTitle: (value: string) => void
  }
};

export default class Board extends Component<Props> {
  props: Props;

  render() {
    const {
      points,
      actions,
      tabs = [
        {
          id: 1,
          tabType: CONTINUE_POINT,
          title: 'Continue',
          points: points.continue
        },
        { id: 2, tabType: START_POINT, title: 'Start', points: points.start },
        { id: 3, tabType: STOP_POINT, title: 'Stop', points: points.stop }
      ]
    } = this.props;
    return (
      <Container fluid>
        <Row className={styles.row}>
          <Col>
            <Title
              title={points.title}
              updateTitle={() => actions.updateTitle()}
            />
          </Col>
        </Row>
        <Row className={styles.row}>
          {tabs.map(tab => (
            <Col sm="4" key={tab.id}>
              <h3>
                {tab.title}
                <Button
                  color="link"
                  className="no-print"
                  onClick={() => actions.create(tab.tabType)}
                >
                  <i className="fa fa-plus" />
                </Button>
                <Button
                  color="link"
                  className={styles['like-btn']}
                  onClick={() => actions.incrementLikeAll(tab.tabType)}
                >
                  <i className="fa fa-heart" />
                </Button>
              </h3>
              <hr className="my-2" />
              <Tab
                actions={actions}
                points={tab.points}
                pointType={tab.tabType}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
