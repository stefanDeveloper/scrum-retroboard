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
  Card,
  CardImg,
  Row,
  Col
} from 'reactstrap';
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
        <Row>
          <Col sm={2}>
            <Card>
              <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Scrum Retroboard</CardTitle>
                <CardText>
                  Enhance your Retrospective with our very mucho awesome bine
                  board.
                </CardText>
                <Button color="link" innerRef={routes.BOARD}>
                  <Link to={routes.BOARD}>to the Board</Link>
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
