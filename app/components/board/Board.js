// @flow
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Col,
  Container,
  Row
} from 'reactstrap';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CONTINUE_POINT, START_POINT, STOP_POINT } from '../tab/TabTypes';

import Avatar from '../avatar/Avatar';
import Tab from '../tab/Tab';
import Title from '../title/Title';
import styles from './Board.css';

type Props = {
  sprints: Array,
  match: object,
  sprintId: string,
  sprintMap: Map,
  sprint: object,
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
      sprints,
      match,
      createPoint,
      incrementLikeAll,
      updateImage,
      removeImage,
      sprintId = match.params.id,
      sprintMap = new Map(sprints.map(el => [el.id, el])),
      sprint = sprintMap.get(sprintId),
      tabs = [
        {
          id: 1,
          tabType: CONTINUE_POINT,
          title: 'Continue'
        },
        {
          id: 2,
          tabType: START_POINT,
          title: 'Start'
        },
        {
          id: 3,
          tabType: STOP_POINT,
          title: 'Stop'
        }
      ]
    } = this.props;
    return (
      <Container fluid>
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem active>
                <Link to="/">Overview</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>{sprint.title.name}</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col>
            <Title sprintId={sprintId} />
          </Col>
        </Row>
        <Row className={styles.row}>
          {tabs.map(tab => (
            <Col sm="4" key={tab.id}>
              <Avatar
                pointType={tab.tabType}
                sprintId={sprintId}
                onChange={image => updateImage(image, tab.tabType, sprintId)}
                onRemove={() => removeImage(tab.tabType, sprintId)}
              />
              <h3 className="sticky-top">
                {tab.title}
                <Button
                  color="link"
                  className="no-print"
                  onClick={() => createPoint(tab.tabType, sprintId)}
                >
                  <i className="fa fa-plus" />
                </Button>
                <Button
                  color="link"
                  className={styles['like-btn']}
                  onClick={() => incrementLikeAll(tab.tabType, sprintId)}
                >
                  <i className="fa fa-heart" />
                </Button>
              </h3>
              <hr className="my-2" />
              <Tab
                key={sprintId + tab.pointType}
                pointType={tab.tabType}
                sprintId={sprintId}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Board;
