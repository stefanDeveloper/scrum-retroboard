// @flow
import React, { Component } from 'react';
import { Input } from 'reactstrap';
import { connect } from 'react-redux';
import { update as updateTitle } from '../../actions/titleAction';
import styles from './Title.css';

type Props = {
  title: string,
  update: (value: string) => void
};

class Title extends Component<Props> {
  props: Props;

  textChanged = event => {
    const { value } = event.target;
    const { update } = this.props;
    update(value);
  };

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

const mapStateToProps = state => ({
  title: state.titleReducer.title
});

const mapDispatchToProps = dispatch => ({
  update: title => dispatch(updateTitle(title))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Title);
