// @flow
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row
} from 'reactstrap';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Overview.css';

type Props = {
  sprints: Array,
  createSprint: () => void,
  removeSprint: (spring: object) => void
};

class Overview extends Component<Props> {
  props: Props;

  render() {
    const { sprints, createSprint, removeSprint } = this.props;
    return (
      <Container fluid>
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem active>Overview</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row className="sticky-top">
          <Col>
            <h3 style={{ padding: '.5rem' }}>Sprints</h3>
          </Col>
          <Col>
            <Button
              color="link"
              className="no-print float-right"
              onClick={() => createSprint()}
            >
              <i className="fa fa-plus" />
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <ListGroup>
              {sprints.map(sprint => (
                <ListGroupItem
                  key={sprint.id}
                  className={styles['sprint-list']}
                >
                  <Link key={sprint.id} to={`/sprint/${sprint.id}`}>
                    {sprint.title.name}
                  </Link>
                  <Button
                    className={styles['delete-btn']}
                    onClick={() => removeSprint(sprint)}
                  >
                    <i className="fas fa-trash" />
                  </Button>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Overview;
