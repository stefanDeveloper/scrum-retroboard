// @flow
import React, { Component } from 'react';

type Props = {
  point: object,
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
      <div>
          <div>
            <input type="text" value={point.text} onChange={onChange}/> 
          </div>
          <div>
            <button type="button" onClick={onLikeClick} />
          </div>
          <div>
            <button type="button" onClick={onDislikeClick} />
          </div>
          <div>
            <button type="button" onClick={onDeleteClick} />
          </div>
      </div>
    );
  }
}
