// @flow
import React, { Component } from 'react';
import {
  CardTitle,
  Button,
  Input,
  Badge,
  Card,
  ButtonGroup,
  CardBody,
  CardText
} from 'reactstrap';
import styles from './Point.css';

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
      <Card className={styles.point}>
        <CardBody>
          <CardTitle>
            <Input
              type="textarea"
              placeholder="Bulled point"
              value={point.text}
              onChange={onChange}
              className={styles.textarea}
            />
            <Button
              color="link"
              onClick={onDeleteClick}
              className={styles['delete-btn']}
            >
              <i className="fas fa-trash" />
            </Button>
          </CardTitle>
          <CardText>
            <Badge pill>{point.likes}</Badge>
          </CardText>
        </CardBody>
        <ButtonGroup className="no-print">
          <Button block color="link" onClick={onLikeClick}>
            <i className="fas fa-thumbs-up" />
          </Button>
          <Button block color="link" onClick={onDislikeClick}>
            <i className="fas fa-thumbs-down" />
          </Button>
        </ButtonGroup>
      </Card>
    );
  }
}
