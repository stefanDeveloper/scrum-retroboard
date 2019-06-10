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
        <Row>
          <Col>
            <Button
              color="link"
              className="no-print"
              onClick={() => createSprint()}
            >
              <i className="fa fa-plus" />
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Overview;
