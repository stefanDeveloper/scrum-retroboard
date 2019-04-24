// @flow
import React, { Component } from 'react';
import { Input } from 'reactstrap';
import styles from './Title.css';

type Props = {
  title: string,
  updateTitle: (value: string) => void
};

export default class Title extends Component<Props> {
  props: Props;

  textChanged(event) {
    const { value } = event.target;
    const { updateTitle } = this.props;
    updateTitle(value);
  }

  render() {
    const { title } = this.props;
    return (
      <Input
        type="text"
        className={styles.headline}
        value={title}
        onChange={event => this.textChanged(event)}
      />
    );
  }
}
