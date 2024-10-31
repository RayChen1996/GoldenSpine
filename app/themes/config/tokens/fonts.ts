import {Platform} from 'react-native';

export default {
  heading: undefined,
  body: undefined,
  mono: Platform.select({ios: 'Menlo', android: 'monospace'}),
};
