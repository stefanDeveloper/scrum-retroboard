// @flow
import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, Input, Label } from 'reactstrap';

type Props = {
  point: {
    id: string,
    text: string,
    likes: string
  },
  fluidContainer: boolean,
  onChange: () => void,
  onLikeClick: () => void,
  onDislikeClick: () => void,
  onDeleteClick: () => void
};

export default class Point extends Component<Props> {
  props: Props;

  render() {
    const {
      onChange,
      onLikeClick,
      onDislikeClick,
      onDeleteClick,
      fluidContainer = true,
      point
    } = this.props;
    return (
      <Form>
        <Container fluid={fluidContainer}>
          <Row>
            <Col xs="auto">
              <Input
                type="text"
                placeholder="Bulled point"
                value={point.text}
                onChange={onChange}
              />
            </Col>
            <Col>
              <Label className="text-center">{point.likes}</Label>
            </Col>
            <Col xs="1">
              <Button color="link" onClick={onLikeClick}>
                <i className="fas fa-thumbs-up" />
              </Button>
            </Col>
            <Col xs="1">
              <Button color="link" onClick={onDislikeClick}>
                <i className="fas fa-thumbs-down" />
              </Button>
            </Col>
            <Col xs="1">
              <Button color="link" onClick={onDeleteClick}>
                <i className="fas fa-times" />
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    );
  }
}
