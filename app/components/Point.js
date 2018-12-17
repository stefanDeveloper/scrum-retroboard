// @flow
import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Input,
  Badge,
  ButtonGroup
} from 'reactstrap';

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
      <Container>
        <Form>
          <Row>
            <Col>
              <Input
                type="text"
                placeholder="Bulled point"
                value={point.text}
                onChange={onChange}
              />
            </Col>
            <Col sm={1}>
              <Badge pill>{point.likes}</Badge>
            </Col>
          </Row>
          <Row>
            <Col>
              <ButtonGroup>
                <Button block color="link" onClick={onLikeClick}>
                  <i className="fas fa-thumbs-up" />
                </Button>
                <Button block color="link" onClick={onDislikeClick}>
                  <i className="fas fa-thumbs-down" />
                </Button>
                <Button block color="link" onClick={onDeleteClick}>
                  <i className="fas fa-times" />
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}
