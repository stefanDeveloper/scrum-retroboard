// @flow
import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, Input, Badge } from 'reactstrap';

type Props = {
  point: {
    id: string,
    text: string,
    likes: string
  },
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
      point
    } = this.props;
    return (
      <Form>
        <Container fluid>
          <Row>
            <Col xs="auto">
              <Input
                type="text"
                placeholder="Bulled point"
                value={point.text}
                onChange={onChange}
              />
            </Col>
            <Col xs="1">
              <Badge pill>{point.likes}</Badge>
            </Col>
          </Row>
          <Row style={{ padding: '.5rem' }}>
            <Col>
              <Button block color="success" onClick={onLikeClick}>
                <i className="fas fa-thumbs-up" />
              </Button>
            </Col>
            <Col>
              <Button block color="danger" onClick={onDislikeClick}>
                <i className="fas fa-thumbs-down" />
              </Button>
            </Col>
            <Col>
              <Button block color="danger" onClick={onDeleteClick}>
                <i className="fas fa-times" />
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    );
  }
}
