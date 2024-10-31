import {createStyle} from '@gluestack-style/react';

export const FormControlErrorIcon = createStyle({
  color: '$error500',
  _dark: {
    //@ts-ignore
    color: '$error300',
  },
  props: {
    size: 'sm',
  },
});
