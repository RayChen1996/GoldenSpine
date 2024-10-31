import basic from './basic';
import brand from './brand';
import status from './status';
import palette from './palette';

export default {
  ...palette,
  ...basic,
  ...brand,
  ...status,
} as const;
