// @flow
import React, { Component } from 'react';

import { Input } from 'reactstrap';

type Props = {
  title: string,
  className: string,
  update: (value: string) => void
};

class Title extends Component<Props> {
  props: Props;

  render() {
    const { update, title, className } = this.props;
    return (
      <Input
        type="text"
        className={className}
        value={title}
        onChange={event => update(event)}
      />
    );
  }
}

export default Title;
