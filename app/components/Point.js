// @flow
import React, { Component } from 'react';
import {
  CardTitle,
  Button,
  Input,
  Badge,
  Card,
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
  onDeleteClick: () => void
};

export default class Point extends Component<Props> {
  props: Props;

  render() {
    const { onChange, onLikeClick, onDeleteClick, point } = this.props;
    return (
      <Card className={styles.point}>
        <CardBody className={styles['card-body']}>
          <CardTitle className={styles['card-title']}>
            <Input
              type="textarea"
              placeholder="bullet point..."
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
          <CardText className={styles['card-text']}>
            <Button
              color="link"
              className={styles['like-btn']}
              onClick={onLikeClick}
            >
              <i className="far fa-thumbs-up" />
            </Button>
            <Badge pill className={styles.badge}>
              + {point.likes}
            </Badge>
          </CardText>
        </CardBody>
      </Card>
    );
  }
}
