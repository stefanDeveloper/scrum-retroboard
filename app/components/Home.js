// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  CardText,
  Button,
  CardBody,
  CardTitle,
  Card
} from 'reactstrap';
import styles from './Home.css';
import routes from '../constants/routes';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <Container fluid>
        <Breadcrumb tag="nav" listTag="div">
          <BreadcrumbItem>Home</BreadcrumbItem>
        </Breadcrumb>
        <Card className={styles.card}>
          <CardBody>
            <CardTitle>Scrum Retroboard</CardTitle>
            <CardText>
              Enhance your Retrospective with our very mucho awesome bine board.
            </CardText>
            <Button color="link" innerRef={routes.BOARD}>
              <Link to={routes.BOARD}>to the Board</Link>
            </Button>
          </CardBody>
        </Card>
      </Container>
    );
  }
}
