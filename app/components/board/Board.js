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
import stylesTitle from '../title/Title.css';
import styles from './Board.css';

type Props = {
  sprints: Array,
  match: object,
  sprintId: string,
  sprintMap: Map,
  sprint: object,
  tabs: Array,
  createPoint: (pointType: string) => void,
  incrementLikeAll: (pointType: string) => void,
  updateImage: (image: object, pointType: string) => void,
  removeImage: (pointType: string) => void,
  setScale: (scale: string, pointType: string, sprintId: string) => void,
  updateTitle: (title: string, sprintId: string) => void,
  updateTabName: (title: string, pointType: string, sprintId: string) => void
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
      updateTitle,
      updateTabName,
      setScale,
      sprintId = match.params.id,
      sprintMap = new Map(sprints.map(el => [el.id, el])),
      sprint = sprintMap.get(sprintId),
      tabs = [
        {
          id: 1,
          pointType: CONTINUE_POINT
        },
        {
          id: 2,
          pointType: START_POINT
        },
        {
          id: 3,
          pointType: STOP_POINT
        }
      ]
    } = this.props;
    return (
      <Container fluid>
        <Row>
          <Col>
            <Breadcrumb className="no-print">
              <BreadcrumbItem active>
                <Link to="/">Overview</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>{sprint.title.name}</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col>
            <Title
              title={sprint.title.name}
              className={stylesTitle.headline}
              update={event => updateTitle(event.target.value, sprintId)}
            />
          </Col>
        </Row>
        <Row className={styles.row}>
          {tabs.map(tab => (
            <Col sm="4" key={tab.id}>
              <Avatar
                pointType={tab.pointType}
                sprintId={sprintId}
                onChange={image => updateImage(image, tab.pointType, sprintId)}
                onRemove={() => removeImage(tab.pointType, sprintId)}
                onScale={event =>
                  setScale(event.target.value, tab.pointType, sprintId)
                }
              />
              <h3 className="sticky-top">
                <Title
                  title={sprint.title[tab.pointType]}
                  className={stylesTitle.headline}
                  update={event =>
                    updateTabName(event.target.value, tab.pointType, sprintId)
                  }
                />
                <Button
                  color="link"
                  className="no-print"
                  onClick={() => createPoint(tab.pointType, sprintId)}
                >
                  <i className="fa fa-plus" />
                </Button>
                <Button
                  color="link"
                  className={styles['like-btn']}
                  onClick={() => incrementLikeAll(tab.pointType, sprintId)}
                >
                  <i className="fa fa-heart" />
                </Button>
              </h3>
              <hr className="my-2" />
              <Tab
                key={sprintId + tab.pointType}
                pointType={tab.pointType}
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
