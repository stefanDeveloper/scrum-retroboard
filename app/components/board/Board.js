// @flow
import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import styles from './Board.css';
import { CONTINUE_POINT, STOP_POINT, START_POINT } from '../tab/TabTypes';
import Tab from '../tab/Tab';
import Title from '../title/Title';
import Avatar from '../avatar/Avatar';

type Props = {
  points: {
    start: Array,
    stop: Array,
    continue: Array
  },
  tabs: Array,
  createPoint: (pointType: string) => void,
  incrementLikeAll: (pointType: string) => void,
  updateImage: (image: object, pointType: string) => void,
  removeImage: (pointType: string) => void
};

class Board extends Component<Props> {
  props: Props;

  render() {
    const {
      points,
      createPoint,
      incrementLikeAll,
      updateImage,
      removeImage,
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
            <Title />
          </Col>
        </Row>
        <Row className={styles.row}>
          {tabs.map(tab => (
            <Col sm="4" key={tab.id}>
              <Avatar
                pointType={tab.tabType}
                onChange={image => updateImage(image, tab.tabType)}
                onRemove={() => removeImage(tab.tabType)}
              />
              <h3 className="sticky-top">
                {tab.title}
                <Button
                  color="link"
                  className="no-print"
                  onClick={() => createPoint(tab.tabType)}
                >
                  <i className="fa fa-plus" />
                </Button>
                <Button
                  color="link"
                  className={styles['like-btn']}
                  onClick={() => incrementLikeAll(tab.tabType)}
                >
                  <i className="fa fa-heart" />
                </Button>
              </h3>
              <hr className="my-2" />
              <Tab points={tab.points} pointType={tab.tabType} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Board;
