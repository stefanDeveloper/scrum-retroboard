// @flow
import React, { Component } from 'react';

import { Input } from 'reactstrap';
import { connect } from 'react-redux';
import styles from './Title.css';
import { update as updateTitle } from '../../actions/titleAction';

type Props = {
  sprints: string,
  sprintId: string,
  title: string,
  update: (value: string) => void
};

class Title extends Component<Props> {
  props: Props;

  textChanged = (event, id) => {
    const { value } = event.target;
    const { update } = this.props;
    update(value, id);
  };

  render() {
    const {
      sprints,
      sprintId,
      title = sprints.find(sprint => sprint.id === sprintId).title.name
    } = this.props;
    return (
      <Input
        type="text"
        className={styles.headline}
        value={title}
        onChange={event => this.textChanged(event, sprintId)}
      />
    );
  }
}

const mapStateToProps = state => ({
  sprints: state.scrum.sprints
});

const mapDispatchToProps = dispatch => ({
  update: (title, id) => dispatch(updateTitle(title, id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Title);
