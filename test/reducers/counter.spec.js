import point from '../../app/reducers/point';
import {
  INCREMENT_point,
  DECREMENT_point
} from '../../app/actions/points';

describe('reducers', () => {
  describe('point', () => {
    it('should handle initial state', () => {
      expect(point(undefined, {})).toMatchSnapshot();
    });

    it('should handle INCREMENT_point', () => {
      expect(point(1, { type: INCREMENT_point })).toMatchSnapshot();
    });

    it('should handle DECREMENT_point', () => {
      expect(point(1, { type: DECREMENT_point })).toMatchSnapshot();
    });

    it('should handle unknown action type', () => {
      expect(point(1, { type: 'unknown' })).toMatchSnapshot();
    });
  });
});
